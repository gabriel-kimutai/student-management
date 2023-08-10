<script lang="ts">
  export let data;
</script>

{#if data.user}
  <h1>😃Hello {data.user.firstName}</h1>
  <form action="/logout" method="post">
    <button class="btn variant-filled-primary">Logout</button>
  </form>
{/if}
