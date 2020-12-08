/**
 * @author tomek
 * @since 2020-12-08 19:53:48
 */

import styled, { css } from "styled-components";
import { BaseProps as Props, MESSAGE_TYPE } from "./Message.types";

const StyledMessage = styled.div<Props>`
  border-radius: ${({ theme }) => theme.common.borderRadius};
  margin: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;

  ${({ messageType }) =>
    messageType === MESSAGE_TYPE.INFO &&
    css`
      background: rgba(255, 255, 255, 0.1);
    `};

  ${({ messageType }) =>
    messageType === MESSAGE_TYPE.ERROR &&
    css`
      background: rgba(255, 0, 0, 0.2);
    `};
`;

export { StyledMessage };
