<script setup lang="ts">
import type { MachineStatus } from '~/types';

definePageMeta({
  layout: 'dashboard',
});

const machStatus: MachineStatus[] = [
  {
    noMach: 1,
    statusMach: 'RUNNING',
    colorStatus: 'primary',
  },
  {
    noMach: 2,
    statusMach: 'WAITING',
    colorStatus: 'yellow',
  },
  {
    noMach: 3,
    statusMach: 'TROUBLE',
    colorStatus: 'red',
  },
  {
    noMach: 4,
    statusMach: 'OFF',
    colorStatus: 'gray',
  },
];
</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <h1 class="text-xl text-center">Visualization Machines Production</h1>
    <UDivider label="Dashboard" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <section class="flex justify-center items-center flex-wrap gap-10 mt-6">
      <UCard class="w-96" v-for="{ noMach, statusMach, colorStatus } in machStatus">
        <section class="flex flex-col justify-center items-center gap-3">
          <section class="text-center flex flex-col gap-1 justify-center items-center">
            <h1 class="tracking-widest">Auto Assembling M0{{ noMach }}</h1>
            <UBadge :color="colorStatus" variant="soft" class="font-bold tracking-widest">{{ statusMach }}</UBadge>
          </section>

          <section class="flex justify-around items-center tracking-wider w-full text-xs">
            <ul class="flex flex-col justify-center items-start gap-2">
              <li class="flex justify-center items-center gap-1">
                <p>OK Product :</p>
                <section class="flex justify-center items-center gap-0.5">
                  <UBadge variant="soft" size="xs">90</UBadge>
                  <UKbd>pcs</UKbd>
                </section>
              </li>
              <li class="flex justify-center items-center gap-1">
                <p>NG Product :</p>
                <section class="flex justify-center items-center gap-0.5">
                  <UBadge variant="soft" color="red" size="xs">10</UBadge>
                  <UKbd>pcs</UKbd>
                </section>
              </li>
              <li>Efficiency : <UBadge color="primary" variant="soft" size="xs">56%</UBadge></li>
              <li>Type : <UBadge color="blue" variant="soft" size="xs">CR2477</UBadge></li>
            </ul>
            <section class="text-wrap flex flex-col justify-center items-center gap-1">
              <h1 class="text-center text-lg">Shift 1</h1>
              <h1>PIC : <UBadge variant="soft">Juan</UBadge></h1>
            </section>
          </section>
          <p class="text-xs mt-3">07/04/2024</p>
        </section>
      </UCard>
    </section>
  </UContainer>
</template>

<style scoped></style>
