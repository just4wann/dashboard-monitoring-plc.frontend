export interface ItemDropdown {
    label?: string;
    icon?: string;
}

interface TimestampDataRecord {
    timestamp: string;
}

export interface MachineStatus {
    noMach: number;
    statusMach: string;
    colorStatus: string;
}

export interface ProductionInfoDataRecord extends TimestampDataRecord {
    type: string;
    ok: number;
    ng: number;
}

export interface TroubleMachineDataRecord extends TimestampDataRecord {
    name: string;
}

export interface EfficiencyDataRecord extends TimestampDataRecord {
    value: number;
}

export interface MachineInfoDataRecord extends TimestampDataRecord {
    status: string;
    mode: string;
    runningTime: {
        hour: string;
        minute: string;
    };
    downTime: {
        hour: string;
        minute: string;
    };
}

export interface PressureDataRecord extends TimestampDataRecord {
    vacuumPress: number;
    airPress: number;
}

export interface TemperatureDataRecord extends TimestampDataRecord {
    ovenTemp: number;
    roomTemp: number;
    heaterTemp: number;
}