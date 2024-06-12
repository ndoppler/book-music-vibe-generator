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
    .then(data => console.log("data", data));
    .then(response => response.json())
    .then(function (data) {

      console.log(data)

      spotifyResultsHeader = $('<h2>')
        .text = 'Spotify Results'

// Generation of Playlist One Elements for Playlist One Card
      playlistOneCard = $('<div>')
        .addClass("card m-5 column is-one-quarter")

      playlistOneCardContent = $('<div>')
        .addClass("card-content has-background-primary-dark ")

      playlistOneMedia = $('<div>')
        .addClass("media")

      playlistOneMediaLeft = $('<div>')
        .addClass("media-left")

      playlistOneFigure = $('<div>')
        .addClass("image is-48x48")

      playlistOneImage = $('<img>')
        .addClass('image is-rounded')
        .attr('src', `${data.playlists.items[0].images[0].url}`)

      playlistOneMediaContent = $('<div>')
        .addClass("media-content")

      playlistOneHeader = $('<p>')
        .addClass("title is-4")
        .text(`${data.playlists.items[0].name}`)

      playlistOneSubHeader = $('<a>')
        .addClass("subtitle is-6 m-2")
        .attr({
          "href": data.playlists.items[0].external_urls.spotify,
          "target": "_blank"
        })
        .text('View Playlist')

      // Creation of Spotify Results Header --Still needs Bulma Formatting
      spotifyResultsEl.append(spotifyResultsHeader)
      // Creation of Spotify Playlist 1 Result Card
      spotifyResultsEl.append(playlistOneCard)
      playlistOneCard.append(playlistOneCardContent)
      playlistOneCardContent.append(playlistOneMedia)
      playlistOneMedia.append(playlistOneMediaLeft)
      playlistOneMedia.append(playlistOneMediaContent)
      playlistOneMediaLeft.append(playlistOneFigure)
      playlistOneFigure.append(playlistOneImage)
      playlistOneMediaContent.append(playlistOneHeader)
      playlistOneMediaContent.append(playlistOneSubHeader)
      playlistOneMediaContent.append(playlistOneTrackModal)
    });
}

// function renderBook () {
//   const bookEl = document.getElementById('bookResults');
// const bookCard= document.createElement('div');
// const titleEL = document.createElement('h2');

// titleEL.textContent = ;

// bookCard.append(titleEL);
// bookEL.append(bookCard);
// }



getAccessToken(clientId, clientSecret);
// Book Search

const libraryAPI = "https://openlibrary.org/search.json?title=";
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


function getApi() {
  // const query = document.getElementById('option');
  // console.log(query);
  const booktitle = searchInput.value;
  const requestUrl = libraryAPI + booktitle + "&limit=5";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    //Retrieves subject from each book
    .then(function (data) {
      console.log(data.docs);
      const books = data.docs;
      const bookEl = document.getElementById('bookResults');
   

      // const subject = data.subject;
      // console.log(JSON.stringify(subject));


      bookEl.innerHTML = " ";

      
      for (let i = 0; i < books.length; i++) {
       console.log(Array.isArray(books[i].subject));
       console.log(books[i]);
       if (!books[i].subject) {
        continue 
       }
        const book = {
          title: books[i].title,
          author: books[i].author_name,
          subject: books[i].subject,
        }

        localStorage.setItem("book", JSON.stringify(book));
        const bookCard = document.createElement('div');
        const titleEL = document.createElement('h2');
        const authorEl = document.createElement('p');

        titleEL.textContent = book.title;
        authorEl.textContent = book.author;

        bookCard.setAttribute('class', 'card');

          bookCard.append(titleEL);
          bookCard.append(authorEl);
        bookEl.append(bookCard);

bookCard.addEventListener('click', function (){
  // document.location.href = "https://google.com"

  const book = JSON.parse(localStorage.getItem("book"));
  console.log(book);
  const subjectEL = document.getElementById('subjectResults');
  const subjectCard = document.createElement('div');
  const subject = document.createElement('h2');
 

  subjectEL.textContent = book.subject;
 console.log(book.subject);

  subjectCard.setAttribute('class', 'card');

   subjectCard.append(subject);
subjectEL.append(subjectCard);



});

      }

    });
};



searchButton.addEventListener("click", getApi);


