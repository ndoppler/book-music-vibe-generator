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


async function searchByAuthor(authorName) {
    const searchUrl = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(authorName)}`;

    try {
        const response = await fetch(searchUrl);
        const data = await response.json();

        if (data.numFound > 0) {
            const authors = data.docs.slice(0, 5).map(author => ({
                key: author.key,
                name: author.name,
                top_work: author.top_work,
            }));
            return authors;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
}

async function fetchAuthorWorks(authorKey, limit = 5) {
    const worksUrl = `https://openlibrary.org/authors/${authorKey}/works.json?limit=${limit}`;

    try {
        const response = await fetch(worksUrl);
        const data = await response.json();

        if (data.entries && data.entries.length > 0) {
            const works = data.entries.map(work => ({
                title: work.title,
                key: work.key,
            }));
            return works;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput').value;
    const searchType = document.getElementById('searchType').value;
    const authorResultsContainer = document.getElementById('authorSearchResults');

    if (searchType.toLowerCase() === 'author') {
        const authors = await searchByAuthor(searchInput);
        if (authors.length > 0) {
            const authorKey = authors[0].key;
            const works = await fetchAuthorWorks(authorKey, 5);

            if (works.length > 0) {
                authorResultsContainer.textContent = "Top Works"
                works.forEach(work => {
                    const workElement = document.createElement('div');
                    workElement.textContent = `${work.title}`;
                    authorResultsContainer.appendChild(workElement);
                });
            } else {
                authorResultsContainer.textContent = "No works found";
            }
        } else {
            authorResultsContainer.textContent = "No authors found";
        }
    }
});
