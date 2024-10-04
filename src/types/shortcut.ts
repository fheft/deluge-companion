import { ControlType, Control } from "../data/targets";
import type { Views } from "../data/views";
import type { Action } from "../data/actions";

export type ActionDescriptions = {
  [key in Action]: { title: string; classes: string };
};

export type ControlDescriptions = {
  [key in Control]: {
    title: string;
    type: ControlType;
    color?: string;
    classes?: string[];
  };
};

export type View = {
  id: Views;
  title: string;
  color: string;
};

export type ViewsMap = {
  [key in Views]: View;
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
  views: Views[];
  steps: StepOrSubstep[];
  category?: string;
  fuzzysortPrepared?: Fuzzysort.Prepared;
};

export type ShortcutsRaw = {
  [key: string]: Shortcut[];
};

export function isStep(candidate: StepOrSubstep): candidate is Step {
  return "action" in candidate && "control" in candidate;
}

export function isSubstepContainer(
  candidate: StepOrSubstep,
): candidate is SubstepContainer {
  return "substeps" in candidate;
}
