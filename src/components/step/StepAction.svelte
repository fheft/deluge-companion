<script lang="ts">
  import { actionDescriptions } from "../../data/actions";
  import type { Step } from "../../types/shortcut";

  export let step: Step;
  $: description = actionDescriptions[step.action];
</script>

{#if !description}
  <span class="action font-bold text-red-700">INVALID</span>
{:else}
  <span class="{description.classes} action font-medium"
    >{description.title}</span
  >
{/if}

<style>
  .action {
    grid-area: action;
  }
</style>
