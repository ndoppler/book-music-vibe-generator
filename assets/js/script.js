const libraryAPI = "https://openlibrary.org/search.json?title=";
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


function getApi() {

    const booktitle = searchInput.value;
console.log (booktitle);
console.log(libraryAPI+booktitle);
    fetch(libraryAPI+booktitle)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        
    console.log("I work")
}

searchButton.addEventListener("click", getApi);

