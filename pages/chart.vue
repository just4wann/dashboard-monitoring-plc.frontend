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
  { x: '08.00', y: 1 },
  { x: '08.01', y: 2 },
  { x: '08.02', y: 3 },
  { x: '08.03', y: 2 },
  { x: '08.04', y: 4 },
  { x: '08.05', y: 5 },
  { x: '08.06', y: 1 },
  { x: '08.07', y: 3 },
  { x: '08.00', y: 2 },
  { x: '08.01', y: 4 },
  { x: '08.02', y: 5 },
  { x: '08.03', y: 1 },
  { x: '08.04', y: 3 },
  { x: '08.05', y: 5 },
  { x: '08.06', y: 4 },
  { x: '08.07', y: 3 },
]);

const sliceData = data.value.slice(data.value.length - 5, data.value.length);
console.log(sliceData);

const x = (_: DataRecords, i: number) => i;
const y = (d: DataRecords) => d.y;

const xTicks = (i: number): string => {
  return sliceData[i].x;
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
    <VisXYContainer :data="sliceData" :margin="{ left: 0, right: 30 }">
      <VisLine :x="x" :y="y" :lineWidth="3"/>
      <VisAxis type="x" :x="x" :tickFormat="xTicks" :tickTextAngle="15" :gridLine="false"/>
      <VisAxis type="y" :y="y" :gridLine="false"/>
      <VisCrosshair />
      <VisTooltip/>
    </VisXYContainer>
    <!-- <ChartEfficiency :period="period" :range="range"/> -->
  </UContainer>
</template>

<style scoped></style>
