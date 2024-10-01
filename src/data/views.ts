import type { ViewDescription } from "../types/shortcut";

export enum View {
  GLOBAL,
  SONG,
  ARRANGER,
  SYNTH,
  KIT,
  MIDI,
  CV,
  AUDIO,
  WAVEFORM,
  CLIP,
}

export const viewDescriptions: ViewDescription = {
  [View.GLOBAL]: {
    title: "global",
    color: "neutral",
  },
  [View.SONG]: {
    title: "Song",
    color: "gold",
  },
  [View.ARRANGER]: {
    title: "Arranger",
    color: "red",
  },
  [View.SYNTH]: {
    title: "Synth",
    color: "green",
  },
  [View.KIT]: {
    title: "Kit",
    color: "green",
  },
  [View.MIDI]: {
    title: "MIDI",
    color: "blue",
  },
  [View.CV]: {
    title: "CV",
    color: "blue",
  },
  [View.AUDIO]: {
    title: "Audio",
    color: "purple",
  },
  [View.WAVEFORM]: {
    title: "Waveform",
    color: "purple",
  },
  [View.CLIP]: {
    title: "Clip",
    color: "purple",
  },
};
