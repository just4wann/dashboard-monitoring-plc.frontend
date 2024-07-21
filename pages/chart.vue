<script setup lang="ts">
import { dataEfficiency, dataPressure, dataTemperature } from '~/store';
import type { EfficiencyDataRecord, PressureDataRecord, TemperatureDataRecord } from '~/types';

definePageMeta({
  layout: 'chart',
});

const datasPressure = (): PressureDataRecord[] => {
  if (dataPressure.value.length > 5) {
    dataPressure.value = dataPressure.value.slice(dataPressure.value.length - 5, dataPressure.value.length);
  } else if (dataPressure.value.length < 5) {
    dataPressure.value = dataPressure.value;
  }
  return dataPressure.value;
};

const datasEfficiency = (): EfficiencyDataRecord[] => {
  if (dataEfficiency.value.length > 15) {
    dataEfficiency.value = dataEfficiency.value.slice(dataEfficiency.value.length - 15, dataEfficiency.value.length);
  } else if (dataEfficiency.value.length < 15) {
    dataEfficiency.value = dataEfficiency.value;
  }
  return dataEfficiency.value;
};

const datasTemperature = (): TemperatureDataRecord[] => {
  if (dataTemperature.value.length > 5) {
    dataTemperature.value = dataTemperature.value.slice(dataTemperature.value.length - 5, dataTemperature.value.length);
  } else if (dataTemperature.value.length < 5) {
    dataTemperature.value = dataTemperature.value;
  }
  return dataTemperature.value;
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
