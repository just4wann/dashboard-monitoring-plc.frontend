<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisArea, VisTooltip, VisCrosshair, VisScatter, VisBulletLegend } from '@unovis/vue';
import { sub } from 'date-fns';
import type { Period, Range } from '~/types';

definePageMeta({
  layout: 'chart',
});

type DataRecords = {
  x: string;
  y: number;
  y1: number;
  y2: number;
};

const date = Date.now();
const now = date.toLocaleString();

const data = ref<DataRecords[]>([
  { x: '08.00', y: 1, y1: 2, y2: 3 },
  { x: '08.01', y: 2, y1: 1, y2: 4 },
  { x: '08.02', y: 3, y1: 4, y2: 2 },
  { x: '08.03', y: 2, y1: 1, y2: 5 },
  { x: '08.04', y: 4, y1: 1, y2: 3 },
  { x: '08.05', y: 5, y1: 2, y2: 4 },
  { x: '08.06', y: 1, y1: 4, y2: 2 },
  { x: '08.07', y: 3, y1: 1, y2: 5 },
  { x: '08.08', y: 2, y1: 1, y2: 3 },
  { x: '08.09', y: 4, y1: 3, y2: 1 },
  { x: '08.10', y: 5, y1: 2, y2: 3 },
  { x: '08.11', y: 1, y1: 4, y2: 5 },
  { x: '08.12', y: 3, y1: 1, y2: 4 },
  { x: '08.13', y: 5, y1: 2, y2: 3 },
  { x: '08.14', y: 4, y1: 5, y2: 3 },
  { x: '08.15', y: 3, y1: 2, y2: 5 },
]);

const labels = ['Temperature 1', 'Temperature 2', 'Temperature 3'];
const items = labels.map(item => ({ name: item }));

const sliceData = data.value.slice();

const x = (_: DataRecords, i: number) => i;
const y = [(d: DataRecords) => d.y, (d: DataRecords) => d.y1, (d: DataRecords) => d.y2];

const xTicks = (i: number): string => {
  return sliceData[i].x;
};

const range = ref<Range>({ start: sub(new Date(), { days: 1 }), end: new Date() });
const period = ref<Period>('daily');
</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Charts" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <VisXYContainer :data="sliceData" :margin="{ left: 0, right: 30 }">
      <VisLine :x="x" :y="y" :lineWidth="2" />
      <VisScatter :x="x" :y="y" />
      <VisAxis type="x" :x="x" :tickFormat="xTicks" :tickTextAngle="15" :gridLine="false" label="Timestamp" :labelMargin="15" :tickLine="false" :numTicks="20" />
      <VisAxis type="y" :y="y" :gridLine="false" label="Efficiency (%)" :labelMargin="15" :tickLine="false" />
      <VisCrosshair />
      <VisTooltip />
    </VisXYContainer>
    <VisBulletLegend :items="items" />
    <!-- <ChartEfficiency :period="period" :range="range"/> -->
  </UContainer>
</template>

<style scoped></style>
