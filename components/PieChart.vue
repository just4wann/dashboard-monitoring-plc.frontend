<script setup lang="ts">
import { VisSingleContainer, VisDonut } from '@unovis/vue';

defineProps<{
  data: number[];
}>();

const value = (d: number) => d;
const color = (d: number, i: number) => ['green', 'red'][i];
</script>

<template>
    <UCard class="w-[300px]">
      <main class="flex flex-col justify-center items-center">
        <h1 class="tracking-widest">Quantity Production</h1>
        <VisSingleContainer :data="data" class="-mt-8">
          <VisDonut :value="value" :arcWidth="100" :radius="90" :color="color" :cornerRadius="7" :showBackground="false" />
        </VisSingleContainer>
        <ul class="flex flex-col justify-center items-start gap-1 text-sm tracking-wider -mt-5">
          <li>Total Product : <UBadge variant="soft" size="xs">100</UBadge></li>
          <li>OK Product    : <UBadge variant="soft" size="xs">90</UBadge></li>
          <li>NG Product    : <UBadge variant="soft" size="xs" color="red">10</UBadge></li>
        </ul>
      </main>
    </UCard>
</template>

<style scoped></style>
