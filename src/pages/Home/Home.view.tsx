import * as React from "react";
import { ChangeEvent, FormEvent } from "react";
import { Input } from "@ui/Atoms";
import { FETCH_STATE, HOME_PAGE_TEST_IDS } from "./Home.types";
import { SearchResults } from "@containers/SearchResults";
import { ISearchResultsPayload } from "@contracts/searchResultPayload.dto";

interface Props {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fetchState: FETCH_STATE;
  searchResults?: ISearchResultsPayload;
  searchTrigger: (e: FormEvent) => void;
  error?: string;
}

const View: React.FC<Props> = ({
  onSearchChange,
  fetchState,
  searchResults,
  searchTrigger,
  error,
}) => (
  <React.Fragment>
    <form onSubmit={searchTrigger}>
      <Input
        data-testid={HOME_PAGE_TEST_IDS.INPUT}
        minLength={3}
        placeholder={"Type and press [Enter]"}
        onChange={onSearchChange}
      />
    </form>
    <SearchResults
      fetchState={fetchState}
      results={searchResults}
      error={error}
    />
  </React.Fragment>
);

export { View };
