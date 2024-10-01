import { CommandAction } from "./actions";
import { CommandTarget } from "./targets";
import { View } from "./views";
import type { Shortcuts } from "../types/shortcut";

const test: Shortcuts = {
  Global: [
    {
      name: "View zoom level",
      views: [View.GLOBAL],
      steps: [
        {
          action: CommandAction.PRESS,
          control: CommandTarget.X,
        },
      ],
    },
  ],
};
