import ky from "ky-universal";

import { ISearchResultsPayload } from "@contracts/searchResultPayload.dto";
import { API_KEY, API_URL } from "@config/config";

interface ISearchEngine {
  query: (input: string) => Promise<ISearchResultsPayload>;
}

export class SearchEngine implements ISearchEngine {
  private readonly client = ky;
  private readonly apiKey = API_KEY;
  private readonly apiUrl = API_URL;

  private constructQuery(input: string): string {
    return `${this.apiUrl}?apiKey=${this.apiKey}&s=${input}`;
  }

  public async query(input: string): Promise<ISearchResultsPayload> {
    const response = await this.client.get(this.constructQuery(input));

    return await response.json();
  }
}
