
export interface PerformanceDetailItem {
  id: string;
  carrier: string;
  totalDeliveries: number;
  delivered: number;
  onTime: number;
  delayed: number;
  returned: number;
  onTimeRate: number;
  successRate: number;
  averageDeliveryDays: number;
}

export const PERFORMANCE_DETAIL_DATA: PerformanceDetailItem[] = [
  {
    id: 'PD-001',
    carrier: 'BlueDart',
    totalDeliveries: 96,
    delivered: 91,
    onTime: 87,
    delayed: 5,
    returned: 2,
    onTimeRate: 91,
    successRate: 95,
    averageDeliveryDays: 2.8,
  },
  {
    id: 'PD-002',
    carrier: 'Delhivery',
    totalDeliveries: 82,
    delivered: 77,
    onTime: 69,
    delayed: 5,
    returned: 3,
    onTimeRate: 84,
    successRate: 94,
    averageDeliveryDays: 3.4,
  },
  {
    id: 'PD-003',
    carrier: 'DTDC',
    totalDeliveries: 70,
    delivered: 65,
    onTime: 58,
    delayed: 7,
    returned: 3,
    onTimeRate: 83,
    successRate: 93,
    averageDeliveryDays: 3.6,
  },
];

export interface PerformanceDetailSummary {
  totalDeliveries: number;
  delivered: number;
  onTime: number;
  delayed: number;
  returned: number;
  overallOnTimeRate: number;
  overallSuccessRate: number;
  averageDeliveryDays: number;
}

export const PERFORMANCE_DETAIL_SUMMARY: PerformanceDetailSummary = {
  totalDeliveries: 248,
  delivered: 233,
  onTime: 214,
  delayed: 18,
  returned: 8,
  overallOnTimeRate: 89,
  overallSuccessRate: 95,
  averageDeliveryDays: 3.2,
};

