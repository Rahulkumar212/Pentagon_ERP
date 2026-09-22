export interface DeliveryPerformance {
  totalDeliveries: number;
  onTimeDeliveries: number;
  delayedDeliveries: number;
  averageDeliveryDays: number;
  onTimePercentage: number;
  delayedPercentage: number;
}

export const DELIVERY_PERFORMANCE: DeliveryPerformance = {
  totalDeliveries: 159,
  onTimeDeliveries: 141,
  delayedDeliveries: 18,
  averageDeliveryDays: 3.4,
  onTimePercentage: 88.7,
  delayedPercentage: 11.3,
};