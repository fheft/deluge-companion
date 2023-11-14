import type Fuzzysort from "fuzzysort";

export type Shortcut = {
  description: string;
  command: string;
  fuzzysortPrepared: Fuzzysort.Prepared;
};

export type ShortcutCategory = { name: string; shortcuts: Shortcut[] };

export type FilteredShortcutCategory = {
  name: string;
  shortcuts: Fuzzysort.KeyResults<Shortcut>;
};
