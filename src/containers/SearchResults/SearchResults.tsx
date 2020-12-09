import * as React from "react";
import { MESSAGE_TYPE } from "@ui/Molecules/Message/Message.types";

import { Message, Movie } from "@ui/Molecules";
import { FETCH_STATE } from "@pages/Home/Home.types";
import { Props, SEARCH_RESULTS_TEST_IDS } from "./SearchResults.types";

const SearchResults: React.FC<Props> = ({ fetchState, results, error }) => {
  if (fetchState === FETCH_STATE.FETCHING) {
    return (
      <Message
        messageType={MESSAGE_TYPE.INFO}
        data-testid={SEARCH_RESULTS_TEST_IDS.LOADING_MSG}
      >
        Loading...
      </Message>
    );
  }

  if (fetchState === FETCH_STATE.SUCCESS && results?.Search) {
    return (
      <ul data-testid={SEARCH_RESULTS_TEST_IDS.SEARCH_RESULTS}>
        {results.Search.map((result) => (
          <Movie data={result} key={result.imdbID} />
        ))}
      </ul>
    );
  }

  if (fetchState === FETCH_STATE.ERROR) {
    return (
      <Message
        messageType={MESSAGE_TYPE.ERROR}
        data-testid={SEARCH_RESULTS_TEST_IDS.ERROR_MSG}
      >
        {error || "Error encountered, please try again later"}
      </Message>
    );
  }

  return null;
};

export { SearchResults };
