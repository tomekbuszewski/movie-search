import loadable from "@loadable/component";

import { RouteProps } from "react-router-dom";

const Home = loadable(() => import("@pages/Home"));

export enum ROUTES {
  HOME = "/",
}

export const index: RouteProps = {
  exact: true,
  path: ROUTES.HOME,
  component: Home,
};
