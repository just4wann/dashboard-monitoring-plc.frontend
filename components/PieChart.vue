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
      <VisSingleContainer :data="data" class="-mt-6">
        <VisDonut :value="value" :arcWidth="100" :radius="90" :color="color" :cornerRadius="7" :showBackground="false" />
      </VisSingleContainer>
      <ul class="flex flex-col justify-center items-start gap-2 text-sm tracking-wider -mt-5">
        <li class="flex justify-center items-center gap-1">
          <p class="opacity-80">Total Product :</p>
          <section class="flex justify-center items-center gap-0.5">
            <UBadge variant="soft" size="xs">100</UBadge>
            <UKbd>pcs</UKbd>
          </section>
        </li>
        <li class="flex justify-center items-center gap-1">
          <p class="opacity-80">OK Product :</p>
          <section class="flex justify-center items-center gap-0.5">
            <UBadge variant="soft" size="xs">90</UBadge>
            <UKbd>pcs</UKbd>
          </section>
        </li>
        <li class="flex justify-center items-center gap-1">
          <p class="opacity-80">NG Product :</p>
          <section class="flex justify-center items-center gap-0.5">
            <UBadge variant="soft" size="xs" color="red">10</UBadge>
            <UKbd>pcs</UKbd>
          </section>
        </li>
      </ul>
    </main>
  </UCard>
</template>

<style scoped></style>
