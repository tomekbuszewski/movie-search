import { ReactNode } from "react";

export interface BaseProps {
  children?: ReactNode;
  element?: "p" | "h2" | "h3";
}
