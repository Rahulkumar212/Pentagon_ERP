export interface OrganizationSummary {

  category: string;

  description: string;

  icon: string;

  count: number;

  progress: number;

}

export const ORGANIZATION_SUMMARY_DATA: OrganizationSummary[] = [

  {
    category: 'Educational Institutions',
    description: 'Schools & Colleges',
    icon: '🏫',
    count: 148,
    progress: 92
  },

  {
    category: 'Healthcare',
    description: 'Hospitals & Clinics',
    icon: '🏥',
    count: 64,
    progress: 76
  },

  {
    category: 'Corporate',
    description: 'Private Organizations',
    icon: '🏢',
    count: 83,
    progress: 84
  },

  {
    category: 'Government',
    description: 'Government Departments',
    icon: '🏛️',
    count: 29,
    progress: 58
  }

];