export interface DepartmentKRA {
  department: string;
  owner: string;
  kpi: string;
  target: string;
  achieved: string;
  progress: number;
}

export const KRA_DATA: DepartmentKRA[] = [
  {
    department: 'Sales & Marketing',
    owner: 'Rahul Sharma',
    kpi: 'Monthly Revenue',
    target: '₹50 Lakh',
    achieved: '₹44 Lakh',
    progress: 88
  },
  {
    department: 'Logistics',
    owner: 'Arjun Patel',
    kpi: 'On-Time Deliveries',
    target: '98%',
    achieved: '95%',
    progress: 95
  },
  {
    department: 'Finance',
    owner: 'Meera Nair',
    kpi: 'Invoice Processing',
    target: '500',
    achieved: '462',
    progress: 92
  },
  {
    department: 'HR',
    owner: 'Priya Iyer',
    kpi: 'Hiring Completion',
    target: '30 Employees',
    achieved: '24 Employees',
    progress: 80
  },
  {
    department: 'Operations',
    owner: 'Amit Verma',
    kpi: 'Task Completion',
    target: '150 Tasks',
    achieved: '137 Tasks',
    progress: 91
  },
  {
    department: 'SCM',
    owner: 'Karan Malhotra',
    kpi: 'Vendor Fulfillment',
    target: '97%',
    achieved: '94%',
    progress: 94
  },
  {
    department: 'GEM',
    owner: 'Sneha Kapoor',
    kpi: 'Tender Success',
    target: '25',
    achieved: '21',
    progress: 84
  },
  {
    department: 'Customer Support',
    owner: 'Neha Gupta',
    kpi: 'Ticket Resolution',
    target: '100%',
    achieved: '96%',
    progress: 96
  }
];