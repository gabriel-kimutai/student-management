<script lang="ts">
  import { AppRail, AppRailAnchor, Avatar } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import type { PageData } from '../../routes/$types';

  export let data: PageData;
  $: user = data.user;
  $: imgUrl = data.imageUrl;

  const iconStyle: string = 'width: 48px; height: 48px;';
</script>

<AppRail width="w-16" height="h-screen" gap="gap-2">
  <svelte:fragment slot="lead">
    <AppRailAnchor href="/admin/dashboard" selected={$page.url.pathname === '/admin/dashboard'}>
      <div class="w-full flex justify-center">
        <Icon icon="ic:round-dashboard" style={iconStyle} />
      </div>
    </AppRailAnchor>
  </svelte:fragment>
  <AppRailAnchor href="/admin/register" selected={$page.url.pathname === '/admin/register'}>
    <div class="w-full flex justify-center">
      <Icon icon="ic:round-app-registration" style={iconStyle} />
    </div>
  </AppRailAnchor>
  <svelte:fragment slot="trail">
    <AppRailAnchor href="/admin/account">
      {#if user}
        <div class="w-full flex justify-center my-1">
          {#if data.user.avatar}
            <Avatar src={imgUrl} width="w-12" />
          {:else}
            <Avatar initials={data.user.firstName} width="w-12" />
          {/if}
        </div>
      {:else}
        <a href="/login">
          <button class="btn variant-filled py-1">Login</button>
        </a>
      {/if}
    </AppRailAnchor>
  </svelte:fragment>
</AppRail>
