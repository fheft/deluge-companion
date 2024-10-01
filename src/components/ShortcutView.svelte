<script lang="ts">
  import TargetView from "./TargetView.svelte";
  import ActionView from "./ActionView.svelte";
  import type { Shortcut } from "../types/shortcut.js";

  export let shortcut: Shortcut;
</script>

<div class="rounded-lg border border-neutral-800 bg-neutral-920 p-4 shadow-lg">
  <span
    class="inline-block whitespace-nowrap rounded-full bg-neutral-300 px-2 text-xs font-normal text-neutral-950"
  >
    {shortcut.category}
  </span>
  <h3 class="mb-2 mt-1 text-lg font-bold">
    {shortcut.title}
  </h3>
  {#if shortcut.description}
    <p class="pb-2">{shortcut.description}</p>
  {/if}
  <p class="flex flex-wrap gap-x-2 gap-y-4" title={shortcut.command}>
    {#each shortcut.commands as command}
      <div
        class="command grid items-baseline justify-items-center gap-x-2 gap-y-0 rounded-md border border-neutral-600 bg-neutral-700 px-4 py-2 shadow-sm"
      >
        <ActionView {command} />
        <TargetView {command} />
      </div>
    {/each}
  </p>
</div>

<style>
  .command {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      ". target-icon"
      "action target-title";
  }
</style>
