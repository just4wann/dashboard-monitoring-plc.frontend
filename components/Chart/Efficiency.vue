<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisCrosshair, VisTooltip } from '@unovis/vue';
import type { EfficiencyDataRecord } from '~/types';

const props = defineProps<{
  data: EfficiencyDataRecord[];
}>();

const x = (d: EfficiencyDataRecord, i: number): number => i;
const y = [(d: EfficiencyDataRecord): number => d.value];

const xTicksLabel = (i: number): string => {
  console.log(i)
  return props.data[i].timestamp;
};

const xTickLabelLength = (): number => {
  return props.data.length >= 15 ? 15 : props.data.length - 1
};

const template = (d: EfficiencyDataRecord) => `<p class="text-xs">${d.value} %</p>`;
</script>

<template>
  <UCard class="w-full">
    <main class="flex flex-col justify-center items-start gap-5">
      <UBadge variant="soft" size="sm" class="font-semibold tracking-wider">Efficiency</UBadge>
      <VisXYContainer :data="data" :margin="{ right: 15 }" :height="200">
        <VisLine :x="x" :y="y" :lineWidth="2" />
        <VisAxis type="x" :x="x" :tickFormat="xTicksLabel" :tickTextAngle="15" :gridLine="false" label="Timestamp" :labelMargin="15" :tickLine="false" :numTicks="xTickLabelLength()" />
        <VisAxis type="y" :y="y" :gridLine="false" label="Efficiency (%)" :labelMargin="15" :tickLine="false" />
        <VisCrosshair :template="template" color="rgb(77, 140, 253)" />
        <VisTooltip />
      </VisXYContainer>
    </main>
  </UCard>
</template>

<style scoped></style>
