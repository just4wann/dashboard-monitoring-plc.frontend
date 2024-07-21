<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisCrosshair, VisTooltip, VisBulletLegend } from '@unovis/vue';
import type { PressureDataRecord } from '~/types';

const props = defineProps<{
  data: PressureDataRecord[];
}>();

const labelLength = ref<number>(0);

const x = (d: PressureDataRecord, i: number): number => i;
const y = [(d: PressureDataRecord): number => d.airPress, (d: PressureDataRecord): number => d.vacuumPress];

const xTicksLabel = (i: number): string => {
  return props.data[i].timestamp;
};

const xTickLabelLength = (): number => {
  return props.data.length >= 5 ? (labelLength.value = 5) : (labelLength.value = props.data.length - 1);
};

const items = [
  {
    name: 'Air Pressure',
  },
  {
    name: 'Vacuum Pressure',
  },
];

const template = (d: PressureDataRecord) => `<span>Air Pressure : ${d.airPress} Kpa<br/> Vacuum Pressure : ${d.vacuumPress} Kpa</span>`;
</script>

<template>
  <UCard>
    <main class="flex flex-col justify-center items-start gap-5 w-[468px]">
      <UBadge variant="soft" size="sm" class="font-semibold tracking-wider">Pressure</UBadge>
      <VisXYContainer :data="data" :margin="{ right: 15 }" :height="180">
        <VisLine :x="x" :y="y" :lineWidth="2" />
        <VisAxis type="x" :x="x" :tickFormat="xTicksLabel" :tickTextAngle="15" :gridLine="false" label="Timestamp" :labelMargin="15" :tickLine="false" :numTicks="xTickLabelLength()" />
        <VisAxis type="y" :y="y" :gridLine="false" label="Kpa" :labelMargin="15" :tickLine="false" />
        <VisCrosshair color="rgb(77, 140, 253)" :template="template"/>
        <VisTooltip />
      </VisXYContainer>
      <VisBulletLegend :items="items" />
    </main>
  </UCard>
</template>

<style scoped></style>
