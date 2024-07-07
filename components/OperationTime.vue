<script setup lang="ts"></script>

<template>
  <UCard>
    <main class="flex flex-col justify-center items-center gap-3">
      <h1 class="tracking-widest">Machine Operation Time</h1>
      <section class="flex justify-center items-center gap-6">
        <section class="flex flex-col justify-center items-center gap-3">
          <section class="flex flex-col justify-center items-center gap-3">
            <p class="tracking-wider text-sm opacity-70">Running Production</p>
            <section class="flex justify-center items-center gap-3">
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">100</UBadge>
                <UKbd size="md">Hour</UKbd>
              </section>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft">60</UBadge>
                <UKbd size="md">Min</UKbd>
              </section>
            </section>
          </section>
          <section class="flex flex-col justify-center items-center gap-3">
            <p class="tracking-wider text-sm opacity-70">Downtime Production</p>
            <section class="flex justify-center items-center gap-3">
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft" color="red">100</UBadge>
                <UKbd size="md">Hour</UKbd>
              </section>
              <section class="flex justify-center items-center gap-1">
                <UBadge variant="soft" color="red">60</UBadge>
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
