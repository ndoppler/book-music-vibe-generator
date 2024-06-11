// JavaScript JQuery Elements
spotifyResultsEl = $('#spotifyResults')

// Spotify Credentials
const clientId = '9fa2e110194042238f5becb0c3425fc1';
const clientSecret = '97238e1767714ed2adafb1a197947f4e';

// Spotify Authorization - Client Credentials
function getAccessToken(clientId, clientSecret) {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  })
    .then(response => response.json())
    .then(data => getPlaylist(data.access_token, "Gloria Gaynor"));
}

function getPlaylist(access_token, search) {
  return fetch(`https://api.spotify.com/v1/search?q=${search}&type=playlist`, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  })
    .then(response => response.json())
    .then(function (data) {

      console.log(data)

      spotifyResultsHeader = $('<h2>')
        .text = 'Spotify Results'

      spotifyDivider = $('<div>')
        .addClass()

      playlistSection = $('<ul>')
        .addClass('image is-128x128')

      playlistOneHeader = $('<li>')
        .text(`${data.playlists.items[0].name}`)

      playlistOneImage = $('<img>')
        .addClass('image is-rounded')
        .attr('src', `${data.playlists.items[0].images[0].url}`)
      
      console.log(data.playlists.items[0].images[0].url)

      playlistTwoHeader = $('<li>')
        .text(`${data.playlists.items[1].name}`)
      
      

      spotifyResultsEl.append(spotifyResultsHeader)
      spotifyResultsEl.append(playlistSection)
      playlistSection.append(playlistOneImage)
      playlistSection.append(playlistOneHeader)

      playlistSection.append(playlistTwoHeader)

    });
}


// Library Search API
getAccessToken(clientId, clientSecret);

const libraryAPI = "https://openlibrary.org/search.json?title=";
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

/*
function getApi() {

  const booktitle = searchInput.value;
  const requestUrl = libraryAPI + booktitle;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.docs);
      const books = data.docs;
      for (let i = 0; i < books.length; i++) {
        console.log(books[i].subject);
      }
    });

  console.log("I work")
}

searchButton.addEventListener("click", getApi);
*/

async function searchByAuthor(authorName) {
    const searchUrl = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(authorName)}`;

    try {
        console.log(`Fetching data from: ${searchUrl}`) // log the url being fetched
        const response = await fetch(searchUrl);
        const data = await response.json();

        console.log(`Number of authors found: ${data.numFound}`); // logs the number of authors
        if (data.numFound > 0) {
            const authors = data.docs.slice(0, 5).map(author => ({
                key: author.key,
                name: author.name,
                top_work: author.top_work,
            }));
            console.log('Authors data:', authors); // logs the authors data
            return authors;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching author data:', error);
        return [];
    }
}
    searchButton.addEventListener('click', async () => {
        const authorName = searchInput.value;
        const authors = await searchByAuthor(authorName);
    })
// example only
// searchByAuthor('F. Scott Fitzgerald')
//     .then(authors => {
//         if (authors.length > 0) {
//             const authorsArray = [];

//             authors.forEach(author => {
//                 authorsArray.push(author);
//             });

//             console.log(authorsArray);
//         } else {
//             console.error("No authors found");
//         }
//     })
//     .catch(error => console.error(error));

