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


