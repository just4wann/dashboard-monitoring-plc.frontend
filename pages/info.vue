<script setup lang="ts">

definePageMeta({
  layout: 'info',
});

const isClickM1 = ref<boolean>(false);
const isClickM2 = ref<boolean>(false);
const isClickM3 = ref<boolean>(false);
const isClickM4 = ref<boolean>(false);

onMounted(() => {
  isClickM1.value = true;
});

const items = [
  [
    {
      label: 'Auto Assembling M-01',
      click: () => {
        isClickM1.value = true;
        isClickM2.value = false;
        isClickM3.value = false;
        isClickM4.value = false;
      },
    },
    {
      label: 'Auto Assembling M-02',
      click: () => {
        isClickM1.value = false;
        isClickM2.value = true;
        isClickM3.value = false;
        isClickM4.value = false;
      },
    },
    {
      label: 'Auto Assembling M-03',
      click: () => {
        isClickM1.value = false;
        isClickM2.value = false;
        isClickM3.value = true;
        isClickM4.value = false;
      },
    },
    {
      label: 'Auto Assembling M-04',
      click: () => {
        isClickM1.value = false;
        isClickM2.value = false;
        isClickM3.value = false;
        isClickM4.value = true;
      },
    },
  ],
];
</script>

<template>
  <UContainer class="flex flex-col justify-start w-full gap-7 font-light">
    <section class="relative">
      <h1 class="text-xl text-center">Visualization Machines Production</h1>
      <section class="absolute right-10 top-1">
        <UDropdown :items="items" :ui="{ item: { size: 'text-xs' } }">
          <UTooltip text="Machine lists" :popper="{ placement: 'bottom-end' }">
            <UButton size="xs" color="primary" trailing-icon="i-heroicons-list-bullet-16-solid" :ui="{ rounded: 'rounded-full' }" />
          </UTooltip>
        </UDropdown>
      </section>
    </section>
    <UDivider label="Line Information" :ui="{ label: 'text-xs tracking-widest text-primary font-semibold', border: { base: 'flex border-primary-200 dark:border-primary-800' } }"></UDivider>
    <LineInformationAssemblyAutoM1 v-if="isClickM1"/>
    <LineInformationAssemblyAutoM2 v-if="isClickM2"/>
    <LineInformationAssemblyAutoM3 v-if="isClickM3"/>
    <LineInformationAssemblyAutoM4 v-if="isClickM4"/>
  </UContainer>
</template>

<style scoped></style>
