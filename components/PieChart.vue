<script setup lang="ts">
import { VisSingleContainer, VisDonut } from '@unovis/vue';

defineProps<{
    data: number[]
}>();

const value = (d: number) => d;
const color = (d: number, i: number) => ['green', 'red'][i]
</script>

<template>
    <UContainer>
        <UCard>
            <main class="flex flex-col justify-center items-center">
               <h1>Quantity Production</h1>
                <VisSingleContainer :data="data">
                    <VisDonut 
                        :value="value" 
                        :arcWidth="100" 
                        :radius="90" 
                        :color="color"
                        :cornerRadius="7"
                        :showBackground="false"
                    />
                </VisSingleContainer>
                <ul class="flex flex-col justify-center items-start gap-1 text-xs tracking-wider">
                    <li>Total Product : <UBadge variant="soft" size="xs">100</UBadge></li>
                    <li>OK Product : <UBadge variant="soft" size="xs">90</UBadge></li>
                    <li>NG Product : <UBadge variant="soft" size="xs" color="red">10</UBadge></li>
                </ul> 
            </main>
        </UCard>
    </UContainer>
</template>

<style scoped>

</style>