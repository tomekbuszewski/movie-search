import { ReactNode } from "react";

export enum MESSAGE_TYPE {
  ERROR,
  INFO,
}

export interface BaseProps {
  children?: ReactNode;
  messageType: MESSAGE_TYPE;
}
