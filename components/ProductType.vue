<script setup lang="ts">
defineProps<{
    type: string
}>()

</script>

<template>
    <UCard>
        <section class="flex flex-col justify-center items-center gap-3">
            <h1 class="tracking-widest">Product Type</h1>
            <section class="flex flex-col justify-center items-center gap-2">
                <p class="text-xs tracking-wider opacity-80">Current Battery Type Production</p>
                <UBadge variant="soft" color="blue" size="lg" class="font-bold">{{ type }}</UBadge>
            </section>
            
        </section>
    </UCard>
</template>

<style scoped>

</style>