import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Text } from "./";

export const Normal = () => <Text>{text("Example text", "Hello")}</Text>;

export default {
  component: Text,
  title: "Atoms/Text",
};
