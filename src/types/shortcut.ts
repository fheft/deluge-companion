import type { CommandAction } from "../data/actions";
import type { CommandTarget } from "../data/targets";
import { CommandTargetType } from "../data/targets";

export type Shortcut = {
  title: string;
  command: string;
  category: string;
  description: string;
  commands: Command[];
  fuzzysortPrepared: Fuzzysort.Prepared;
};

export type CommandActionDescriptions = {
  [key in CommandAction]: { title: string; classes: string };
};

export type CommandTargetDescriptions = {
  [key in CommandTarget]: {
    title: string;
    type: CommandTargetType;
    color?: string;
  };
};

export type Command = {
  action: CommandAction;
  target: CommandTarget;
  text?: string;
};
