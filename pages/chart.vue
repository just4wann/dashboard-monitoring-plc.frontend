<script setup lang="ts">
import { useStore } from '~/store';
import type { EfficiencyDataRecord, PressureDataRecord, TemperatureDataRecord } from '~/types';

definePageMeta({
  layout: 'chart',
});

const store = useStore()

const datasPressure = (): PressureDataRecord[] => {
  if (store.dataPressure.length > 5) {
    store.dataPressure = store.dataPressure.slice(store.dataPressure.length - 5, store.dataPressure.length);
  } else if (store.dataPressure.length < 5) {
    store.dataPressure = store.dataPressure;
  }
  return store.dataPressure;
};

const datasEfficiency = (): EfficiencyDataRecord[] => {
  if (store.dataEfficiency.length > 15) {
    store.dataEfficiency = store.dataEfficiency.slice(store.dataEfficiency.length - 15, store.dataEfficiency.length);
  } else if (store.dataEfficiency.length < 15) {
    store.dataEfficiency = store.dataEfficiency;
  }
  return store.dataEfficiency;
};

const datasTemperature = (): TemperatureDataRecord[] => {
  if (store.dataTemperature.length > 5) {
    store.dataTemperature = store.dataTemperature.slice(store.dataTemperature.length - 5, store.dataTemperature.length);
  } else if (store.dataTemperature.length < 5) {
    store.dataTemperature = store.dataTemperature;
  }
  return store.dataTemperature;
};
</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Charts" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <section class="container-line flex flex-wrap gap-4 justify-center items-center">
      <ChartEfficiency :data="datasEfficiency()" />
      <ChartPressure :data="datasPressure()" />
      <ChartTemperature :data="datasTemperature()" />
    </section>
  </UContainer>
</template>

<style scoped></style>
