<script setup lang="ts"></script>

<template>
  <main class="flex flex-col justify-start items-start bg-slate-800 w-80 h-screen py-4 px-6">
    <h1 class="font-semibold text-xl mx-auto">PLC<span class="text-red-600">Dash</span></h1>
    <ul>
      <li>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/chart">Chart</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/info">Line Information</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/operator">Operator</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
