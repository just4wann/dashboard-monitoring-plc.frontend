<script setup lang="ts">
import type { MachineInfoDataRecord } from '~/types';

defineProps<{
  data: MachineInfoDataRecord[];
}>()
</script>

<template>
  <UCard>
    <main class="flex flex-col justify-center items-center gap-3">
      <h1 class="tracking-widest">Machine Operation Time</h1>
      <section class="flex justify-center items-center gap-6">
        <section class="flex flex-col justify-center items-center gap-3">
          <section class="flex flex-col justify-center items-center gap-3">
            <p class="tracking-wider text-sm opacity-80">Running Production</p>
            <section class="flex justify-center items-center gap-3">
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">{{ data[0].runningTime.hour }}</UBadge>
                <UKbd size="md">Hour</UKbd>
              </section>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">{{ data[0].runningTime.minute }}</UBadge>
                <UKbd size="md">Min</UKbd>
              </section>
            </section>
          </section>
          <section class="flex flex-col justify-center items-center gap-3">
            <p class="tracking-wider text-sm opacity-80">Downtime Production</p>
            <section class="flex justify-center items-center gap-3">
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft" color="red">{{ data[0].downTime.hour }}</UBadge>
                <UKbd size="md">Hour</UKbd>
              </section>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft" color="red">{{ data[0].downTime.minute }}</UBadge>
                <UKbd size="md">Min</UKbd>
              </section>
            </section>
          </section>
        </section>
        <NuxtImg src="time.png" width="80"/>
      </section>
    </main>
  </UCard>
</template>

<style scoped></style>
