<script lang="ts">
  import type { Shortcut } from "../types/shortcut.js";
  import StepContainerView from "./StepContainerView.svelte";

  export let shortcut: Shortcut;
</script>

<div class="rounded-lg border border-neutral-800 bg-neutral-920 p-4 shadow-lg">
  <span
    class="inline-block whitespace-nowrap rounded-full bg-neutral-300 px-2 text-xs font-normal text-neutral-950"
  >
    {shortcut.category}
  </span>
  <h3 class="mb-2 mt-1 text-lg font-bold">
    {shortcut.name}
  </h3>
  <p class="flex flex-wrap gap-x-2 gap-y-4">
    {#each shortcut.steps as step}
      <StepContainerView bind:step />
    {/each}
  </p>
</div>
