<script setup lang="ts">
import type { TemperatureDataRecord } from '~/types';

defineProps<{
  data: TemperatureDataRecord[]
}>()
</script>

<template>
  <UCard>
    <main class="flex flex-col justify-center items-center gap-6">
      <section class="flex flex-col justify-center items-center gap-3">
        <h1 class="tracking-widest">Temperature Value</h1>
        <section class="flex justify-center items-center gap-10">
          <section class="flex flex-col justify-center items-center gap-3">
            <section class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm tracking-wider opacity-80">Oven Temperature</p>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">{{ data[data.length - 1].ovenTemp }}</UBadge>
                <UKbd size="md">°C</UKbd>
              </section>
            </section>
            <section class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm tracking-wider opacity-80">Room Temperature</p>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">{{ data[data.length - 1].roomTemp }}</UBadge>
                <UKbd size="md">°C</UKbd>
              </section>
            </section>
            <section class="flex flex-col justify-center items-center gap-2">
              <p class="text-sm tracking-wider opacity-80">Heater Temperature</p>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft" color="red">{{ data[data.length - 1].heaterTemp }}</UBadge>
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
