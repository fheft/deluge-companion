<script lang="ts">
  import { onMount } from "svelte";
  import Cross from "../icons/Cross.svelte";
  import { searchQuery } from "../stores/searchStore";

  let inputEl: HTMLInputElement;
  $: hasContent = $searchQuery.length > 0;

  onMount(() => {
    inputEl.focus();
  });

  function clear() {
    searchQuery.update(() => "");
    inputEl.blur();
  }

  function handleInputKeyDown(ev: KeyboardEvent) {
    ev.stopPropagation();
    if (ev.key === "Escape") {
      clear();
    } else if (ev.key === "Enter") {
      inputEl.blur();
    }
  }

  function handleGlobalKeyDown(ev: KeyboardEvent) {
    if (["f", "F"].includes(ev.key)) {
      ev.preventDefault();
      inputEl.focus();
    }
  }
</script>

<div class="relative block">
  <input
    type="search"
    placeholder="Search... (⌨&#xFE0E; F)"
    class=" w-full rounded-full bg-neutral-900 px-6 py-3 text-neutral-200 outline outline-1 outline-neutral-600 focus:bg-neutral-800 focus:outline-2"
    bind:value={$searchQuery}
    bind:this={inputEl}
    on:keydown={handleInputKeyDown}
  />
  {#if hasContent}
    <div
      class="absolute right-0 top-0 flex aspect-square h-full items-center justify-center"
    >
      <button
        on:click={clear}
        class=" aspect-square h-8 rounded-full p-2 text-neutral-300 hover:bg-neutral-50/10"
      >
        <Cross />
      </button>
    </div>
  {/if}
</div>

<svelte:window on:keydown={handleGlobalKeyDown} />

<style lang="postcss">
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
</style>
