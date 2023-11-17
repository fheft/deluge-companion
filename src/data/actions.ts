import type { CommandActionDescriptions } from "../types/shortcut";

export enum CommandAction {
  PRESS,
  HOLD,
  TURN,
  MENU,
}

export const actionDescriptions: CommandActionDescriptions = {
  [CommandAction.PRESS]: {
    title: "press",
    classes: "text-deluge-green",
  },
  [CommandAction.HOLD]: {
    title: "hold",
    classes: "text-deluge-blue",
  },
  [CommandAction.TURN]: {
    title: "turn",
    classes: "text-deluge-purple",
  },
  [CommandAction.MENU]: {
    title: "menu",
    classes: "text-deluge-orange",
  },
};
