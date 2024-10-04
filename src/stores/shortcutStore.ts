import { derived, writable } from "svelte/store";
import { v4_1_0 } from "../data/v4.1.0";
import fuzzysort from "fuzzysort";
import { searchQuery } from "./searchStore";
import { activeView } from "./viewStore";

const rawShortcuts = writable(v4_1_0);

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
