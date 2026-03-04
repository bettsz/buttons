import { App } from "obsidian";

import { Arguments, Position } from "../types";

export const variable = (app: App, args: Arguments, buttonStart: Position): void => {
  const var_name = args.var_name;
  const value = args.value;

  // Requires quickadd
  const buttons = app.plugins.plugins["buttons"];
  if (buttons) {
    const variables = buttons.globalVariables;
    // Assign variable the value passed
    variables[var_name] = value;
  }
}; 