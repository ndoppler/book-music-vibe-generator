# Perfect Reading Vibe Generator

## User Story 

```md 
AS AN avid reader, 
I want to search for a book's title and choose a suggested playlist related to the book's theme, 
SO THAT I can have an amazing reading experience.
```

## Acceptance Criteria

```md 
GIVEN an application to search for a theme oriented playlist
WHEN I open the application 
THEN I'm presented with a search bar with input field, an option field and a submit button 
WHEN I do a search
THEN I can choose to search for an author or book title with the option field 
WHEN I  search for an author 
THEN I'm presented with a modal showing Top Works then I can select one title and search the themes
WHEN I search for a book title
THEN I'm presented with a selection of maximum 5 titles with that name and it shows each author
WHEN I select a title 
THEN I'm presented with cards that contain the themes of the book 
WHEN I choose a theme
THEN I'm presented with a selection of playlist cards based on the theme chosen 
WHEN I look at the playlist card
THEN I see a link that redirects me to the Spotify Playlist 
```

## Description

Our app allows users to be recommended complimentary playlists to their searches based on books or authors. We used Open Library APIs to search Book Titles and Authors, as well as get Cover Art.  When a user searchs for authors, they are returned with the author's most popular works. Once the work is selected, either by the Author Results Modal, or through a direct title search, the user is presented with the themes of the selected book. The themes then generate Spotify playists based on the selected theme.

## Technology Used

Our app utilizes:
- HTML
- CSS
- Bulma 1.0.0 (CSS Framework)
-JavaScript
    - jQuery 3.5.1
- OpenLibrary APIs
    - [Book Title Search](https://openlibrary.org/dev/docs/api/search)
    - [Author Search](https://openlibrary.org/dev/docs/api/authors)
    - [Book Cover Search](https://openlibrary.org/dev/docs/api/covers)
- Spotify API
    - [Playlist Search](https://developer.spotify.com/documentation/web-api/reference/get-playlist)

## Mock Up

First, our Application Wireframe was built that we utilized to generate our HTML layout with Bulma as our CSS Framework:
<img title="Application Wireframe" alt="Initial Wireframe" src="./assets/images/Perfect Ambient Generator App.png">

Then, we generated a API Pipeline Process Map to demonstrate how our code and APIs would work together to achieve our goal.
<img title="API Pipeline" alt="Process Map" src="./assets/images/API Logic Pipeline.png">

![Perform of a book search by title, books titles and a book cover is retrieved, the user then click on a book title and on the subjects, a theme matching spotify list appears at the bottom. Another search is done by author, a modal pop up with the author's top works then a theme search is generated, the user click on a theme and a theme matching spotify list is retrieved.](/assets/images/Perfect-Ambient-Generator.gif)

## Deployed Application 
[Live URL](https://ndoppler.github.io/book-music-vibe-generator/)


## Credits 

Thanks to Stephen and Akon for their support! 