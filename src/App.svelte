<script lang="ts">
  import { v4_1_0 } from "./data/v4.1.0";
  import type { Shortcut } from "./types/shortcut";
  import fuzzysort from "fuzzysort";
  import { onMount } from "svelte";

  const preparedShortcuts: Shortcut[] = Object.entries(v4_1_0).flatMap(
    ([category, shortcuts]) => {
      return shortcuts.map((shortcut) => ({
        ...shortcut,
        category,
        fuzzysortPrepared: fuzzysort.prepare(shortcut.description),
      }));
    },
  );

  let input = "";
  let inputEl: HTMLInputElement;
  let filteredShortcuts: Fuzzysort.KeyResults<Shortcut>;

  onMount(() => {
    inputEl.focus();
  });

  $: {
    filteredShortcuts = fuzzysort.go(input, preparedShortcuts, {
      key: "fuzzysortPrepared",
      threshold: -1000,
    });
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

  {#each filteredShortcuts as shortcut}
    <h3 class="text-lg font-bold mt-8 mb-2">
      <span>{shortcut.obj.description}</span>
      <span class="bg-sky-200 rounded-full px-2 text-sm whitespace-nowrap">
        {shortcut.obj.category}
      </span>
    </h3>
    <p>{shortcut.obj.command}</p>
  {/each}
</main>

<style>
</style>
