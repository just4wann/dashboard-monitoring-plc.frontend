<script setup lang="ts"></script>

<template>
  <UCard>
    <section class="flex flex-col justify-center items-center gap-2">
      <h1 class="tracking-widest">Pressure Value</h1>
      <section class="flex justify-center items-center gap-10">
        <section class="flex flex-col justify-center items-center gap-2">
          <section class="flex flex-col justify-center items-center gap-1">
            <p class="text-sm tracking-wider opacity-80">Air Pressure</p>
            <section class="flex justify-center items-center gap-1">
              <UBadge variant="soft">43</UBadge>
              <UKbd size="md">Mpa</UKbd>
            </section>
          </section>
          <section class="flex flex-col justify-center items-center gap-1">
            <p class="text-sm tracking-wider opacity-80">Vacuum Pressure</p>
            <section class="flex justify-center items-center gap-1">
              <UBadge variant="soft" color="red">0.1</UBadge>
              <UKbd size="md">Kpa</UKbd>
            </section>
          </section>
        </section>

        <NuxtImg src="pressure.png" width="80"/>
      </section>
    </section>
  </UCard>
</template>

<style scoped></style>
