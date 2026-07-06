export interface DepartmentKRA {

  id: number;

  name: string;

  designation: string;

  avatar: string;

  department: string;

  kra: string;

  target: string;

  progress: number;

  rating: number;

}

export const KRA_DATA: DepartmentKRA[] = [

  {
    id: 1,
    name: 'Aanya Sharma',
    designation: 'Senior Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=32',
    department: 'System Stability',
    kra: 'Achieve 99.9% API Uptime',
    target: '99.9% availability across all client web portals',
    progress: 95,
    rating: 5
  },

  {
    id: 2,
    name: 'Aanya Sharma',
    designation: 'Senior Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=47',
    department: 'Frontend Upgrade',
    kra: 'Complete Migration to React 19',
    target: 'Zero regression build and full bundle optimization',
    progress: 80,
    rating: 4
  },

  {
    id: 3,
    name: 'Kabir Malhotra',
    designation: 'Lead UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=15',
    department: 'Design Refactoring',
    kra: 'Overhaul Client Billing Dashboard',
    target: 'Reduce checkout complaints by 25%',
    progress: 100,
    rating: 5
  },

  {
    id: 4,
    name: 'Diya Sen',
    designation: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=49',
    department: 'Process Automation',
    kra: 'Automate Onboarding E-Forms',
    target: 'Implement 100% paperless e-sign workflow',
    progress: 40,
    rating: 3
  },

  {
    id: 5,
    name: 'Rahul Sharma',
    designation: 'Sales Executive',
    avatar: 'https://i.pravatar.cc/150?img=11',
    department: 'Lead Generation',
    kra: 'Acquire 50 New Institutions',
    target: 'Generate 50 qualified institutional leads',
    progress: 72,
    rating: 4
  },

  {
    id: 6,
    name: 'Neha Gupta',
    designation: 'Sales Executive',
    avatar: 'https://i.pravatar.cc/150?img=5',
    department: 'Customer Relationship',
    kra: 'Increase Client Retention',
    target: 'Maintain 95% annual customer retention',
    progress: 91,
    rating: 5
  },

  {
    id: 7,
    name: 'Arjun Patel',
    designation: 'Operations Manager',
    avatar: 'https://i.pravatar.cc/150?img=12',
    department: 'Operations Excellence',
    kra: 'Reduce Delivery Delays',
    target: 'Maintain deliveries within SLA',
    progress: 86,
    rating: 4
  },

  {
    id: 8,
    name: 'Meera Nair',
    designation: 'Finance Manager',
    avatar: 'https://i.pravatar.cc/150?img=25',
    department: 'Financial Compliance',
    kra: 'Invoice Processing Accuracy',
    target: 'Achieve 99% invoice accuracy',
    progress: 94,
    rating: 5
  }

];