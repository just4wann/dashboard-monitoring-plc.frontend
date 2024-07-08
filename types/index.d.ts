export interface ItemDropdown {
    label?: string;
    icon?: string;
}

export interface MachineStatus {
    noMach: number;
    statusMach: string;
    colorStatus: string;
}

export type PieChartDataConfig = {
    label: string;
    value: number;
} 

export type Period = 'daily' | 'weekly' | 'monthly';
export interface Range {
    start: Date;
    end: Date;
}
export type DataRecord = {
    date: Date;
    value: number;
}