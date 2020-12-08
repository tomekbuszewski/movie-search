import * as React from "react";

import { Movie } from "./";

export const Normal = () => (
  <Movie
    data={{
      Title: "Blade Runner",
      Year: "1982",
      imdbID: "tt0083658",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    }}
  />
);

export default {
  component: Movie,
  title: "Molecules/Movie",
};
