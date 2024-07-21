<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisCrosshair, VisTooltip, VisBulletLegend } from '@unovis/vue';
import type { TemperatureDataRecord } from '~/types';

const props = defineProps<{
  data: TemperatureDataRecord[];
}>();

const labelLength = ref<number>(0);

const x = (d: TemperatureDataRecord, i: number): number => i;
const y = [
    (d: TemperatureDataRecord): number => d.ovenTemp, 
    (d: TemperatureDataRecord): number => d.roomTemp,
    (d: TemperatureDataRecord): number => d.heaterTemp,
];

const xTicksLabel = (i: number): string => {
  return props.data[i].timestamp;
};

const xTickLabelLength = (): number => {
  return props.data.length >= 5 ? (labelLength.value = 5) : (labelLength.value = props.data.length - 1);
};

const items = [
  {
    name: 'Oven',
  },
  {
    name: 'Room',
  },
  {
    name: 'Heater'
  }
];

const template = (d: TemperatureDataRecord) => `<span>Oven : ${d.ovenTemp} C<br/> Room : ${d.roomTemp} C<br/> Heater : ${d.heaterTemp} C</span>`;
</script>

<template>
  <UCard>
    <main class="flex flex-col justify-center items-start gap-5 w-[468px]">
      <UBadge variant="soft" size="sm" class="font-semibold tracking-wider">Temperature</UBadge>
      <VisXYContainer :data="data" :margin="{ right: 15 }" :height="180">
        <VisLine :x="x" :y="y" :lineWidth="2" />
        <VisAxis type="x" :x="x" :tickFormat="xTicksLabel" :tickTextAngle="15" :gridLine="false" label="Timestamp" :labelMargin="15" :tickLine="false" :numTicks="xTickLabelLength()" />
        <VisAxis type="y" :y="y" :gridLine="false" label="Celcius" :labelMargin="15" :tickLine="false" />
        <VisCrosshair color="rgb(77, 140, 253)" :template="template"/>
        <VisTooltip />
      </VisXYContainer>
      <VisBulletLegend :items="items" />
    </main>
  </UCard>
</template>

<style scoped></style>
