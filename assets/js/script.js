// JavaScript JQuery Elements
spotifyResultsEl = $('#spotifyResults')
topFourResultsEl = $('#topFourResults')

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

      // Generation of Playlist One Elements for Playlist One Card
      playlistOneCard = $('<div>')
        .addClass("card column")
      playlistTwoCard = $('<div>')
        .addClass("card column")
      playlistThreeCard = $('<div>')
        .addClass("card column")
      playlistFourCard = $('<div>')
        .addClass("card column")

      playlistOneCardContent = $('<div>')
        .addClass("card-content has-background-primary-dark ")
      playlistTwoCardContent = $('<div>')
        .addClass("card-content has-background-primary-dark ")
      playlistThreeCardContent = $('<div>')
        .addClass("card-content has-background-primary-dark ")
      playlistFourCardContent = $('<div>')
        .addClass("card-content has-background-primary-dark ")

      playlistOneMedia = $('<div>')
        .addClass("media")
      playlistTwoMedia = $('<div>')
        .addClass("media")
      playlistThreeMedia = $('<div>')
        .addClass("media")
      playlistFourMedia = $('<div>')
        .addClass("media")

      playlistOneMediaLeft = $('<div>')
        .addClass("media-left")
      playlistTwoMediaLeft = $('<div>')
        .addClass("media-left")
      playlistThreeMediaLeft = $('<div>')
        .addClass("media-left")
      playlistFourMediaLeft = $('<div>')
        .addClass("media-left")

      playlistOneFigure = $('<div>')
        .addClass("image is-48x48")
      playlistTwoFigure = $('<div>')
        .addClass("image is-48x48")
      playlistThreeFigure = $('<div>')
        .addClass("image is-48x48")
      playlistFourFigure = $('<div>')
        .addClass("image is-48x48")

      playlistOneImage = $('<img>')
        .addClass('image is-rounded')
        .attr('src', `${data.playlists.items[0].images[0].url}`)
      playlistTwoImage = $('<img>')
        .addClass('image is-rounded')
        .attr('src', `${data.playlists.items[1].images[0].url}`)
      playlistThreeImage = $('<img>')
        .addClass('image is-rounded')
        .attr('src', `${data.playlists.items[2].images[0].url}`)
      playlistFourImage = $('<img>')
        .addClass('image is-rounded')
        .attr('src', `${data.playlists.items[3].images[0].url}`)

      playlistOneMediaContent = $('<div>')
        .addClass("media-content")
      playlistTwoMediaContent = $('<div>')
        .addClass("media-content")
      playlistThreeMediaContent = $('<div>')
        .addClass("media-content")
      playlistFourMediaContent = $('<div>')
        .addClass("media-content")

      playlistOneHeader = $('<p>')
        .addClass("title is-4")
        .text(`${data.playlists.items[0].name}`)
      playlistTwoHeader = $('<p>')
        .addClass("title is-4")
        .text(`${data.playlists.items[1].name}`)
      playlistThreeHeader = $('<p>')
        .addClass("title is-4")
        .text(`${data.playlists.items[2].name}`)
      playlistFourHeader = $('<p>')
        .addClass("title is-4")
        .text(`${data.playlists.items[3].name}`)

      playlistOneSubHeader = $('<a>')
        .addClass("subtitle is-6 m-2")
        .attr({
          "href": data.playlists.items[0].external_urls.spotify,
          "target": "_blank"
        })
        .text('View Playlist')
      playlistTwoSubHeader = $('<a>')
        .addClass("subtitle is-6 m-2")
        .attr({
          "href": data.playlists.items[1].external_urls.spotify,
          "target": "_blank"
        })
        .text('View Playlist')
      playlistThreeSubHeader = $('<a>')
        .addClass("subtitle is-6 m-2")
        .attr({
          "href": data.playlists.items[2].external_urls.spotify,
          "target": "_blank"
        })
        .text('View Playlist')
      playlistFourSubHeader = $('<a>')
        .addClass("subtitle is-6 m-2")
        .attr({
          "href": data.playlists.items[3].external_urls.spotify,
          "target": "_blank"
        })
        .text('View Playlist')

      // Creation of Spotify Results Header --Still needs Bulma Formatting
      spotifyResultsEl.append(spotifyResultsHeader)
      // Creation of Spotify Playlist 1 Result Card
      topFourResultsEl.append(playlistOneCard)
      topFourResultsEl.append(playlistTwoCard)
      topFourResultsEl.append(playlistThreeCard)
      topFourResultsEl.append(playlistFourCard)
      playlistOneCard.append(playlistOneCardContent)
      playlistTwoCard.append(playlistTwoCardContent)
      playlistThreeCard.append(playlistThreeCardContent)
      playlistFourCard.append(playlistFourCardContent)
      playlistOneCardContent.append(playlistOneMedia)
      playlistTwoCardContent.append(playlistTwoMedia)
      playlistThreeCardContent.append(playlistThreeMedia)
      playlistFourCardContent.append(playlistFourMedia)

      playlistOneMedia.append(playlistOneMediaLeft)
      playlistTwoMedia.append(playlistTwoMediaLeft)
      playlistThreeMedia.append(playlistThreeMediaLeft)
      playlistFourMedia.append(playlistFourMediaLeft)

      playlistOneMedia.append(playlistOneMediaContent)
      playlistTwoMedia.append(playlistTwoMediaContent)
      playlistThreeMedia.append(playlistThreeMediaContent)
      playlistFourMedia.append(playlistFourMediaContent)

      playlistOneMediaLeft.append(playlistOneFigure)
      playlistTwoMediaLeft.append(playlistTwoFigure)
      playlistThreeMediaLeft.append(playlistThreeFigure)
      playlistFourMediaLeft.append(playlistFourFigure)

      playlistOneFigure.append(playlistOneImage)
      playlistTwoFigure.append(playlistTwoImage)
      playlistThreeFigure.append(playlistThreeImage)
      playlistFourFigure.append(playlistFourImage)

      playlistOneMediaContent.append(playlistOneHeader)
      playlistTwoMediaContent.append(playlistTwoHeader)
      playlistThreeMediaContent.append(playlistThreeHeader)
      playlistFourMediaContent.append(playlistFourHeader)

      playlistOneMediaContent.append(playlistOneSubHeader)
      playlistTwoMediaContent.append(playlistTwoSubHeader)
      playlistThreeMediaContent.append(playlistThreeSubHeader)
      playlistFourMediaContent.append(playlistFourSubHeader)
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


