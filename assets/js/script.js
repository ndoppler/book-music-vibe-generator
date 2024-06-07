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

