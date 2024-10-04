import { derived, writable } from "svelte/store";
import { v4_1_0 } from "../data/v4.1.0";
import fuzzysort from "fuzzysort";
import { searchQuery } from "./searchStore";

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

export const filteredShortcuts = derived(
  [allShortcuts, searchQuery],
  ([$allShortcuts, $searchQuery]) => {
    return fuzzysort
      .go($searchQuery, $allShortcuts, {
        key: "fuzzysortPrepared",
        threshold: -1000,
        all: true,
      })
      .map((result) => result.obj);
  },
);
