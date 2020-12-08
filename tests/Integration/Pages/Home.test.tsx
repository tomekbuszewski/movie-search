import * as React from "react";
import { ThemeProvider } from "styled-components";
import { render, screen, waitFor, act } from "@testing-library/react";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import { theme } from "@ui/theme";

import { movieSearchErrorHandler, handlers } from "@mocks/handlers";
import { Home } from "@pages/Home";
import { HOME_PAGE_TEST_IDS } from "@pages/Home/Home.types";
import { SEARCH_RESULTS_TEST_IDS } from "@containers/SearchResults/SearchResult.types";
import results from "@mocks/searchResults";

const server = setupServer(...handlers);

const WrappedHome = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

describe("`Home` page tests", () => {
  const SUCCESS_QUERY = "blade runner";
  const ERROR_QUERY = "error";
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should properly render initial view with input", () => {
    render(<WrappedHome />);

    expect(screen.getByTestId(HOME_PAGE_TEST_IDS.INPUT)).toBeInTheDocument();
  });

  it("should properly launch the search", async () => {
    render(<WrappedHome />);

    expect(
      screen.queryByTestId(SEARCH_RESULTS_TEST_IDS.LOADING_MSG),
    ).not.toBeInTheDocument();

    userEvent.type(
      screen.getByTestId(HOME_PAGE_TEST_IDS.INPUT),
      `${SUCCESS_QUERY}{enter}`,
    );

    expect(screen.getByTestId(HOME_PAGE_TEST_IDS.INPUT)).toHaveValue(
      SUCCESS_QUERY,
    );

    expect(
      screen.getByTestId(SEARCH_RESULTS_TEST_IDS.LOADING_MSG),
    ).toBeInTheDocument();
  });

  it("should properly render results", async () => {
    render(<WrappedHome />);

    expect(
      screen.queryByTestId(SEARCH_RESULTS_TEST_IDS.LOADING_MSG),
    ).not.toBeInTheDocument();

    userEvent.type(
      screen.getByTestId(HOME_PAGE_TEST_IDS.INPUT),
      `${SUCCESS_QUERY}{enter}`,
    );

    await waitFor(() =>
      screen.getByTestId(SEARCH_RESULTS_TEST_IDS.SEARCH_RESULTS),
    );

    expect(
      screen.getByTestId(SEARCH_RESULTS_TEST_IDS.SEARCH_RESULTS),
    ).toBeInTheDocument();

    expect(
      screen
        .getByTestId(SEARCH_RESULTS_TEST_IDS.SEARCH_RESULTS)
        .querySelectorAll("li").length,
    ).toBe(results.Search.length);
  });

  it("should properly render error", async () => {
    server.use(movieSearchErrorHandler);

    render(<WrappedHome />);

    expect(
      screen.queryByTestId(SEARCH_RESULTS_TEST_IDS.LOADING_MSG),
    ).not.toBeInTheDocument();

    userEvent.type(
      screen.getByTestId(HOME_PAGE_TEST_IDS.INPUT),
      `${ERROR_QUERY}{enter}`,
    );

    await waitFor(() => screen.getByTestId(SEARCH_RESULTS_TEST_IDS.ERROR_MSG));
  });
});
