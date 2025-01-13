<script lang="ts">
  import {
    isStep,
    isSubstepContainer,
    type StepOrSubstep,
  } from "../../types/shortcut";
  import StepView from "./Step.svelte";
  import SubstepView from "./Substep.svelte";

  export let step: StepOrSubstep;
  export let inline: boolean = false;
</script>

<div
  class="rounded-md border border-neutral-600 bg-neutral-700 align-bottom shadow-sm"
  class:px-2={inline}
  class:px-4={!inline}
  class:py-2={!inline}
  class:inline-block={inline}
>
  {#if isStep(step)}
    <StepView bind:step bind:inline />
  {:else if isSubstepContainer(step)}
    <SubstepView bind:step bind:inline />
  {/if}
</div>
