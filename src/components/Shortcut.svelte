<script lang="ts">
  import type { Shortcut } from "../types/shortcut.js";
  import StepContainerView from "./step/StepContainer.svelte";
  import { viewDescriptions } from "../data/views";
  import DelugeView from "./DelugeUi.svelte";

  export let shortcut: Shortcut;
  $: views = shortcut.views.map((v) => viewDescriptions[v]);

  let showDetails: boolean = false;

  function onStepsClicked() {
    showDetails = !showDetails;
  }
</script>

<div class="rounded-lg border border-neutral-800 bg-neutral-920 p-4 shadow-lg">
  {#each views as view}
    <span
      class="mr-1 inline-block whitespace-nowrap rounded-full font-medium bg-{view.color}-300 px-2 text-xs text-{view.color}-950"
    >
      {view.title}
    </span>
  {/each}
  <h3 class="mb-2 mt-1 text-lg font-bold">
    {shortcut.name}
  </h3>
  <button class="flex flex-wrap gap-x-2 gap-y-4" on:click={onStepsClicked}>
    {#each shortcut.steps as step}
      <StepContainerView bind:step />
    {/each}
  </button>
  {#if showDetails}
    <div class="mt-4 border border-neutral-600">
      <DelugeView bind:steps={shortcut.steps} />
    </div>
  {/if}
</div>
