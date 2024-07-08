<script setup lang="ts">


definePageMeta({
  layout: 'dashboard',
});


</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Dashboard" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <MachineCards />
  </UContainer>
</template>

<style scoped></style>
