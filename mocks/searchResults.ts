import {
  ISearchResultsPayload,
  SEARCH_PAYLOAD_RESPONSE,
} from "@contracts/searchResultPayload.dto";

const results: ISearchResultsPayload = {
  Search: [
    {
      Title: "Blade Runner",
      Year: "1982",
      imdbID: "tt0083658",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner 2049",
      Year: "2017",
      imdbID: "tt1856101",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner: Black Out 2022",
      Year: "2017",
      imdbID: "tt7428594",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGNiNmNiMTctMDI4OS00OWYxLWE4ZWEtZjFkZjU4ZmY5YzEyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
    },
    {
      Title: "Dangerous Days: Making Blade Runner",
      Year: "2007",
      imdbID: "tt1080585",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzI2NjU0MjY4MF5BMl5BanBnXkFtZTgwMjM0NDQzNjE@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner",
      Year: "1997",
      imdbID: "tt0126817",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWRkYjczZWMtN2Q5NS00YWFmLTk3M2MtNWUwNWRjYzdkMjZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Oscar Pistorius: Blade Runner Killer",
      Year: "2017",
      imdbID: "tt7445510",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTYxZjU5YTgtN2NmOC00NmQ0LTk4MmEtYjc0YmI5MTI0ZDFhXkEyXkFqcGdeQXVyNTMzNDY2NzU@._V1_SX300.jpg",
    },
    {
      Title: "On the Edge of 'Blade Runner'",
      Year: "2000",
      imdbID: "tt0281011",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWJmOThjMjItNzE4Ni00YmY3LTk2NzEtMTJlYTQxZGE1MDYyXkEyXkFqcGdeQXVyMTM3NzQ5NzQ@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner: Deleted and Alternate Scenes",
      Year: "2007",
      imdbID: "tt1165254",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Blade Runner 2049: To Be Human: - Casting Blade Runner 2049",
      Year: "2018",
      imdbID: "tt7879362",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjRjZDVkMTMtMzZlZC00YzBhLWJkYjQtNWVjNzVhNzg1NjAxXkEyXkFqcGdeQXVyMjA3NzQyMA@@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner 60: Director's Cut",
      Year: "2012",
      imdbID: "tt1846491",
      Type: "movie",
      Poster: "N/A",
    },
  ],
  totalResults: "26",
  Response: "True" as SEARCH_PAYLOAD_RESPONSE,
};

export default results;
