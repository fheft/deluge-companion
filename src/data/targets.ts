import type { CommandTargetDescriptions } from "../types/shortcut";

export enum CommandTargetType {
  circleButton,
  grid,
  gridCol,
  blackKnob,
  goldKnob,
  display,
  external,
}

export enum CommandTarget {
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
  MENU_ITEM,
  PARAMETER,
  LOWER_PARAM,
  UPPER_PARAM,
  EXTERNAL,
}

export const targetDescriptions: CommandTargetDescriptions = {
  [CommandTarget.PLAY]: {
    title: "Play",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.RECORD]: {
    title: "Record",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.SONG]: {
    title: "Song",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.LOAD]: {
    title: "Load",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.SHIFT]: {
    title: "Shift",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.BACK]: {
    title: "Back / Undo",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.SAVE]: {
    title: "Save",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.TAP]: {
    title: "Tap tempo",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.SYNC]: {
    title: "Sync-Scaling",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.LEARN]: {
    title: "Learn / Input",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.CLIP]: {
    title: "Clip",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.SYNTH]: {
    title: "Synth",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.KIT]: {
    title: "Kit",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.MIDI]: {
    title: "Midi",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.CV]: {
    title: "CV",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.CROSS]: {
    title: "Cross-screen",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.ENTIRE]: {
    title: "Affect entire",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.KEY]: {
    title: "Key (piano icon)",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.SCALE]: {
    title: "Scale",
    type: CommandTargetType.circleButton,
  },
  [CommandTarget.X]: {
    title: "◀&#xFE0E; ▶&#xFE0E;",
    type: CommandTargetType.blackKnob,
  },
  [CommandTarget.Y]: {
    title: "▼&#xFE0E;▲&#xFE0E;",
    type: CommandTargetType.blackKnob,
  },
  [CommandTarget.SELECT]: {
    title: "Select",
    type: CommandTargetType.blackKnob,
  },
  [CommandTarget.TEMPO]: { title: "Tempo", type: CommandTargetType.blackKnob },
  [CommandTarget.GRID]: { title: "grid pad", type: CommandTargetType.grid },
  [CommandTarget.GRID_UNLIT]: {
    title: "unlit grid pad",
    type: CommandTargetType.grid,
  },
  [CommandTarget.GRID_LIT]: {
    title: "lit grid pad",
    type: CommandTargetType.grid,
  },
  [CommandTarget.AUDITION]: {
    title: "Audition",
    type: CommandTargetType.gridCol,
  },
  [CommandTarget.LAUNCH]: {
    title: "Launch",
    type: CommandTargetType.gridCol,
  },
  [CommandTarget.WAVE_START]: {
    title: "Wave start",
    type: CommandTargetType.gridCol,
    color: "deluge-green",
  },
  [CommandTarget.WAVE_END]: {
    title: "Wave end",
    type: CommandTargetType.gridCol,
    color: "deluge-red",
  },
  [CommandTarget.WAVE_LOOP_START]: {
    title: "Wave loop end",
    type: CommandTargetType.gridCol,
    color: "deluge-blue",
  },
  [CommandTarget.WAVE_LOOP_END]: {
    title: "Wave loop end",
    type: CommandTargetType.gridCol,
    color: "deluge-purple",
  },
  [CommandTarget.MENU_ITEM]: {
    title: "",
    type: CommandTargetType.display,
  },
  [CommandTarget.LOWER_PARAM]: {
    title: "lower gold knob",
    type: CommandTargetType.goldKnob,
  },
  [CommandTarget.PARAMETER]: {
    title: "gold knobs",
    type: CommandTargetType.goldKnob,
  },
  [CommandTarget.UPPER_PARAM]: {
    title: "upper gold knob",
    type: CommandTargetType.goldKnob,
  },
  [CommandTarget.EXTERNAL]: {
    title: "MIDI device",
    type: CommandTargetType.external,
  },
};
