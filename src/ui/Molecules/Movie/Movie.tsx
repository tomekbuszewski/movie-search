/**
 * @author tomek
 * @since 2020-12-08 18:56:33
 */

import * as React from "react";

import {
  MovieTitle,
  MovieYear,
  StyledMovie,
  Cover,
  Action,
  Wrapper,
} from "./Movie.styles";
import { BaseProps as Props } from "./Movie.types";
import { hasCover } from "./Movie.helpers";

const Movie: React.FC<Props> = ({ data }) => (
  <StyledMovie>
    <Cover
      src={
        hasCover(data) ? data.Poster : "https://www.fillmurray.com/g/200/300"
      }
      alt={data.Title}
    />
    <Wrapper>
      <MovieTitle>{data.Title}</MovieTitle>
      <MovieYear>{data.Year}</MovieYear>
      <Action
        onClick={() => window.open(`https://imdb.com/title/${data.imdbID}`)}
      >
        See on iMDB
      </Action>
    </Wrapper>
  </StyledMovie>
);

export { Movie };
