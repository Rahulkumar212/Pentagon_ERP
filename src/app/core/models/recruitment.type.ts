export interface JobRequisition {

  id: string;

  title: string;

  department: string;

  employmentType: string;

  description: string;

  status: 'OPEN' | 'CLOSED' | 'DRAFT';

  candidates: number;

  postedDate: string;

}