<script lang="ts">
  import ControlView from "./ControlView.svelte";
  import ActionView from "./ActionView.svelte";
  import type { Step } from "../types/shortcut";

  export let step: Step;
</script>

<div class="step step grid items-baseline justify-items-center gap-x-2 gap-y-0">
  <ActionView {step} />
  <ControlView {step} />
</div>

<style>
  .step {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      ". target-icon"
      "action target-title";
  }
</style>
