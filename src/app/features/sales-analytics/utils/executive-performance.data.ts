export interface ExecutivePerformance {

  id: number;

  name: string;

  designation: string;

  avatar: string;

  visits: number;

  revenue: string;

  conversion: number;

  performance: number;

}

export const EXECUTIVE_PERFORMANCE_DATA: ExecutivePerformance[] = [

  {
    id: 1,
    name: 'Rahul Sharma',
    designation: 'Senior Sales Executive',
    avatar: 'https://i.pravatar.cc/150?img=11',
    visits: 48,
    revenue: '₹32 L',
    conversion: 91,
    performance: 95
  },

  {
    id: 2,
    name: 'Neha Gupta',
    designation: 'Sales Executive',
    avatar: 'https://i.pravatar.cc/150?img=5',
    visits: 42,
    revenue: '₹28 L',
    conversion: 86,
    performance: 89
  },

  {
    id: 3,
    name: 'Amit Verma',
    designation: 'Territory Manager',
    avatar: 'https://i.pravatar.cc/150?img=15',
    visits: 39,
    revenue: '₹25 L',
    conversion: 82,
    performance: 84
  },

  {
    id: 4,
    name: 'Priya Singh',
    designation: 'Sales Executive',
    avatar: 'https://i.pravatar.cc/150?img=32',
    visits: 35,
    revenue: '₹21 L',
    conversion: 78,
    performance: 81
  }

];