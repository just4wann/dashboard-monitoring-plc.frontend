<script setup lang="ts"></script>

<template>
  <UCard>
    <main class="flex flex-col justify-center items-center gap-6">
      <section class="flex flex-col justify-center items-center gap-3">
        <h1 class="tracking-widest">Temperature Value</h1>
        <section class="flex justify-center items-center gap-10">
          <section class="flex flex-col justify-center items-center gap-3">
            <section class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm tracking-wider opacity-70">Temperature 1</p>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">28</UBadge>
                <UKbd size="md">°C</UKbd>
              </section>
            </section>
            <section class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm tracking-wider opacity-70">Temperature 2</p>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">19</UBadge>
                <UKbd size="md">°C</UKbd>
              </section>
            </section>
            <section class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm tracking-wider opacity-70">Temperature 3</p>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft" color="red">50</UBadge>
                <UKbd size="md">°C</UKbd>
              </section>
            </section>
          </section>

          <NuxtImg src="temperature.png" width="110" />
        </section>
      </section>

      <UAlert title="Temperature Specification" description="100± 10°C" color="red" icon="i-carbon-temperature-max" variant="soft" />
    </main>
  </UCard>
</template>

<style scoped></style>
