<script lang="ts">
  import { v4_1_0 } from "./data/v4.1.0";
  import type {
    FilteredShortcutCategory,
    ShortcutCategory,
  } from "./types/shortcut";
  import fuzzysort from "fuzzysort";
  import { onMount } from "svelte";

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
  let inputEl: HTMLInputElement;
  let filteredCategories: FilteredShortcutCategory[];

  onMount(() => {
    inputEl.focus();
  });

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

<main class="mx-auto max-w-[70ch] px-4 py-8 bg-white">
  <input
    type="search"
    placeholder="Search..."
    class="px-4 py-2 rounded-md border block w-full"
    bind:value={input}
    bind:this={inputEl}
  />

  {#each filteredCategories as category}
    <h2 class="text-xl font-bold mt-8 mb-4">{category.name}</h2>
    {#each category.shortcuts as shortcut}
      <h3 class="text-lg font-bold mt-4 mb-2">{shortcut.obj.description}</h3>
      <p>{shortcut.obj.command}</p>
    {/each}
  {/each}
</main>

<style>
</style>
