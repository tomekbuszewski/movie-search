/**
 * @author tomek
 * @since 2020-12-08 18:56:33
 */

import styled from "styled-components";

import { Text } from "@ui/Atoms";

const MovieTitle = styled(Text).attrs({ as: "h2" })`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const MovieYear = styled(Text).attrs({ as: "p" })`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  opacity: 0.5;
`;

const Cover = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.common.borderRadius};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: baseline;
`;

const StyledMovie = styled.li`
  list-style: none;
  display: grid;
  column-gap: ${({ theme }) => theme.spacing.medium};
  grid-template-columns: 80px auto;
  margin-bottom: ${({ theme }) => theme.spacing.large};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Action = styled.button`
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.contrast};
  border-radius: ${({ theme }) => theme.common.borderRadius};
  border: 0;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export { StyledMovie, MovieTitle, MovieYear, Cover, Action, Wrapper };
