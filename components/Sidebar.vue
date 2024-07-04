<script setup lang="ts"></script>

<template>
  <UCard class="w-80 h-screen">
    <main class="flex flex-col justify-start items-start gap-10 w-full py-4 px-6">
      <h1 class="font-semibold text-2xl text-center">PLC<span class="text-red-600">Dash</span></h1>
      <ul class="flex flex-col gap-5 justify-center items-start w-full font-semibold tracking-wider">
        <NuxtLink to="/dashboard">
          <li class="flex justify-center items-center gap-3">
            <UIcon name="i-heroicons-squares-2x2-16-solid" class="text-xl" />
            <p>Dashboard</p>
            <UKbd>D</UKbd>
          </li>
        </NuxtLink>
        <NuxtLink to="/info">
          <li class="flex justify-center items-center gap-3">
            <UIcon name="i-heroicons-exclamation-circle-16-solid" class="text-xl" />
            <p>Line Info</p>
            <UKbd>L</UKbd>
          </li>
        </NuxtLink>
        <NuxtLink to="/chart">
          <li class="flex justify-center items-center gap-3">
            <UIcon name="i-heroicons-chart-pie-16-solid" class="text-xl" />
            <p>Charts</p>
            <UKbd>C</UKbd>
          </li>
        </NuxtLink>
      </ul>
    </main>
  </UCard>
</template>

<style scoped></style>
