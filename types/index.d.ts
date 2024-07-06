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