<script lang="ts">
  import fuzzysort from "fuzzysort";
  import ShortcutView from "./components/ShortcutView.svelte";
  import SearchView from "./components/SearchView.svelte";
  import type { Shortcut } from "./types/shortcut";
  import { v4_1_0 } from "./data/v4.1.0";

  const preparedShortcuts: Shortcut[] = Object.entries(v4_1_0).flatMap(
    ([category, shortcuts]) => {
      return shortcuts.map((shortcut) => ({
        ...shortcut,
        fuzzysortPrepared: fuzzysort.prepare(`${shortcut.name} ${category}`),
        category,
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
