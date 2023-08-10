<script lang="ts">
  import Icon from '@iconify/svelte';

  export let numbers: number;
  export let caption: string;
</script>

<div class="relative bg-tertiary-300 w-32 h-32 rounded-md p-1">
  <div class="">
    <h3 class="text-lg text-tertiary-50">{caption}</h3>
  </div>
  <div class="absolute right-2 top-4">
    <h6 class="text-9xl text-tertiary-200">{numbers}</h6>
  </div>
</div>
