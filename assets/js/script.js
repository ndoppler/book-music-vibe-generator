
const libraryAPI = "https://openlibrary.org/search.json?title="

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
  .then(data => console.log("data", data));
}

getAccessToken(clientId, clientSecret);
=======
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
          for (let i = 0; i <books.length; i++) {
       console.log (books[i].subject);
    }
        });

}

searchButton.addEventListener("click", getApi);


