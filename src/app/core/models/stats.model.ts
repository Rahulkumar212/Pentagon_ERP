export interface DashboardOverview {

  approvedLeaves: number;

  totalEmployee: number;

  totalOpportunities: number;

}

export interface ApiResponse<T> {

  success: boolean;

  message: string;

  data: T;

}