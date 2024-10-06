import { derived, writable } from "svelte/store";
import jsonData from "../data/v4.1.0.json";
import fuzzysort from "fuzzysort";
import { searchQuery } from "./searchStore";
import { activeView } from "./viewStore";
import type {
  Shortcut,
  ShortcutsRaw,
  Step,
  StepOrSubstep,
  SubstepContainer,
} from "../types/shortcut";
import { Action } from "../data/actions";
import { Control } from "../data/targets";
import { Views } from "../data/views";

function convertStep(rawStep: any): Step {
  return {
    action: Action[rawStep.action as keyof typeof Action],
    control: Control[rawStep.control as keyof typeof Control],
  };
}
function convertView(view: string): Views {
  return Views[view as keyof typeof Views];
}

const convertedRawShortcuts: ShortcutsRaw = Object.fromEntries(
  Object.entries(jsonData).map(([group, shortcuts]) => {
    const convertedShortcuts = shortcuts.map((shortcut) => {
      const steps: StepOrSubstep[] = shortcut.steps.map((step: any) => {
        if (step.substeps) {
          const convertedSubstepContainer: SubstepContainer = {
            substeps: step.substeps.map(convertStep),
          };
          return convertedSubstepContainer;
        }
        return convertStep(step);
      });

      const converted: Shortcut = {
        name: shortcut.name,
        views: shortcut.views ? shortcut.views.map(convertView) : [],
        steps,
      };
      return converted;
    });
    return [group, convertedShortcuts];
  }),
);

const rawShortcuts = writable(convertedRawShortcuts);

const allShortcuts = derived(rawShortcuts, ($rawShortcuts) => {
  return Object.entries($rawShortcuts).flatMap(([category, shortcuts]) => {
    return shortcuts.map((shortcut) => ({
      ...shortcut,
      fuzzysortPrepared: fuzzysort.prepare(`${shortcut.name} ${category}`),
      category,
    }));
  });
});

const filteredByViews = derived(
  [allShortcuts, activeView],
  ([$shortcuts, $activeView]) => {
    if ($activeView === null) {
      return $shortcuts;
    }
    return $shortcuts.filter((shortcut) =>
      shortcut.views.includes($activeView),
    );
  },
);

export const filteredShortcuts = derived(
  [filteredByViews, searchQuery],
  ([$shortcuts, $searchQuery]) => {
    return fuzzysort
      .go($searchQuery, $shortcuts, {
        key: "fuzzysortPrepared",
        threshold: -1000,
        all: true,
      })
      .map((result) => result.obj);
  },
);
