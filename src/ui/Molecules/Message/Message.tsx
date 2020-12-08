/**
 * @author tomek
 * @since 2020-12-08 19:53:48
 */

import * as React from "react";

import { StyledMessage } from "./Message.styles";
import { BaseProps as Props } from "./Message.types";

const Message: React.FC<Props> = (props) => <StyledMessage {...props} />;

export { Message };
