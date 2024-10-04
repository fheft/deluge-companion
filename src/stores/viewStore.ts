import { writable } from "svelte/store";
import { Views, viewsById } from "../data/views";
import type { View } from "../types/shortcut";

export const allViews = writable<View[]>(Object.values(viewsById));

export const activeView = writable<Views | null>(Views.KIT);
