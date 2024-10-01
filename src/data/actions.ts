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
    classes: "text-green-400",
  },
  [CommandAction.HOLD]: {
    title: "hold",
    classes: "text-blue-400",
  },
  [CommandAction.TURN]: {
    title: "turn",
    classes: "text-purple-400",
  },
  [CommandAction.MENU]: {
    title: "menu",
    classes: "text-orange-400",
  },
};
