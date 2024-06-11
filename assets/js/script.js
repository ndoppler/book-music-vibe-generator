const libraryAPI = "https://openlibrary.org/search.json?title=";
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


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
      bookEl.innerHTML = " ";
      for (let i = 0; i < books.length; i++) {
        const book = {
          title: books[i].title,
          author: books[i].author_name,
          subject: books[i].subject,
        }

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
  document.location.href = "https://google.com"
});

      }

    });
};



searchButton.addEventListener("click", getApi);


