import { Action } from "./actions";
import { Control } from "./targets";
import { Views } from "./views";
import type { ShortcutsRaw } from "../types/shortcut";

export const v4_1_0: ShortcutsRaw = {
  Global: [
    {
      name: "View zoom level",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.X,
        },
      ],
    },
    {
      name: "Change zoom level",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Scroll horizontal",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.TURN,
          control: Control.X,
        },
      ],
    },
    {
      name: "Scroll vertical",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.TURN,
          control: Control.Y,
        },
      ],
    },
    {
      name: "Undo",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.BACK,
        },
      ],
    },
    {
      name: "Redo",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.BACK,
            },
          ],
        },
      ],
    },
    {
      name: "New song",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
      ],
    },
    {
      name: "Delete song",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LOAD,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.SAVE,
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SAVE,
        },
      ],
    },
    {
      name: "Load song",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LOAD,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.LOAD,
        },
      ],
    },
    {
      name: "Save song",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.SAVE,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Change tempo (course)",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.TURN,
          control: Control.TEMPO,
        },
      ],
    },
    {
      name: "Change tempo (fine)",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.TEMPO,
            },
            {
              action: Action.TURN,
              control: Control.TEMPO,
            },
          ],
        },
      ],
    },
    {
      name: "Metronome",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.TAP,
            },
          ],
        },
      ],
    },
    {
      name: "Swing",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.TEMPO,
            },
          ],
        },
      ],
    },
    {
      name: "File system up",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.BACK,
        },
      ],
    },
    {
      name: "Adjust brightness",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Settings menu",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Save song, collect all samples",
      views: [Views.GLOBAL],
      steps: [
        {
          action: Action.PRESS,
          control: Control.SAVE,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.HOLD,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Pad refresh rate",
      views: [Views.GLOBAL],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.CLIP,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
  ],
  Sequencing: [
    {
      name: "Make long note",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.GRID_UNLIT,
            },
          ],
        },
      ],
    },
    {
      name: "Make long note across the next screen",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID,
        },
        {
          action: Action.TURN,
          control: Control.X,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.GRID_UNLIT,
            },
          ],
        },
      ],
    },
    {
      name: "Adjust note velocity",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Note probability; clockwise is iteration and counter is probability",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Copy notes",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Paste notes",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Cross screen editing, real time note cloning",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.CROSS,
        },
      ],
    },
    {
      name: "Add instrument / row to kit",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Note zoom level - 128th and 256th level",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.TURN,
              control: Control.TEMPO,
            },
          ],
        },
      ],
    },
    {
      name: "Record live - notes into sequencer",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
      ],
    },
    {
      name: "Duplicate clip content - double and append",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Change clip length",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Shift all notes horizontally",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.Y,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Clear clip",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.BACK,
            },
          ],
        },
      ],
    },
    {
      name: "Change clip color",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Change row color - instrument row in kit",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Reorder kit clip row up or down",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.HOLD,
              control: Control.LAUNCH,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Note nudge individual note",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Clip play direction",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "1,5",
            },
          ],
        },
      ],
    },
    {
      name: "Euclidian seq events - number of events / notes",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.HOLD,
              control: Control.Y,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Euclidian seq length - row length",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Euclidian seq rotate - shift / rotate events or notes",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.X,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
  ],
  "Song view": [
    {
      name: "Launch clip - queue",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LAUNCH,
        },
      ],
    },
    {
      name: "Launch clip - immediately",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.LAUNCH,
            },
          ],
        },
      ],
    },
    {
      name: "Fast scroll song list",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LOAD,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Create clip (empty row)",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID_UNLIT,
        },
      ],
    },
    {
      name: "Enter clip (non-empty row)",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID,
        },
      ],
    },
    {
      name: "Move row clip up or down",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Clip section color - change or create new",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
      ],
    },
    {
      name: "Launch section",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.AUDITION,
        },
      ],
    },
    {
      name: "Section repeat (hold audition for 1 sec)",
      views: [Views.SONG],
      steps: [
        {
          action: Action.HOLD,
          control: Control.AUDITION,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Clone/duplicate clip (hold source, press destination)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
      ],
    },
    {
      name: "Delete clip",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.SAVE,
            },
          ],
        },
      ],
    },
    {
      name: "Solo clip - queue",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.LAUNCH,
            },
          ],
        },
      ],
    },
    {
      name: "Solo clip - immediately",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.LAUNCH,
            },
          ],
        },
      ],
    },
    {
      name: "Clip parameter change (per clip)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Clip parameter change (per song)",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.ENTIRE,
        },
        {
          action: Action.TURN,
          control: Control.PARAMETER,
        },
      ],
    },
    {
      name: "Change existing clip preset",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Change existing clip to synth",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
      ],
    },
    {
      name: "Change existing clip to MIDI",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.MIDI,
            },
          ],
        },
      ],
    },
    {
      name: "Change existing clip to CV",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.CV,
            },
          ],
        },
      ],
    },
    {
      name: "Create audio track (in empty clip)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Check name and type of non-empty clip",
      views: [Views.SONG],
      steps: [
        {
          action: Action.HOLD,
          control: Control.GRID,
        },
      ],
    },
  ],
  "Recording / Resampling - Samples in Kit": [
    {
      name: "Resample / record all audio output",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.RECORD,
            },
          ],
        },
      ],
    },
    {
      name: "Loop resample",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.PLAY,
            },
          ],
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.PLAY,
            },
          ],
        },
      ],
    },
    {
      name: "Record sample into a kit",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
      ],
    },
    {
      name: "Load sample into a kit row",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Load sample into a kit row silently",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Synth resample",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
      ],
    },
    {
      name: "Load all samples from folder to kit",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.HOLD,
          control: Control.SELECT,
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "ALL",
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Slice sample",
      views: [Views.KIT],
      steps: [
        {
          action: Action.HOLD,
          control: Control.SHIFT,
        },
        {
          action: Action.PRESS,
          control: Control.KIT,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.HOLD,
          control: Control.SELECT,
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "SLICE",
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "SLICES",
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Rename kit row or instrument",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "3,12",
            },
          ],
        },
      ],
    },
  ],
  "Audio clips": [
    {
      name: "Create new audio clip in song view (press empty row)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_UNLIT,
            },
            {
              action: Action.PRESS,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Source for audio clip in song view",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Create new audio track in arranger view",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Source for audio clip in arranger view",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Clear audio clip recording",
      views: [Views.AUDIO],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.BACK,
            },
          ],
        },
      ],
    },
    {
      name: "Change color of audio wave",
      views: [Views.AUDIO],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "End point / loop length (use red end point marker)",
      views: [Views.AUDIO],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID,
        },
        {
          action: Action.PRESS,
          control: Control.GRID,
        },
      ],
    },
    {
      name: "Waveform start / end point",
      views: [Views.AUDIO],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "1,1",
            },
          ],
        },
      ],
    },
    {
      name: "Adjust length - audio clip waveform",
      views: [Views.AUDIO],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
  ],
  "Modifying sounds": [
    {
      name: "New synth",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
      ],
    },
    {
      name: "New kit",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
      ],
    },
    {
      name: "View synth preset browser",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LOAD,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
      ],
    },
    {
      name: "View kit preset browser",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LOAD,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
      ],
    },
    {
      name: "Save synth preset",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SAVE,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Save kit preset",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SAVE,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Note keyboard view",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.KEY,
        },
      ],
    },
    {
      name: "Clear notes and automation",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.BACK,
            },
          ],
        },
      ],
    },
    {
      name: "Setting up choke group",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "7,8",
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "CHOKE",
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Cycle default scales",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.SCALE,
            },
          ],
        },
      ],
    },
    {
      name: "Change root note",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SCALE,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
      ],
    },
    {
      name: "Alter current scale",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Clone synth preset",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LOAD,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LOAD,
            },
            {
              action: Action.MENU,
              control: Control.NONE,
              label: "CLONE",
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Clone kit preset",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LOAD,
            },
            {
              action: Action.PRESS,
              control: Control.KIT,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LOAD,
            },
            {
              action: Action.MENU,
              control: Control.NONE,
              label: "CLONE",
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Kit clip affect all - first select parameter",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.HOLD,
              control: Control.ENTIRE,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Select kit/ instrument row silently",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
      ],
    },
    {
      name: "Change clip preset",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Transpose clip by octave",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.Y,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Transpose current clip by semitone (scale off)",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.Y,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Transpose all clips by semitone (scale on)",
      views: [Views.SYNTH, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.Y,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
  ],
  "Waveforms, record-to-arranger, multi-sampling": [
    {
      name: "Chromatic sample - same sample, different pitches (on new synth)",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Basic sample - load sample with no pitch detection",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SELECT,
            },
            {
              action: Action.MENU,
              control: Control.NONE,
              label: "BASIC",
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Multi-sampling",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },

        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SELECT,
            },
            {
              action: Action.MENU,
              control: Control.NONE,
              label: "MULTI",
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "Single cycle waveforms",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.LOAD,
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },

        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SELECT,
            },
            {
              action: Action.MENU,
              control: Control.NONE,
              label: "SINGLE",
            },
          ],
        },
        {
          action: Action.PRESS,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "External sound source",
      views: [Views.SYNTH],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "6,3",
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "IN",
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
      ],
    },
    {
      name: "Record to arranger - live record parameter changes and MIDI notes (RECORD to end)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.SONG,
            },
          ],
        },
      ],
    },
    {
      name: "Append recording to existing arrangement (from arrangement mode; RECORD to end)",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.TURN,
          control: Control.X,
        },
        {
          action: Action.PRESS,
          control: Control.SONG,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.SONG,
            },
          ],
        },
      ],
    },
    {
      name: "Waveform edit view - change start / end / loop",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "1,1",
            },
          ],
        },
      ],
    },
    {
      name: "Zoom in and out",
      views: [Views.WAVEFORM],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Move along waveform",
      views: [Views.WAVEFORM],
      steps: [
        {
          action: Action.TURN,
          control: Control.X,
        },
      ],
    },
    {
      name: "Change start",
      views: [Views.WAVEFORM],
      steps: [
        {
          action: Action.PRESS,
          control: Control.WAVE_START,
        },
        {
          action: Action.PRESS,
          control: Control.GRID,
        },
      ],
    },
    {
      name: "Change end",
      views: [Views.WAVEFORM],
      steps: [
        {
          action: Action.PRESS,
          control: Control.WAVE_END,
        },
        {
          action: Action.PRESS,
          control: Control.GRID,
        },
      ],
    },
    {
      name: "Create loop start point",
      views: [Views.WAVEFORM],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.WAVE_START,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
      ],
    },
    {
      name: "Delete loop start point",
      views: [Views.WAVEFORM],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.WAVE_LOOP_START,
            },
            {
              action: Action.PRESS,
              control: Control.WAVE_START,
            },
          ],
        },
      ],
    },
    {
      name: "Create loop end point",
      views: [Views.WAVEFORM],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.WAVE_END,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
      ],
    },
    {
      name: "Delete loop end point",
      views: [Views.WAVEFORM],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.WAVE_LOOP_END,
            },
            {
              action: Action.PRESS,
              control: Control.WAVE_END,
            },
          ],
        },
      ],
    },
  ],
  "Arranger view = song button flashing": [
    {
      name: "Add clip into arranger",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID_UNLIT,
        },
      ],
    },
    {
      name: "Change / select instance's clip",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Delete clip instance from arranger (left-most clip grid button)",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID_LIT,
        },
      ],
    },
    {
      name: "Clear arranger clips (all clip instances)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.BACK,
            },
          ],
        },
      ],
    },
    {
      name: "Move clip instance horizontally",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Move row vertically",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.Y,
            },
          ],
        },
      ],
    },
    {
      name: "Change instance length of clip",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
      ],
    },
    {
      name: "Mute / unmute",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LAUNCH,
        },
      ],
    },
    {
      name: "Audition",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.AUDITION,
        },
      ],
    },
    {
      name: "Solo instrument",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.LAUNCH,
            },
          ],
        },
      ],
    },
    {
      name: "Enter clip (anything besides left-most grid button)",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID_LIT,
        },
      ],
    },
    {
      name: "Scroll timeline with progress bar",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.CROSS,
        },
      ],
    },
    {
      name: "Start playback from current screen",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.PLAY,
            },
          ],
        },
      ],
    },
    {
      name: "Make clip instance unique (white; left-most clip grid button)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.GRID_LIT,
            },
          ],
        },
      ],
    },
    {
      name: "Adjust clip parameter of clip instance",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.TURN,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Copy clip from arranger to song mode, eg to save white instance as its own clip",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.PRESS,
              control: Control.SONG,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.Y,
        },
      ],
    },
    {
      name: "Copy clip from song to arranger mode",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.PRESS,
              control: Control.SONG,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.X,
        },
      ],
    },
    {
      name: "Insert / delete time; applies to currently visible screen (clockwise: insert; counter: delete)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.TURN,
              control: Control.X,
            },
          ],
        },
      ],
    },
    {
      name: "Enable loop play mode from arrange to song mode",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.AUDITION,
        },
      ],
    },
    {
      name: "Disable loop play mode from arrange to song mode",
      views: [Views.ARRANGER],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LAUNCH,
        },
      ],
    },
    {
      name: "Change instrument preset",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Change clip type to synth",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
      ],
    },
    {
      name: "Change clip type to MIDI",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.MIDI,
            },
          ],
        },
      ],
    },
    {
      name: "Change clip type to CV",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.CV,
            },
          ],
        },
      ],
    },
    {
      name: "Add new instrument clip from arranger view (unused row)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "Add new synth clip type (unused row)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.SYNTH,
            },
          ],
        },
      ],
    },
    {
      name: "Add new MIDI clip type (unused row)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.MIDI,
            },
          ],
        },
      ],
    },
    {
      name: "Add new CV clip type (unused row)",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.CV,
            },
          ],
        },
      ],
    },
    {
      name: "Delete instrument row from arranger",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.SAVE,
            },
          ],
        },
      ],
    },
    {
      name: "Rename track",
      views: [Views.ARRANGER],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
              label: "3,12",
            },
          ],
        },
      ],
    },
  ],
  "Parameter dials": [
    {
      name: "Assign gold dial control of parameters - first select parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.TURN,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Check gold dial control of parameters - first select parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          action: Action.TURN,
          control: Control.PARAMETER,
        },
      ],
    },
    {
      name: "Record automation of parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          action: Action.TURN,
          control: Control.PARAMETER,
        },
      ],
    },
    {
      name: "Delete automation of recorded parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Copy automation of parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Paste automation of parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Parameter change / lock per note in clip view",
      views: [Views.CLIP],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.TURN,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Parameter change / lock per clip in song view",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID_LIT,
            },
            {
              action: Action.TURN,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
  ],
  "MIDI commands": [
    {
      name: "Setup MIDI sequencing of notes",
      views: [Views.SYNTH, Views.KIT, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.MIDI,
        },
        {
          action: Action.TURN,
          control: Control.SELECT,
        },
      ],
    },
    {
      name: "MIDI sequencing of parameters - first select parameter",
      views: [Views.MIDI],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.PARAMETER,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
        {
          action: Action.TURN,
          control: Control.PARAMETER,
        },
      ],
    },
    {
      name: "Record MIDI automation",
      views: [Views.MIDI],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          action: Action.TURN,
          control: Control.PARAMETER,
        },
      ],
    },
    {
      name: "Record MIDI step automation",
      views: [Views.MIDI],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.GRID,
            },
            {
              action: Action.TURN,
              control: Control.PARAMETER,
            },
          ],
        },
      ],
    },
    {
      name: "Change dial control, but keep automation",
      views: [Views.MIDI],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.PARAMETER,
            },
            {
              action: Action.HOLD,
              control: Control.SELECT,
            },
            {
              action: Action.TURN,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "MIDI note output in a kit clip",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.MIDI,
            },
          ],
        },
      ],
    },
    {
      name: "MIDI note output in a kit clip: MIDI channel assign",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.LOWER_PARAM,
            },
          ],
        },
      ],
    },
    {
      name: "MIDI note output in a kit clip: MIDI note value",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.TURN,
              control: Control.UPPER_PARAM,
            },
          ],
        },
      ],
    },
    {
      name: "Settings menu for additional MIDI, CV, and Gate parameters",
      views: [Views.MIDI],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.SELECT,
            },
          ],
        },
      ],
    },
    {
      name: "External controller to play synth or kit",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.EXTERNAL,
            },
          ],
        },
      ],
    },
    {
      name: "External controller to trigger clip (from song mode)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
            {
              action: Action.PRESS,
              control: Control.EXTERNAL,
            },
          ],
        },
      ],
    },
    {
      name: "External controller to trigger play (from song mode)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.PLAY,
            },
            {
              action: Action.PRESS,
              control: Control.EXTERNAL,
            },
          ],
        },
      ],
    },
    {
      name: "External controller to trigger record (from song mode)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.EXTERNAL,
            },
          ],
        },
      ],
    },
    {
      name: "Unlearn external controller to play synth or kit",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
      ],
    },
    {
      name: "Unlearn external controller to trigger clip (from song mode)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.AUDITION,
            },
          ],
        },
      ],
    },
    {
      name: "Unlearn external controller to trigger play (from song mode)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.PLAY,
            },
          ],
        },
      ],
    },
    {
      name: "Unlearn external controller to trigger record (from song mode)",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
          ],
        },
      ],
    },
    {
      name: "External control of parameter - first select parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.PRESS,
              control: Control.EXTERNAL,
            },
          ],
        },
      ],
    },
    {
      name: "Unlearn external control of parameter - first select parameter",
      views: [Views.SYNTH, Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
          ],
        },
      ],
    },
    {
      name: "Nudge MIDI clock",
      views: [Views.MIDI],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.TURN,
              control: Control.TEMPO,
            },
          ],
        },
      ],
    },
    {
      name: "Record external notes",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          action: Action.PRESS,
          control: Control.EXTERNAL,
        },
      ],
    },
    {
      name: "Sync scaling for unusual time signitures",
      views: [Views.SYNTH, Views.KIT, Views.MIDI, Views.CV],
      steps: [
        {
          action: Action.PRESS,
          control: Control.SYNC,
        },
      ],
    },
    {
      name: "Mute by external MIDI for individual kit rows - in kit mode",
      views: [Views.KIT],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.LEARN,
            },
            {
              action: Action.HOLD,
              control: Control.LAUNCH,
            },
            {
              action: Action.PRESS,
              control: Control.EXTERNAL,
            },
          ],
        },
      ],
    },
  ],
  "Looper in song mode": [
    {
      name: "Toggle record arm",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.LAUNCH,
            },
          ],
        },
      ],
    },
    {
      name: "Start loop record",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
      ],
    },
    {
      name: "Close loop recording - on recording clip row",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.LAUNCH,
        },
      ],
    },
    {
      name: "Close loop recording and immediately play in solo",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.X,
            },
            {
              action: Action.PRESS,
              control: Control.LAUNCH,
            },
          ],
        },
      ],
    },
    {
      name: "Record loop during playback",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          action: Action.PRESS,
          control: Control.LAUNCH,
        },
      ],
    },
    {
      name: "Record overdub - press grid directly underneath existing audio clip",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.GRID,
            },
          ],
        },
      ],
    },
    {
      name: "Record overdub - with continuous layering - press grid directly underneath existing audio clip",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.RECORD,
        },
        {
          action: Action.PRESS,
          control: Control.PLAY,
        },
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.RECORD,
            },
            {
              action: Action.PRESS,
              control: Control.AUDITION,
            },
          ],
        },
      ],
    },
    {
      name: "Tempo detection for loop pedal recording - start with a blank song",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.TAP,
            },
          ],
        },
      ],
    },
    {
      name: "Preset tempo for loop recording",
      views: [Views.SONG],
      steps: [
        {
          action: Action.PRESS,
          control: Control.GRID_UNLIT,
        },
        {
          action: Action.PRESS,
          control: Control.KIT,
        },
        {
          action: Action.TURN,
          control: Control.TEMPO,
        },
      ],
    },
    {
      name: "Grab tempo from existing audio clip",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.TEMPO,
            },
            {
              action: Action.PRESS,
              control: Control.GRID_LIT,
            },
          ],
        },
      ],
    },
    {
      name: "Enable count-in before audio recording",
      views: [Views.SONG],
      steps: [
        {
          substeps: [
            {
              action: Action.HOLD,
              control: Control.SHIFT,
            },
            {
              action: Action.PRESS,
              control: Control.SELECT,
            },
          ],
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "RECORDING",
        },
        {
          action: Action.MENU,
          control: Control.NONE,
          label: "COUNT_IN",
        },
      ],
    },
  ],
};
