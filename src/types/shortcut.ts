export type Shortcut = {
  description: string;
  command: string;
};

export type ShortcutCategory = { name: string; shortcuts: Shortcut[] };
