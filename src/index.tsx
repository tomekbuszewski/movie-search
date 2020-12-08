import React from "react";
import { render } from "react-dom";
import { Application } from "@containers/Application";
import { IS_DEV } from "@config/config";

const rootId = "#app";
const root = document.querySelector(rootId);

if (process.env.MOCKS && IS_DEV) {
  const { worker } = require("../mocks/browser");
  worker.start();
}

if (root) {
  render(<Application />, root);
} else {
  console.error(`No element ${rootId} found in the document!`);
}
