<script setup lang="ts">
import type { DataRecord } from '~/types'

definePageMeta({
  layout: 'chart',
});

const data = ref<DataRecord[]>([
  { timestamp: '08.00', value: 100 },
  { timestamp: '08.01', value: 90 },
  { timestamp: '08.02', value: 100 },
  { timestamp: '08.03', value: 100 },
  { timestamp: '08.04', value: 100 },
  // { timestamp: '08.05', value: 100 },
  // { timestamp: '08.06', value: 90 },
  // { timestamp: '08.07', value: 80 },
  // { timestamp: '08.08', value: 85 },
  // { timestamp: '08.09', value: 80 },
  // { timestamp: '08.10', value: 78 },
  // { timestamp: '08.11', value: 75 },
  // { timestamp: '08.12', value: 76 },
  // { timestamp: '08.13', value: 79 },
  // { timestamp: '08.14', value: 84 },
  // { timestamp: '08.15', value: 88 },
]);

const dataBig = (): DataRecord[] => {
  if (data.value.length > 5) {
    data.value = data.value.slice(data.value.length - 5, data.value.length);
  }
  else if (data.value.length < 5) {
    data.value = data.value;
  }
  return data.value;
}

</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Charts" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <ChartEfficiency :data="dataBig()"/>
  </UContainer>
</template>

<style scoped></style>
