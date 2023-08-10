<script lang="ts">
  import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import Sidebar from '$lib/components/Sidebar.svelte';

  let header: string;
  const getPage = () => {
    page.subscribe((path) => {
      switch (path.url.pathname) {
        case '/admin/dashboard':
          header = 'Dashboard';
          break;
        case '/admin/register':
          header = 'Student Registration';
          break;
        case '/admin/account':
          header = 'Account Settings';
          break;
      }
    });
  };

  getPage();

  export let data;
</script>

<AppShell>
  <AppBar>
    <h1 class="capitalize">{header}</h1>
    <svelte:fragment slot="trail">
      <LightSwitch />
    </svelte:fragment>
  </AppBar>
  <svelte:fragment slot="sidebarLeft">
    <div id="id" class="hidden lg:block">
      <Sidebar {data} />
    </div>
  </svelte:fragment>

  <div class="w-full flex-col justify-between items-center p-6">
    <slot />
  </div>
</AppShell>
