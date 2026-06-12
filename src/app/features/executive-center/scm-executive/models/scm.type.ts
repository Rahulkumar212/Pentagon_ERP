export interface ScmCard {
  title: string;
  value: string;
  description: string;
  color: string;
}

export interface ScmOrder {
  id: number;
  orderNo: string;
  customer: string;
  value: string;
  logisticsLead: string;
  progress: number;
  status: string;
}