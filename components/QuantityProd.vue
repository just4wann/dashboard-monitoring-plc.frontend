<script setup lang="ts">
import { VisSingleContainer, VisDonut, VisAnnotations, VisBulletLegend } from '@unovis/vue';
import type { AnnotationItem } from '@unovis/ts';

defineProps<{
  data: number[];
}>();

const itemAnnotations: AnnotationItem[] = [
  {
    content: [
      {
        text: 'Product NG',
        color: 'rgb(255, 255, 255, .5)',
        fontSize: 12,
      },
    ],
    x: -1,
    y: 40,
    subject: { x: 100, y: 85, padding: 0, radius: 3, fillColor: 'black' },
  },
  {
    content: [
      {
        text: 'Product OK',
        color: 'rgb(255, 255, 255, .5)',
        fontSize: 12,
      },
    ],
    x: 250,
    y: 240,
    textAlign: 'right',
    subject: {
      x: 160,
      y: 200,
      padding: 0,
      radius: 3,
      fillColor: 'black',
    },
  },
];

const labels = [
  {
    name: 'Product OK',
    color: 'green'
  },
  {
    name: 'Product NG',
    color: 'red'
  }
]

const value = (d: number) => d;
const color = (d: number, i: number) => ['green', 'red'][i];
</script>

<template>
  <UCard class="w-[300px]">
    <main class="flex flex-col justify-center items-center">
      <h1 class="tracking-widest">Quantity Production</h1>
      <VisSingleContainer :data="data" class="-mt-6">
        <VisDonut :value="value" :arcWidth="100" :radius="90" :color="color" :cornerRadius="5" :showBackground="false" />
        <VisAnnotations :items="itemAnnotations" />
      </VisSingleContainer>
      <!-- <VisBulletLegend :items="labels"/> -->
      <ul class="flex flex-col justify-center items-start gap-2 text-sm tracking-wider -mt-5">
        <li class="flex justify-center items-center gap-1">
          <p class="opacity-80">Total Product :</p>
          <section class="flex justify-center items-center gap-0.5">
            <UBadge variant="soft" size="xs">{{ data.reduce((acc, curr) => acc + curr) }}</UBadge>
            <UKbd>pcs</UKbd>
          </section>
        </li>
        <li class="flex justify-center items-center gap-1">
          <p class="opacity-80">OK Product :</p>
          <section class="flex justify-center items-center gap-0.5">
            <UBadge variant="soft" size="xs">{{ data[0] }}</UBadge>
            <UKbd>pcs</UKbd>
          </section>
        </li>
        <li class="flex justify-center items-center gap-1">
          <p class="opacity-80">NG Product :</p>
          <section class="flex justify-center items-center gap-0.5">
            <UBadge variant="soft" size="xs" color="red">{{ data[1] }}</UBadge>
            <UKbd>pcs</UKbd>
          </section>
        </li>
      </ul>
    </main>
  </UCard>
</template>

<style scoped></style>
