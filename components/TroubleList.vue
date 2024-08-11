<script setup lang="ts">
import type { TroubleMachineDataRecord } from '~/types';

defineProps<{
    data: TroubleMachineDataRecord[]
}>()
</script>

<template>
  <UCard class="h-[192px]">
    <main class="flex flex-col justify-center items-center gap-3">
        <h1 class="tracking-widest">Trouble List</h1>
        <ul class="flex flex-col justify-center items-start gap-0.5 text-red-400">
            <li v-if="data.length == 1" class="flex justify-center items-center gap-2 text-sm tracking-wider opacity-80">
                <p>No Trouble</p>
            </li>
            <li v-else v-for="{name, timestamp} in data.slice(0,5)" class="flex justify-center items-center gap-2 text-sm tracking-wider opacity-80">
                <p>{{ name }}</p>
                <p>-> {{ timestamp }}</p>
            </li>
        </ul>
    </main>
  </UCard>
</template>

<style scoped></style>
