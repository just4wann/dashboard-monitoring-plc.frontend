<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisArea, VisTooltip, VisCrosshair } from '@unovis/vue';

definePageMeta({
  layout: 'chart',
});

type DataRecords = {
  x: number;
  y: number;
};

const data = ref<DataRecords[]>([
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
]);

const x = (_: DataRecords, i: number) => i;
const y = (d: DataRecords) => d.y
</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-4 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Charts" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800'}}"></UDivider>
    <VisXYContainer
      :data="data"
      :padding="{ top: 20 }"
      class="h-56 mt-14"
    >
      <VisLine
        :x="x"
        :y="y"
        color="rgb(var(--color-primary-DEFAULT))"
      />
      <VisArea
        :x="x"
        :y="y"
        color="rgb(var(--color-primary-DEFAULT))"
        :opacity="0.1"
      />

      <VisAxis
        type="x"
        :x="x"
      />

      <VisCrosshair
        color="rgb(var(--color-primary-DEFAULT))"
        :x="x"
      />
      <VisTooltip />
    </VisXYContainer>
  </UContainer>
</template>

<style scoped></style>
