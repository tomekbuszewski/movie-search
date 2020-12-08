import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { index } from "@config/routes";
import { PageWrapper } from "@ui/Atoms";

const Routes: React.FunctionComponent = () => (
  <PageWrapper>
    <Switch>
      <Route {...index} />
    </Switch>
  </PageWrapper>
);

export { Routes };
