export interface CorporateTask {

  id: number;

  title: string;

  description: string;

  createdBy: string;

  assignee: string;

  dueDate: string;

  progress: number;

  priority: 'HIGH' | 'MEDIUM' | 'LOW';

}