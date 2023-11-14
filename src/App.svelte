<script lang="ts">
  import { v4_1_0 } from "./data/v4.1.0";
  import type { ShortcutCategory } from "./types/shortcut";

  let input = "";

  let filteredCategories: ShortcutCategory[];

  $: {
    const allCategories = Object.entries(v4_1_0);
    if (!input) {
      filteredCategories = allCategories.map(([name, shortcuts]) => ({
        name,
        shortcuts,
      }));
    } else {
      filteredCategories = allCategories
        .map(([category, entries]) => {
          const filteredEntries = entries.filter((e) => {
            return e.description.includes(input);
          });

          return { name: category, shortcuts: filteredEntries };
        })
        .filter((e) => e.shortcuts.length > 0);
    }
  }
</script>

<main>
  <input type="search" placeholder="Search..." bind:value={input} />

  {#each filteredCategories as category}
    <h2>{category.name}</h2>
    {#each category.shortcuts as shortcut}
      <h3>{shortcut.description}</h3>
      <p>{shortcut.command}</p>
    {/each}
  {/each}
</main>

<style>
</style>
