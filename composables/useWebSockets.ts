import { io, Socket } from 'socket.io-client'
import { useStore } from '~/store'
import type { EfficiencyDataRecord, TemperatureDataRecord, PressureDataRecord, ProductionInfoDataRecord, MachineInfoDataRecord, TroubleMachineDataRecord } from '~/types'

export const useWebSockets = (): Socket => {
    const socket = io('api.beastnice.com:1885');

    socket.on('efficiencies', (value: EfficiencyDataRecord) => {
        const store = useStore();
        store.dataEfficiency.push(value);
    });
    socket.on('temperatures', (value: TemperatureDataRecord) => {
        const store = useStore();
        store.dataTemperature.push(value);
    });
    socket.on('pressures', (value: PressureDataRecord) => {
        const store = useStore();
        store.dataPressure.push(value);
    });
    socket.on('productions', (value: ProductionInfoDataRecord) => {
        const store = useStore();
        store.dataProduction.unshift(value);
    })
    socket.on('machines', (value: MachineInfoDataRecord) => {
        const store = useStore();
        store.dataMachine.unshift(value);
    })
    socket.on('troubles', (value: TroubleMachineDataRecord) => {
        const store = useStore();
        store.dataTrouble.unshift(value);
    })
    return socket;
}