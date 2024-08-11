<script setup lang="ts">
import { useStore } from '~/store';

const store = useStore()
</script>

<template>
  <main class="flex flex-col justify-center">
    <h1>Auto M-01</h1>
    <section class="flex gap-3 justify-center items-start mt-6 flex-wrap">
      <section class="flex flex-col gap-3">
        <QuantityProd :data="[store.dataProduction[0].ok, store.dataProduction[0].ng]" />
        <ProductType :type="store.dataProduction[0].type"/>
      </section>
      <section class="flex flex-col justify-center gap-3">
        <Pressure :data="store.dataPressure"/>
        <OperationTime :data="store.dataMachine"/>
        <MachineStatus :data="store.dataMachine"/>
      </section>
      <section class="flex flex-col justify-center gap-3">
        <Temperature :data="store.dataTemperature"/>
        <TroubleList :data="store.dataTrouble"/>
      </section>
    </section>
  </main>
</template>

<style scoped></style>
