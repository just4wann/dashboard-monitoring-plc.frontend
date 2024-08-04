<script setup lang="ts"></script>

<template>
  <main class="flex flex-col justify-center">
    <h1>Auto M-04</h1>
    <section class="flex gap-3 justify-center items-start mt-6 flex-wrap">
      <section class="flex flex-col gap-3">
        <QuantityProd :data="[90, 30]" />
        <ProductType />
      </section>
      <section class="flex flex-col justify-center gap-3">
        <Pressure />
        <OperationTime />
        <MachineStatus />
      </section>
      <section class="flex flex-col justify-center gap-3">
        <Temperature />
        <TroubleList />
      </section>
    </section>
  </main>
</template>

<style scoped></style>
