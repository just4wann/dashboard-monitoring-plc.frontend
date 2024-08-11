<script setup lang="ts">
import type { MachineInfoDataRecord } from '~/types';

const props = defineProps<{
  data: MachineInfoDataRecord[];
}>()

const badgeColorMode = ref<string>('');
const badgeColorStatus = ref<string>('');

const colorMode = [
  {
    mode: 'AUTO',
    color: 'primary'
  },
  {
    mode: 'MANUAL',
    color: 'blue'
  },
  {
    mode: 'INCHING',
    color: 'orange'
  },
  {
    mode: 'OFF',
    color: 'gray'
  },
];

const colorStatus = [
  {
    status: 'RUNNING',
    color: 'primary'
  },
  {
    status: 'WAITING',
    color: 'orange'
  },
  {
    status: 'TROUBLE',
    color: 'red'
  },
  {
    status: 'OFF',
    color: 'gray'
  },
]
const colorModeCondition = (): string => {
  let modes = colorMode.find(mode => mode.mode === props.data[0].mode);
  if(modes) {
    return badgeColorMode.value = modes.color;
  }
  return badgeColorMode.value;
}

const colorStatusCondition = (): string => {
  let statuses = colorStatus.find(status => status.status === props.data[0].status);
  if(statuses) {
    return badgeColorStatus.value = statuses.color;
  }
  return badgeColorStatus.value;
}
</script>

<template>
  <UCard>
    <section class="flex flex-col justify-center items-center gap-2">
      <h1 class="tracking-widest">Machine Condition</h1>
      <section class="flex justify-center items-center gap-8">
        <section class="flex flex-col justify-center items-center gap-2">
          <p class="text-sm tracking-wider opacity-80">Current Status</p>
          <UBadge variant="soft" size="lg" :color="colorStatusCondition()">{{ data[0].status }}</UBadge>
        </section>
        <section class="flex flex-col justify-center items-center gap-2">
          <p class="text-sm tracking-wider opacity-80">Current Mode</p>
          <UBadge variant="soft" size="lg" :color="colorModeCondition()">{{ data[0].mode }}</UBadge>
        </section>
      </section>
    </section>
  </UCard>
</template>

<style scoped></style>
