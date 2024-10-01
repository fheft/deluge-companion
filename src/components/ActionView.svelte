<script lang="ts">
  import type { Command } from "../types/shortcut.js";
  import { actionDescriptions } from "../data/actions";

  export let command: Command;
  $: description = actionDescriptions[command.action];
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
