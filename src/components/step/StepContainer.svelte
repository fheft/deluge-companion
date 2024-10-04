<script lang="ts">
  import {
    isStep,
    isSubstepContainer,
    type StepOrSubstep,
  } from "../../types/shortcut";
  import StepView from "./Step.svelte";
  import SubstepView from "./Substep.svelte";

  export let step: StepOrSubstep;
</script>

<div
  class="rounded-md border border-neutral-600 bg-neutral-700 px-4 py-2 shadow-sm"
>
  {#if isStep(step)}
    <StepView bind:step />
  {:else if isSubstepContainer(step)}
    <SubstepView bind:step />
  {/if}
</div>
