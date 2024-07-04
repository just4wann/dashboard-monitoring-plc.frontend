<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis, VisArea, VisTooltip } from '@unovis/vue';

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
]);

const x = (_: DataRecords, i: number) => i;
const y = (d: DataRecords) => d.y
</script>

<template>
  <main>
    
    <VisXYContainer
      :data="data"
      :padding="{ top: 10 }"
      class="h-96"
      :width="1000"
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
      />

      <VisTooltip />
    </VisXYContainer>
  </main>
</template>

<style scoped></style>
