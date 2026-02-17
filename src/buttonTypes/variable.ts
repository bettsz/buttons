import { App } from "obsidian";

import { Arguments, Position } from "../types";

export const variable = (app: App, args: Arguments, buttonStart: Position): void => {
  const name = args.name;
  const value = args.value;

  // Requires quickadd
  const buttons = app.plugins.plugins["buttons"];
  if (buttons) {
    const variables = buttons.globalVariables;
    // Assign variable the value passed
    variables[name] = value;
  }
}; 