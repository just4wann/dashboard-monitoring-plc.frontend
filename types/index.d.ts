export interface ItemDropdown {
    label?: string;
    icon?: string;
}

export interface MachineStatus {
    noMach: number;
    statusMach: string;
    colorStatus: string;
}

interface TimestampDataRecord {
    timestamp: string;
}

export interface EfficiencyDataRecord extends TimestampDataRecord {
    value: number;
}

export interface PressureDataRecord extends TimestampDataRecord {
    airPress: number;
    vacuumPress: number;
}

export interface TemperatureDataRecord extends TimestampDataRecord {
    ovenTemp: number;
    roomTemp: number;
    heaterTemp: number;
}