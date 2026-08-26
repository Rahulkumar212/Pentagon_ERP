// =====================================================
// TEAM PERFORMANCE TYPE
// =====================================================

export interface TeamPerformanceItem {
  employeeName: string;
  designation: string;
  target: number;
  achieved: number;
  achievementPercentage: number;
  status: 'on-track' | 'excellent' | 'at-risk';
}


// =====================================================
// SALES DIRECTOR TEAM PERFORMANCE DATA
// =====================================================

export const SALES_DIRECTOR_TEAM_PERFORMANCE: TeamPerformanceItem[] = [
  {
    employeeName: 'Amit Sharma',
    designation: 'Senior Sales Manager',
    target: 12000000,
    achieved: 10800000,
    achievementPercentage: 90,
    status: 'on-track',
  },

  {
    employeeName: 'Priya Verma',
    designation: 'Sales Manager',
    target: 10000000,
    achieved: 11200000,
    achievementPercentage: 112,
    status: 'excellent',
  },

  {
    employeeName: 'Rahul Mehta',
    designation: 'Sales Executive',
    target: 8000000,
    achieved: 6800000,
    achievementPercentage: 85,
    status: 'on-track',
  },

  {
    employeeName: 'Neha Kapoor',
    designation: 'Sales Executive',
    target: 7500000,
    achieved: 5100000,
    achievementPercentage: 68,
    status: 'at-risk',
  },

  {
    employeeName: 'Vikas Gupta',
    designation: 'Business Development Manager',
    target: 9000000,
    achieved: 9600000,
    achievementPercentage: 107,
    status: 'excellent',
  },
];