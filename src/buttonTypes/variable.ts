import { App } from "obsidian";

import { Arguments, Position } from "../types";

export const variable = (app: App, args: Arguments, buttonStart: Position): void => {
  const name = args.name;
  const value = args.value;

  // Requires quickadd
  const quickadd = app.plugins.plugins["quickadd"];
  if (quickadd) {
    const variables = quickadd.settings.globalVariables;
    // Assign variable the value passed
    variables[name] = value;
  }
}; 