import type { ControlDescriptions } from "../types/shortcut";

export enum ControlType {
  none,
  circleButton,
  grid,
  gridCol,
  blackKnob,
  goldKnob,
  external,
}

export enum Control {
  NONE,
  RECORD,
  PLAY,
  LOAD,
  SHIFT,
  BACK,
  SAVE,
  TAP,
  SYNC,
  LEARN,
  CLIP,
  SYNTH,
  KIT,
  MIDI,
  CV,
  CROSS,
  ENTIRE,
  KEY,
  SCALE,
  SONG,
  X,
  Y,
  SELECT,
  TEMPO,
  GRID,
  GRID_UNLIT,
  GRID_LIT,
  AUDITION,
  LAUNCH,
  WAVE_START,
  WAVE_END,
  WAVE_LOOP_START,
  WAVE_LOOP_END,
  PARAMETER,
  LOWER_PARAM,
  UPPER_PARAM,
  EXTERNAL,
}

export const controlDescriptions: ControlDescriptions = {
  [Control.NONE]: {
    title: "-",
    type: ControlType.none,
  },
  [Control.PLAY]: {
    title: "Play",
    type: ControlType.circleButton,
  },
  [Control.RECORD]: {
    title: "Record",
    type: ControlType.circleButton,
  },
  [Control.SONG]: {
    title: "Song",
    type: ControlType.circleButton,
  },
  [Control.LOAD]: {
    title: "Load",
    type: ControlType.circleButton,
  },
  [Control.SHIFT]: {
    title: "Shift",
    type: ControlType.circleButton,
  },
  [Control.BACK]: {
    title: "Back / Undo",
    type: ControlType.circleButton,
  },
  [Control.SAVE]: {
    title: "Save",
    type: ControlType.circleButton,
  },
  [Control.TAP]: {
    title: "Tap tempo",
    type: ControlType.circleButton,
  },
  [Control.SYNC]: {
    title: "Sync-Scaling",
    type: ControlType.circleButton,
  },
  [Control.LEARN]: {
    title: "Learn / Input",
    type: ControlType.circleButton,
  },
  [Control.CLIP]: {
    title: "Clip",
    type: ControlType.circleButton,
  },
  [Control.SYNTH]: {
    title: "Synth",
    type: ControlType.circleButton,
  },
  [Control.KIT]: {
    title: "Kit",
    type: ControlType.circleButton,
  },
  [Control.MIDI]: {
    title: "Midi",
    type: ControlType.circleButton,
  },
  [Control.CV]: {
    title: "CV",
    type: ControlType.circleButton,
  },
  [Control.CROSS]: {
    title: "Cross-screen",
    type: ControlType.circleButton,
  },
  [Control.ENTIRE]: {
    title: "Affect entire",
    type: ControlType.circleButton,
  },
  [Control.KEY]: {
    title: "Key (piano icon)",
    type: ControlType.circleButton,
  },
  [Control.SCALE]: {
    title: "Scale",
    type: ControlType.circleButton,
  },
  [Control.X]: {
    title: "◀&#xFE0E; ▶&#xFE0E;",
    type: ControlType.blackKnob,
  },
  [Control.Y]: {
    title: "▼&#xFE0E;▲&#xFE0E;",
    type: ControlType.blackKnob,
  },
  [Control.SELECT]: {
    title: "Select",
    type: ControlType.blackKnob,
  },
  [Control.TEMPO]: { title: "Tempo", type: ControlType.blackKnob },
  [Control.GRID]: { title: "grid pad", type: ControlType.grid },
  [Control.GRID_UNLIT]: {
    title: "unlit grid pad",
    type: ControlType.grid,
  },
  [Control.GRID_LIT]: {
    title: "lit grid pad",
    type: ControlType.grid,
  },
  [Control.AUDITION]: {
    title: "Audition",
    type: ControlType.gridCol,
  },
  [Control.LAUNCH]: {
    title: "Launch",
    type: ControlType.gridCol,
  },
  [Control.WAVE_START]: {
    title: "Wave start",
    type: ControlType.gridCol,
    color: "green-500",
  },
  [Control.WAVE_END]: {
    title: "Wave end",
    type: ControlType.gridCol,
    color: "red-500",
  },
  [Control.WAVE_LOOP_START]: {
    title: "Wave loop end",
    type: ControlType.gridCol,
    color: "blue-500",
  },
  [Control.WAVE_LOOP_END]: {
    title: "Wave loop end",
    type: ControlType.gridCol,
    color: "purple-500",
  },
  [Control.LOWER_PARAM]: {
    title: "lower gold knob",
    type: ControlType.goldKnob,
  },
  [Control.PARAMETER]: {
    title: "gold knobs",
    type: ControlType.goldKnob,
  },
  [Control.UPPER_PARAM]: {
    title: "upper gold knob",
    type: ControlType.goldKnob,
  },
  [Control.EXTERNAL]: {
    title: "MIDI device",
    type: ControlType.external,
  },
};
