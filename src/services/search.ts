import ky from "ky-universal";

import { API_KEY, API_URL } from "@config/config";

interface ISearchEngine<T> {
  query: (input: string) => Promise<T>;
}

export class SearchEngine<T> implements ISearchEngine<T> {
  private readonly client = ky;
  private readonly apiKey = API_KEY;
  private readonly apiUrl = API_URL;

  private constructQuery(input: string): string {
    return `${this.apiUrl}?apiKey=${this.apiKey}&s=${input}`;
  }

  public async query(input: string): Promise<T> {
    const response = await this.client.get(this.constructQuery(input));

    return await response.json();
  }
}
