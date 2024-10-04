<script lang="ts">
  import { activeView } from "../stores/viewStore";
  import type { View } from "../types/shortcut";
  export let view: View;

  $: isActive = $activeView != null && $activeView === view.id;
  $: classes = isActive
    ? `bg-${view.color}-300 text-${view.color}-950 border-transparent`
    : `border-${view.color}-500 text-${view.color}-500`;

  function onClick() {
    activeView.update((oldValue) => {
      if (oldValue === view.id) {
        return null;
      }
      return view.id;
    });
  }
</script>

<button
  class="whitespace-nowrap rounded-full border px-3 font-medium {classes}"
  on:click={onClick}
>
  {view.title}
</button>
