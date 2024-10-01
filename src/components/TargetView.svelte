<script lang="ts">
  import type { Command } from "../types/shortcut.js";
  import {
    CommandTarget,
    CommandTargetType,
    targetDescriptions,
  } from "../data/targets";
  import CircleButton from "../icons/CircleButton.svelte";
  import FullGrid from "../icons/FullGrid.svelte";
  import Knob from "../icons/Knob.svelte";
  import GridCol from "../icons/GridCol.svelte";
  import Midi from "../icons/Midi.svelte";

  export let command: Command;
  $: description = targetDescriptions[command.target];
</script>

{#if !description}
  <span class="target-icon text-[#f00] font-bold">INVALID</span>
{:else if description.type === CommandTargetType.circleButton}
  <span class="target-icon text-neutral-50"><CircleButton /></span>
  <span class="target-title uppercase">{@html description.title}</span>
{:else if description.type === CommandTargetType.grid}
  <span
    class={"target-icon " +
      (command.target === CommandTarget.GRID_LIT
        ? "text-green-300"
        : "text-neutral-300")}
  >
    <FullGrid />
  </span>
  <span class="target-title">{@html command.text || description.title}</span>
{:else if description.type === CommandTargetType.gridCol}
  <span
    class={"target-icon " + (description.color && `text-${description.color}`)}
  >
    <GridCol />
  </span>
  <span class="target-title">{@html description.title}</span>
{:else if description.type === CommandTargetType.blackKnob}
  <span class="target-icon text-neutral-900"><Knob /></span>
  <span class="target-title uppercase">{@html description.title}</span>
{:else if description.type === CommandTargetType.goldKnob}
  <span class="target-icon text-gold-300"><Knob /></span>
  <span class="target-title uppercase">{@html description.title}</span>
{:else if description.type === CommandTargetType.display}
  <span class="target-icon">&nbsp;</span>
  <span class=" target-title bg-neutral-900 text-white px-2 font-mono"
    >{command.text}</span
  >
  <span class="target-title font-mono uppercase">{@html description.title}</span
  >
{:else if description.type === CommandTargetType.external}
  <span class="target-icon text-neutral-700"><Midi /></span>
  <span class="target-title italic">{@html description.title}</span>
{/if}

<style type="postcss">
  .target-icon {
    grid-area: target-icon;
  }
  .target-title {
    @apply text-center text-sm;
    grid-area: target-title;
  }
</style>
