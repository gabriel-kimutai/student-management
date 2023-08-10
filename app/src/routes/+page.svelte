<script lang="ts">
  export let data;
</script>

<div class="container">
  {#if data.user}
    <h1>👋Hello {data.user.firstName}</h1>
    <form action="/logout" method="post">
      <button type="submit" class="btn variant-filled-primary">Logout</button>
    </form>
  {:else}
    <h1>👋Welcome</h1>
  {/if}
</div>
