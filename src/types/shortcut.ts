import type Fuzzysort from "fuzzysort";

export type Shortcut = {
  description: string;
  command: string;
  category: string;
  fuzzysortPrepared: Fuzzysort.Prepared;
};
