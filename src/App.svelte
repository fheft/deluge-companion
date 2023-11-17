<script lang="ts">
  import { v4_1_0 } from "./data/v4.1.0";
  import type { Shortcut } from "./types/shortcut";
  import fuzzysort from "fuzzysort";
  import { CommandAction } from "./data/actions";
  import { CommandTarget } from "./data/targets";
  import ShortcutView from "./components/ShortcutView.svelte";
  import SearchView from "./components/SearchView.svelte";

  const preparedShortcuts: Shortcut[] = Object.entries(v4_1_0).flatMap(
    ([category, shortcuts]) => {
      const commandRegex = /([^(]+)\((.+)\)/g;
      return shortcuts.map((shortcut) => ({
        ...shortcut,
        category,
        commands: shortcut.command.split(" ").map((str) => {
          const match = [...str.matchAll(commandRegex)][0];
          if (!match || match.length !== 3) {
            throw new Error(`parsed shortcut command failure: ${str}`);
          }
          const [_, actionStr, targetStr] = match;
          const action =
            CommandAction[
              actionStr.toUpperCase() as keyof typeof CommandAction
            ];
          if (action === CommandAction.MENU) {
            return { action, target: CommandTarget.MENU_ITEM, text: targetStr };
          }
          if (/\d\d?,\d\d?/.test(targetStr)) {
            return {
              action,
              target: CommandTarget.GRID,
              text: targetStr,
            };
          }
          const target = CommandTarget[targetStr as keyof typeof CommandTarget];
          if (target == undefined) {
            console.warn(
              `No command target matched for string '${targetStr}'`,
              shortcut,
            );
          }
          return { action, target };
        }),
        fuzzysortPrepared: fuzzysort.prepare(
          `${shortcut.description} ${category}`,
        ),
      }));
    },
  );

  let searchInput: string;
  let filteredShortcuts: Fuzzysort.KeyResults<Shortcut>;

  $: {
    filteredShortcuts = fuzzysort.go(searchInput, preparedShortcuts, {
      key: "fuzzysortPrepared",
      threshold: -1000,
      all: true,
    });
  }
</script>

<div class="mx-auto max-w-[70ch] px-2">
  <header class="mt-8">
    <SearchView bind:input={searchInput} />
  </header>

  <main class="flex flex-col gap-4 py-8">
    {#each filteredShortcuts as shortcut}
      <ShortcutView bind:shortcut={shortcut.obj} />
    {/each}
  </main>
</div>
