import { ISearchResult } from "./searchResult.dto";

export enum SEARCH_PAYLOAD_RESPONSE {
  False = "False",
  True = "True",
}

export interface ISearchResultsPayload {
  Search: ISearchResult[];
  totalResults: string;
  Response: SEARCH_PAYLOAD_RESPONSE;
  Error?: string;
}
