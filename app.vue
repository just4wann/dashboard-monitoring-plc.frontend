<script setup lang="ts">
const socket = useWebSockets();
const isConnect = ref<boolean>(false);
const isDisconnect = ref<boolean>(false);

socket.on('connect', () => {
  if (socket.connected) {
    isConnect.value = true
    isDisconnect.value = false
    setTimeout(() => {
      isConnect.value = false
    }, 3000)
  }

  else if (socket.disconnected) {
    isConnect.value = false;
    isDisconnect.value = true;
    setTimeout(() => {
      isDisconnect.value = false;
    }, 3000)
  }
})

</script>
<template>
  <main class="flex relative">
    <Sidebar />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <section class="absolute right-5 bottom-5 w-80">
      <UNotification title="Connect to Server" :id="1" v-if="isConnect" color="primary" :timeout="3000"/>
      <UNotification title="Disconnect from Server" :id="2" v-if="isDisconnect" color="red" :timeout="3000"/>
    </section>
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
