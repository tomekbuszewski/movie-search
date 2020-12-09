import { FETCH_STATE } from "@pages/Home/Home.types";
import { ISearchResultsPayload } from "@contracts/searchResultPayload.dto";

export interface Props {
  fetchState: FETCH_STATE;
  results?: ISearchResultsPayload;
  error?: string;
}

export enum SEARCH_RESULTS_TEST_IDS {
  SEARCH_RESULTS = "home-search-results",
  ERROR_MSG = "home-error-message",
  LOADING_MSG = "home-loading-message",
}
