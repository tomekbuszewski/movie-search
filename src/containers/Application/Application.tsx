import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";

import { theme } from "@ui/theme";
import { GlobalStyle } from "@ui/GlobalStyle";

import { ErrorBoundary } from "@containers/ErrorBoundary";

import { Routes } from "@containers/Routes";
import { PAGE_TITLE } from "@config/config";

const BareApplication = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Router>
        <React.Fragment>
          <Helmet
            titleTemplate={`%s — ${PAGE_TITLE}`}
            defaultTitle={PAGE_TITLE}
          />
          <GlobalStyle />
          <Routes />
        </React.Fragment>
      </Router>
    </ThemeProvider>
  </ErrorBoundary>
);

export const Application = hot(module)(BareApplication);
