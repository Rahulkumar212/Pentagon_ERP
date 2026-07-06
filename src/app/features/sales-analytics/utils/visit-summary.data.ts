export interface VisitSummary {

  title: string;

  subtitle: string;

  icon: string;

  count: number;

  percentage: number;

}

export const VISIT_SUMMARY_DATA: VisitSummary[] = [

  {
    title: 'Planned Visits',
    subtitle: 'Scheduled Institutions',
    icon: '🗓️',
    count: 210,
    percentage: 100
  },

  {
    title: 'Completed Visits',
    subtitle: 'Successfully Completed',
    icon: '✅',
    count: 176,
    percentage: 84
  },

  {
    title: 'Pending Visits',
    subtitle: 'Awaiting Completion',
    icon: '⏳',
    count: 24,
    percentage: 11
  },

  {
    title: 'Cancelled Visits',
    subtitle: 'Cancelled by Client',
    icon: '❌',
    count: 10,
    percentage: 5
  }

];