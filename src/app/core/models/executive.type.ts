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