<template>
  <main class="flex">
    <Sidebar />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
