export interface DashboardStats {
  newRawLeads: number;
  activeOpportunities: number;
  pipelineValue: number;
  completedConversions: number;
  totalLeads?: number;
}

export interface DashboardStatsResponse {
  success: boolean;
  message: string;
  data: DashboardStats;
}

export interface Notification {
  id: number;
  message: string;
}

export interface NotificationResponse {
  data: Notification[];
}