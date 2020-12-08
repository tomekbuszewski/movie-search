import { ISearchResult } from "@contracts/searchResult.dto";

const hasCover = ({ Poster }: ISearchResult): boolean => Poster !== "N/A";

export { hasCover };
