<script setup lang="ts">
import { useStore } from '~/store';

const store = useStore()    
const badgeColorStatus = ref<string>('');
const colorStatus = [
  {
    status: 'RUNNING',
    color: 'primary'
  },
  {
    status: 'WAITING',
    color: 'orange'
  },
  {
    status: 'TROUBLE',
    color: 'red'
  },
  {
    status: 'OFF',
    color: 'gray'
  },
]

const colorStatusCondition = (): string => {
  let statuses = colorStatus.find(status => status.status === store.dataMachine[0].status);
  if(statuses) {
    return badgeColorStatus.value = statuses.color;
  }
  return badgeColorStatus.value;
}
</script>

<template>
    <main class="flex justify-center items-center flex-wrap gap-10 mt-6">
      <UCard class="w-96">
        <section class="flex flex-col justify-center items-center gap-3">
          <section class="text-center flex flex-col gap-1 justify-center items-center">
            <h1 class="tracking-widest">Auto Assembling M0</h1>
            <UBadge :color="colorStatusCondition()" variant="soft" class="font-bold tracking-widest">{{ store.dataMachine[0].status }}</UBadge>
          </section>

          <section class="flex justify-around items-center tracking-wider w-full text-xs">
            <ul class="flex flex-col justify-center items-start gap-2">
              <li class="flex justify-center items-center gap-1">
                <p>OK Product :</p>
                <section class="flex justify-center items-center gap-0.5">
                  <UBadge variant="soft" size="xs">{{ store.dataProduction[0].ok }}</UBadge>
                  <UKbd>pcs</UKbd>
                </section>
              </li>
              <li class="flex justify-center items-center gap-1">
                <p>NG Product :</p>
                <section class="flex justify-center items-center gap-0.5">
                  <UBadge variant="soft" color="red" size="xs">{{ store.dataProduction[0].ng }}</UBadge>
                  <UKbd>pcs</UKbd>
                </section>
              </li>
              <li>Efficiency : <UBadge color="primary" variant="soft" size="xs">{{ store.dataEfficiency[store.dataEfficiency.length - 1].value }}%</UBadge></li>
              <li>Type : <UBadge color="blue" variant="soft" size="xs">{{ store.dataProduction[0].type }}</UBadge></li>
            </ul>
            <section class="text-wrap flex flex-col justify-center items-center gap-1">
              <h1 class="text-center text-lg">Shift 1</h1>
              <h1>PIC : <UBadge variant="soft">Juan</UBadge></h1>
            </section>
          </section>
          <p class="text-xs mt-3">{{ new Date().getDate() }}/0{{ new Date().getMonth() + 1 }}/{{ new Date().getFullYear() }}</p>
        </section>
      </UCard>
    </main>
</template>