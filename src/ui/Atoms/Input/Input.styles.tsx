/**
 * @author tomek
 * @since 2020-12-08 17:49:56
 */

import styled from "styled-components";
import { BaseProps as Props } from "./Input.types";

const StyledInput = styled.input<Props>`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  text-align: center;
  color: ${({ theme }) => theme.colors.base};

  border: 2px solid ${({ theme }) => theme.colors.sub};
  background: ${({ theme }) => theme.colors.background};

  border-radius: 85px;

  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};

  &:focus {
    outline: 0;
    box-shadow: 0 0 1rem 0 ${({ theme }) => theme.colors.sub};
  }
`;

export { StyledInput };
