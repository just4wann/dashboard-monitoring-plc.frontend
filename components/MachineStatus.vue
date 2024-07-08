<script setup lang="ts"></script>

<template>
  <UCard>
    <section class="flex flex-col justify-center items-center gap-2">
      <h1 class="tracking-widest">Machine Condition</h1>
      <section class="flex justify-center items-center gap-8">
        <section class="flex flex-col justify-center items-center gap-2">
          <p class="text-sm tracking-wider opacity-80">Current Status</p>
          <UBadge variant="soft" size="lg">RUNNING</UBadge>
        </section>
        <section class="flex flex-col justify-center items-center gap-2">
          <p class="text-sm tracking-wider opacity-80">Current Mode</p>
          <UBadge variant="soft" size="lg">AUTO</UBadge>
        </section>
      </section>
    </section>
  </UCard>
</template>

<style scoped></style>
