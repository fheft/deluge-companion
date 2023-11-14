<script lang="ts">
  import { v4_1_0 } from "./data/v4.1.0";
  import type {
    FilteredShortcutCategory,
    ShortcutCategory,
  } from "./types/shortcut";
  import fuzzysort from "fuzzysort";

  const preparedCategories: ShortcutCategory[] = Object.entries(v4_1_0).map(
    ([name, shortcuts]) => ({
      name,
      shortcuts: shortcuts.map((shortcut) => ({
        ...shortcut,
        fuzzysortPrepared: fuzzysort.prepare(shortcut.description),
      })),
    }),
  );

  let input = "";
  let filteredCategories: FilteredShortcutCategory[];

  $: {
    filteredCategories = preparedCategories
      .map((category) => {
        const filteredEntries = fuzzysort.go(input, category.shortcuts, {
          key: "fuzzysortPrepared",
          threshold: -1000,
        });

        return { name: category.name, shortcuts: filteredEntries };
      })
      .filter((e) => e.shortcuts.length > 0);
  }
</script>

<main>
  <input type="search" placeholder="Search..." bind:value={input} />

  {#each filteredCategories as category}
    <h2>{category.name}</h2>
    {#each category.shortcuts as shortcut}
      <h3>{shortcut.obj.description}</h3>
      <p>{shortcut.obj.command}</p>
    {/each}
  {/each}
</main>

<style>
</style>
