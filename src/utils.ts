import { Command } from "./types";

export function isCommand(value: string): value is Command {
  return (
    value === "help" ||
    value === "projects" ||
    value === "socials" ||
    value === "about" ||
    value === "clear"
  );
}
