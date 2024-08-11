import type { MachineInfoDataRecord, ProductionInfoDataRecord, TroubleMachineDataRecord, EfficiencyDataRecord, PressureDataRecord, TemperatureDataRecord } from "~/types";

export const useStore = defineStore('store', () => {
  let dataEfficiency = ref<EfficiencyDataRecord[]>([
    {
      value: 0,
      timestamp: '0.0'
    }
  ]);
  let dataPressure = ref<PressureDataRecord[]>([
    {
      airPress: 0,
      vacuumPress: 0,
      timestamp: '0.0'
    }
  ]);
  let dataTemperature = ref<TemperatureDataRecord[]>([
    {
      ovenTemp: 0,
      roomTemp: 0,
      heaterTemp: 0,
      timestamp: '0.0'
    }
  ]);
  const dataProduction = ref<ProductionInfoDataRecord[]>([
    {
      type: '####',
      ok: 0,
      ng: 0,
      timestamp: '0.0'
    }
  ]);
  let dataTrouble = ref<TroubleMachineDataRecord[]>([
    {
      name: '',
      timestamp: '0.0'
    },
  ]);
  const dataMachine = ref<MachineInfoDataRecord[]>([
    {
      status: 'OFF',
      mode: 'OFF',
      runningTime: {
        hour: '0.0',
        minute: '0.0'
      },
      downTime: {
        hour: '0.0',
        minute: '0.0'
      },
      timestamp: '0.0'
    }
  ]);

  dataEfficiency.value = [...new Set(dataEfficiency.value)]
  dataPressure.value = [...new Set(dataPressure.value)]
  dataTemperature.value = [...new Set(dataTemperature.value)]
  dataTrouble.value = [...new Set(dataTrouble.value)]

  return { dataEfficiency, dataPressure, dataTemperature, dataProduction, dataTrouble, dataMachine };
})
