import { HTMLProps, ReactNode } from "react";

export interface BaseProps extends HTMLProps<HTMLInputElement> {
  children?: ReactNode;
}
