import * as React from "react";
import { ChangeEvent } from "react";

import { ISearchResultsPayload } from "@contracts/searchResultPayload.dto";
import { SearchEngine } from "@services/search";
import { FETCH_STATE } from "./Home.types";

import { View } from "./Home.view";

const engine = new SearchEngine();

const Home: React.FC = () => {
  const [error, setError] = React.useState<string>();
  const [fetchState, setFetchState] = React.useState<FETCH_STATE>(
    FETCH_STATE.IDLE,
  );
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<
    ISearchResultsPayload
  >();

  const search = () => {
    if (searchQuery.length >= 3) {
      setError(undefined);
      setFetchState(FETCH_STATE.FETCHING);

      (async () => {
        try {
          const response = await engine.query(searchQuery);

          if (response?.Search) {
            setSearchResults(response);
            setFetchState(FETCH_STATE.SUCCESS);
          } else {
            setFetchState(FETCH_STATE.ERROR);
            setError(response.Error);
          }
        } catch (e) {
          console.log(e);
          setFetchState(FETCH_STATE.ERROR);
        }
      })();
    }
  };

  const onSearchChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(value);
  };

  return (
    <View
      onSearchChange={onSearchChange}
      fetchState={fetchState}
      searchResults={searchResults}
      searchTrigger={search}
      error={error}
    />
  );
};

export { Home };
