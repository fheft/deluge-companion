<script lang="ts">
  import { allViews } from "../stores/viewStore";
  import ViewFilterItem from "./ViewFilterItem.svelte";
</script>

<div class="my-4">
  <h2 class="text-lg font-bold">Filter:</h2>
  <div class="flex flex-wrap gap-2">
    {#each $allViews as view}
      <ViewFilterItem {view} />
    {/each}
  </div>
</div>
