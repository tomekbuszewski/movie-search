import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { PageWrapper } from "./";

export const Normal = () => (
  <PageWrapper>{text("Example text", "Hello")}</PageWrapper>
);

export default {
  component: PageWrapper,
  title: "Atoms/PageWrapper",
};
