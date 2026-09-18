export type PipelinePriority = 'HOT' | 'WARM' | 'COLD';

export interface PipelineLead {
  id: number;
  customerName: string;
  contactPerson: string;
  value: number;
  priority: PipelinePriority;
  owner: string;
  lastActivity: string;
}