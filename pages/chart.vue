<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisArea, VisTooltip, VisCrosshair } from '@unovis/vue';
import { sub } from 'date-fns';
import type { Period, Range } from '~/types';

definePageMeta({
  layout: 'chart',
});

type DataRecords = {
  x: string;
  y: number;
};

const date = Date.now()
const now = date.toLocaleString()

console.log(typeof now)

const data = ref<DataRecords[]>([
  { x: 'Monday', y: 3 },
  { x: 'Tuesday', y: 1.6 },
  { x: 'Wednesday', y: 1.4 },
  { x: 'Thursday', y: 3 },
]);

const x = (_: DataRecords, i: number) => i;
const y = (d: DataRecords) => d.y;

const xTicks = (i: number): string => {
  return data.value[i].x;
}

const range = ref<Range>({ start: sub(new Date(), { days: 1 }), end: new Date() })
const period = ref<Period>('daily')

</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Charts" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <!-- <VisXYContainer :data="data" :padding="{ top: 20 }" class="h-56 mt-6">
      <VisLine :x="x" :y="y" color="rgb(var(--color-primary-DEFAULT))" />
      <VisArea :x="x" :y="y" color="rgb(var(--color-primary-DEFAULT))" :opacity="0.1" />

      <VisAxis type="x" :x="x" />

      <VisCrosshair color="rgb(var(--color-primary-DEFAULT))" :x="x" />
      <VisTooltip />
    </VisXYContainer> -->
    <VisXYContainer :data="data" :margin="{ left: 0, right: 200 }">
      <VisLine :x="x" :y="y" :lineWidth="3"/>
      <VisAxis type="x" :x="x" :tickFormat="xTicks"/>
      <VisAxis type="y" :y="y"/>
      <VisCrosshair />
      <VisTooltip/>
    </VisXYContainer>
    <!-- <ChartEfficiency :period="period" :range="range"/> -->
  </UContainer>
</template>

<style scoped></style>
