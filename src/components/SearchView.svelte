<script lang="ts">
  import { onMount } from "svelte";

  export let input = "";

  let inputEl: HTMLInputElement;

  onMount(() => {
    inputEl.focus();
  });

  function handleInputKeyDown(ev: KeyboardEvent) {
    ev.stopPropagation();
    if (ev.key === "Escape") {
      input = "";
      inputEl.blur();
    } else if (ev.key === "Enter") {
      inputEl.blur();
    }
  }

  function handleGlobalKeyDown(ev: KeyboardEvent) {
    if (["f", "F"].includes(ev.key)) {
      inputEl.focus();
    }
  }
</script>

<input
  type="search"
  placeholder="Search... (⌨&#xFE0E; F)"
  class="px-6 py-3 rounded-full block w-full bg-neutral-900 focus:bg-neutral-800 text-neutral-200 outline-neutral-600 focus:outline-2 outline-1 outline"
  bind:value={input}
  bind:this={inputEl}
  on:keydown={handleInputKeyDown}
/>

<svelte:window on:keydown={handleGlobalKeyDown} />
