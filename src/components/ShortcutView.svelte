<script lang="ts">
  import TargetView from "./TargetView.svelte";
  import ActionView from "./ActionView.svelte";
  import type { Shortcut } from "../types/shortcut.js";

  export let shortcut: Shortcut;
</script>

<div class="bg-neutral-920 p-4 rounded-lg border border-neutral-800 shadow-lg">
  <span
    class="bg-neutral-300 font-normal text-neutral-950 rounded-full px-2 inline-block text-xs whitespace-nowrap"
  >
    {shortcut.category}
  </span>
  <h3 class="text-lg font-bold mb-2 mt-1">
    {shortcut.title}
  </h3>
  {#if shortcut.description}
    <p class="pb-2">{shortcut.description}</p>
  {/if}
  <p class="flex gap-x-2 gap-y-4 flex-wrap" title={shortcut.command}>
    {#each shortcut.commands as command}
      <div
        class="rounded-md shadow-sm border border-neutral-600 gap-x-2 gap-y-0 px-4 py-2 grid bg-neutral-700 command items-baseline justify-items-center"
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
