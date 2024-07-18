<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisCrosshair, VisTooltip, VisScatter } from '@unovis/vue';
import type { DataRecord } from '~/types';

const props = defineProps<{
  data: DataRecord[];
}>();

const labelLength = ref<number>(0);

const x = (d: DataRecord, i: number): number => i;
const y = [(d: DataRecord): number => d.value];

const xTicksLabel = (i: number): string => {
  return props.data[i].timestamp;
};

const xTickLabelLength = (): number => {
  return props.data.length >= 5 ? labelLength.value = 5 : labelLength.value = props.data.length - 1;
}
</script>

<template>
  <UCard>
    <VisXYContainer :data="data" :width="400" :margin="{right: 10}">
      <VisLine :x="x" :y="y" :lineWidth="2" />
      <VisScatter :x="x" :y="y" />
      <VisAxis type="x" :x="x" :tickFormat="xTicksLabel" :tickTextAngle="15" :gridLine="false" label="Timestamp" :labelMargin="15" :tickLine="false" :numTicks="xTickLabelLength()"/>
      <VisAxis type="y" :y="y" :gridLine="false" label="Efficiency (%)" :labelMargin="15" :tickLine="false" />
      <VisCrosshair />
      <VisTooltip />
    </VisXYContainer>
  </UCard>
</template>

<style scoped></style>
