import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Message } from "./";
import { MESSAGE_TYPE } from "@ui/Molecules/Message/Message.types";

export const Info = () => (
  <Message messageType={MESSAGE_TYPE.INFO}>
    {text("Example text", "Hello")}
  </Message>
);

export const Error = () => (
  <Message messageType={MESSAGE_TYPE.ERROR}>
    {text("Example text", "Hello")}
  </Message>
);

export default {
  component: Message,
  title: "Molecules/Message",
};
