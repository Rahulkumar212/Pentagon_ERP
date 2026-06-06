export interface DashboardCard {
  title: string;
  value: string | number;
  icon: string;
  change: string;
}

export type Activity = {
  id: number;
  title: string;
  user: string;
  time: string;
};

export type Task = {
  id: number;
  taskName: string;
  status: 'Pending' | 'Completed' | 'In Progress';
};