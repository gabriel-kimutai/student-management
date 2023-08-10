<script lang="ts">
  import NumCard from '$lib/components/NumCard.svelte';
  import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

  export let data;

  const sourceData = data.userList;

  const tableSimple: TableSource = {
    head: ['regNo', 'First Name', 'Last Name', 'Role'],
    body: tableMapperValues(sourceData, ['username', 'firstName', 'lastName', 'role']),
    meta: tableMapperValues(sourceData, ['id', 'username'])
  };

  const selectionHandler = (user: any) => {
    console.log(user.detail);
  };
</script>

<div class="flex-col w-full">
  <div class="border-b mb-2 border-primary-400">
    <h2 class="text-xl">Overview</h2>
  </div>
  <div class="flex gap-2">
    <NumCard caption="Students" numbers={data.studentNums} />
    <NumCard caption="Admins" numbers={data.adminNum} />
  </div>
  <div class="rounded-sm">
    <Table source={tableSimple} interactive={true} on:selected={selectionHandler} />
  </div>
</div>
