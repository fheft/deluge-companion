import { ControlType, Control } from "../data/targets";
import type { View } from "../data/views";
import type { Action } from "../data/actions";

export type ActionDescriptions = {
  [key in Action]: { title: string; classes: string };
};

export type ControlDescriptions = {
  [key in Control]: {
    title: string;
    type: ControlType;
    color?: string;
  };
};

export type ViewDescription = {
  [key in View]: {
    title: string;
    color: string;
  };
};

export interface Step {
  action: Action;
  control: Control;
  label?: string;
}

export interface SubstepContainer {
  substeps: Step[];
}

export type StepOrSubstep = Step | SubstepContainer;

export type Shortcut = {
  name: string;
  views: View[];
  steps: StepOrSubstep[];
  category?: string;
  fuzzysortPrepared?: Fuzzysort.Prepared;
};

export type ShortcutsRaw = {
  [key: string]: Shortcut[];
};
