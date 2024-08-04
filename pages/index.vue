<script setup lang="ts">
import { io } from 'socket.io-client';
const socket = io('http://localhost:80');

socket.on('msg', (message) => {
    console.log(message)
})
</script>

<template>
    <div class="mx-auto mt-10">
        
    </div>
</template>

<style scoped>

</style>