const libraryAPI = "https://openlibrary.org/search.json?title="
const searchButton = document.getElementById('searchButton');



function getApi () {

    fetch(libraryAPI)
    .then(function (response){
        return response.json();
    })
    .then(function (data)) {
        console.log(data)
    }
}








searchButton.addEventListener('click', getApi)