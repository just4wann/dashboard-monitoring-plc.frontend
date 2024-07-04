<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-10 font-light">
    <section class="flex flex-col gap-10">
      <h1 class="text-2xl text-center">Visualization Machines Production</h1>
      <!-- <h1 class="text-xl">Dashboard</h1> -->
    </section>
    <section class="flex justify-center items-center flex-wrap gap-5">
      <UCard class="w-96" v-for="count in 4">
        <section class="flex flex-col justify-center items-center gap-5">
          <section class="text-center flex flex-col gap-2 justify-center items-center">
            <h1 class="tracking-widest">Auto Assembling</h1>
            <UBadge color="primary" variant="soft" size="lg" class="font-bold tracking-widest">RUNNING</UBadge>
          </section>

          <section class="flex justify-around items-center tracking-wider w-full">
            <ul class="flex flex-col justify-start items-center gap-2">
              <li>OK Product : <UBadge variant="soft">90</UBadge></li>
              <li>NG Product : <UBadge color="red" variant="soft">5</UBadge></li>
              <li>Efficiency : <UBadge color="primary" variant="soft">56%</UBadge></li>
              <li>Type : <UBadge color="blue" class="font-bold" variant="soft">CR2477</UBadge></li>
            </ul>
            <section class="text-wrap flex flex-col justify-center items-center gap-1">
              <h1 class="text-center text-xl">Shift 1</h1>
              <h1>PIC : <UBadge variant="soft">Juan</UBadge></h1>
            </section>
          </section>
          <p class="text-sm">07/04/2024</p>
        </section>
      </UCard>
    </section>
  </UContainer>
</template>

<style scoped></style>
