<script lang="ts">
  import {
    Control,
    controlDescriptions,
    ControlType,
  } from "../../data/targets";
  import CircleButton from "../../icons/CircleButton.svelte";
  import FullGrid from "../../icons/FullGrid.svelte";
  import Knob from "../../icons/Knob.svelte";
  import GridCol from "../../icons/GridCol.svelte";
  import Midi from "../../icons/Midi.svelte";
  import type { Step } from "../../types/shortcut";
  import { Action } from "../../data/actions";

  export let step: Step;
  $: description = controlDescriptions[step.control];
</script>

{#if step.action === Action.MENU}
  <span class="target-icon">&nbsp;</span>
  <span class="target-title">{@html step.label}</span>
{:else if description.type === ControlType.none}
  <span class="target-icon font-bold text-[#f00]">INVALID</span>
{:else if description.type === ControlType.circleButton}
  <span class="target-icon text-neutral-50"><CircleButton /></span>
  <span class="target-title uppercase">{@html description.title}</span>
{:else if description.type === ControlType.grid}
  <span
    class={"target-icon " +
      (step.control === Control.GRID_LIT
        ? "text-green-300"
        : "text-neutral-300")}
  >
    <FullGrid />
  </span>
  <span class="target-title">{@html step.label || description.title}</span>
{:else if description.type === ControlType.gridCol}
  <span
    class={"target-icon " + (description.color && `text-${description.color}`)}
  >
    <GridCol />
  </span>
  <span class="target-title">{@html description.title}</span>
{:else if description.type === ControlType.blackKnob}
  <span class="target-icon text-neutral-900"><Knob /></span>
  <span class="target-title uppercase">{@html description.title}</span>
{:else if description.type === ControlType.goldKnob}
  <span class="target-icon text-gold-300"><Knob /></span>
  <span class="target-title uppercase">{@html description.title}</span>
{:else if description.type === ControlType.display}
  <span class="target-icon">&nbsp;</span>
  <span class=" target-title text-white bg-neutral-900 px-2 font-mono"
    >{step.label}</span
  >
  <span class="target-title font-mono uppercase">{@html description.title}</span
  >
{:else if description.type === ControlType.external}
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
