<script lang="ts">
  import fuzzysort from "fuzzysort";
  import ShortcutView from "./components/Shortcut.svelte";
  import SearchView from "./components/Search.svelte";
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
    <h1
      class="mb-6 inline-block px-2 text-3xl font-light underline decoration-purple-500 decoration-dashed"
    >
      deluge<span class="font-medium text-purple-500">Companion</span>
    </h1>
    <SearchView bind:input={searchInput} />
    <p class="mt-4 text-sm text-neutral-500">
      💡 Click on a shortcut to show the controls on the Deluge interface
    </p>
  </header>

  <main class="flex flex-col gap-4 py-8">
    {#each filteredShortcuts as shortcut}
      <ShortcutView bind:shortcut={shortcut.obj} />
    {:else}
      <p class="italic text-center">No matches</p>
    {/each}
  </main>

  <footer class="my-6 text-center text-sm text-neutral-300">
    <ul>
      <li>
        Privately operated website by <a
          href="https://florianheft.de"
          target="_blank"
          class="underline"
        >
          Florian Heft
        </a>.
      </li>
      <li class="italic">
        Deluge is a trademark of Synthstrom. This project is not affiliated with
        or endorsed by Synthstrom.
      </li>
    </ul>
  </footer>
</div>
