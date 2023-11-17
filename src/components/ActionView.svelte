<script lang="ts">
  import type { Command } from "../types/shortcut.js";
  import { actionDescriptions } from "../data/actions";

  export let command: Command;
  $: description = actionDescriptions[command.action];
</script>

{#if !description}
  <span class="text-red-700 font-bold action">INVALID</span>
{:else}
  <span class="{description.classes} font-medium action"
    >{description.title}</span
  >
{/if}

<style>
  .action {
    grid-area: action;
  }
</style>
