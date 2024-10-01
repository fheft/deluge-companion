<script lang="ts">
  import StepView from "./StepView.svelte";
  import type { SubstepContainer } from "../types/shortcut";

  export let step: SubstepContainer;
</script>

<div class="flex gap-4">
  {#each step.substeps as substep, idx}
    {#if idx > 0}
      <span class="self-end">+</span>
    {/if}
    <StepView bind:step={substep} />
  {/each}
</div>
