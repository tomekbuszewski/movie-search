import { rest } from "msw";
import results from "./searchResults";
import error from "./searchNoMovie";

import { API_URL } from "@config/config";
import { SEARCH_ENDPOINT } from "@config/endpoints";

const movieSearchSuccessHandler = rest.get(
  `${API_URL}/${SEARCH_ENDPOINT}`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(results));
  },
);

const movieSearchErrorHandler = rest.get(
  `${API_URL}/${SEARCH_ENDPOINT}`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(error));
  },
);

const handlers = [movieSearchSuccessHandler];

export { handlers, movieSearchSuccessHandler, movieSearchErrorHandler };
