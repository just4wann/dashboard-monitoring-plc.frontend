<script setup lang="ts">
import { eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval, format, eachHourOfInterval, eachMinuteOfInterval } from 'date-fns';
import { VisXYContainer, VisLine, VisAxis, VisArea, VisCrosshair, VisTooltip } from '@unovis/vue';
import type { DataRecord, Period, Range } from '~/types';

const props = defineProps({
  period: {
    type: String as PropType<Period>,
    required: true,
  },
  range: {
    type: Object as PropType<Range>,
    required: true,
  },
});

const { data } = await useAsyncData<DataRecord[]>(
  async (): Promise<DataRecord[]> => {
    const dates = {
      hour: eachHourOfInterval,
      min: eachMinuteOfInterval
    }['hour'](props.range);

    const min = 1000;
    const max = 2000;
    return dates.map((date) => ({ date, value: Math.floor(Math.random() * (max - min + 1)) + min }));
  },
  {
    watch: [() => 'hour', () => props.range],
    default: () => [],
  }
);

const x = (d: DataRecord, i: number) => i;
const y = (d: DataRecord) => d.value;

const total = computed(() => data.value.reduce((acc: number, { value }) => acc + value, 0));

const formatNumber = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format;

const formatDate = (date: Date): string => {
  return {
    hour: format(date, 'h mm'),
    min: format(date, 'm ')
  }['hour'];
};

const values = [
    {
        day: 'Monday',
        value: 10 
    },
    {
        day: 'Tuesday',
        value: 20 
    },
    {
        day: 'Wednesday',
        value: 5 
    },
    {
        day: 'Thursday',
        value: 15 
    },
    {
        day: 'Monday',
        value: 10 
    },
    {
        day: 'Tuesday',
        value: 20 
    },
    {
        day: 'Wednesday',
        value: 5 
    },
    {
        day: 'Thursday',
        value: 15 
    },
]

const xTicks = (i: number) => {
  if (i === 0 || i === data.value.length - 1 || !data.value[i]) {
    return '';
  }
  return values[i].day;
};

const template = (d: DataRecord) => `${formatDate(d.date)}: ${formatNumber(d.value)}`;
</script>

<template>
  <VisXYContainer :data="values" :padding="{ top: 10 }" class="h-96" :margin="{ left: 0, right: 200 }">
    <VisLine :x="x" :y="y" color="rgb(var(--color-primary-DEFAULT))" />
    <VisArea :x="x" :y="y" color="rgb(var(--color-primary-DEFAULT))" :opacity="0.1" />

    <VisAxis type="x" :x="x" :tickFormat="xTicks" :tickTextAngle="15" tickTextAlign="left"/>

    <VisCrosshair color="rgb(var(--color-primary-DEFAULT))" :template="template" />

    <VisTooltip />
  </VisXYContainer>
</template>

<style scoped></style>
