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

export interface PipelineStage {
  key: string;
  title: string;
  color: string;
  leads: PipelineLead[];
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    key: 'new',
    title: 'New Leads',
    color: 'blue',
    leads: [
      {
        id: 1,
        customerName: 'ABC Technologies',
        contactPerson: 'Rahul Sharma',
        value: 250000,
        priority: 'HOT',
        owner: 'Amit Kumar',
        lastActivity: 'Today'
      },
      {
        id: 2,
        customerName: 'Global Solutions',
        contactPerson: 'Ravi Singh',
        value: 180000,
        priority: 'WARM',
        owner: 'Priya Singh',
        lastActivity: 'Yesterday'
      }
    ]
  },

  {
    key: 'contacted',
    title: 'Contacted',
    color: 'purple',
    leads: [
      {
        id: 3,
        customerName: 'Techno India',
        contactPerson: 'Ankit Verma',
        value: 350000,
        priority: 'HOT',
        owner: 'Amit Kumar',
        lastActivity: '2 hours ago'
      }
    ]
  },

  {
    key: 'qualified',
    title: 'Qualified',
    color: 'orange',
    leads: [
      {
        id: 4,
        customerName: 'Digital Corp',
        contactPerson: 'Neha Gupta',
        value: 500000,
        priority: 'HOT',
        owner: 'Rahul Singh',
        lastActivity: 'Today'
      }
    ]
  },

  {
    key: 'proposal',
    title: 'Proposal Sent',
    color: 'yellow',
    leads: [
      {
        id: 5,
        customerName: 'Smart Industries',
        contactPerson: 'Vikas Jain',
        value: 750000,
        priority: 'WARM',
        owner: 'Priya Singh',
        lastActivity: 'Yesterday'
      }
    ]
  },

  {
    key: 'negotiation',
    title: 'Negotiation',
    color: 'pink',
    leads: [
      {
        id: 6,
        customerName: 'Future Systems',
        contactPerson: 'Sanjay Mehta',
        value: 900000,
        priority: 'HOT',
        owner: 'Amit Kumar',
        lastActivity: 'Today'
      }
    ]
  },

  {
    key: 'won',
    title: 'Won',
    color: 'green',
    leads: [
      {
        id: 7,
        customerName: 'Prime Enterprises',
        contactPerson: 'Arjun Kapoor',
        value: 1200000,
        priority: 'HOT',
        owner: 'Rahul Singh',
        lastActivity: '2 days ago'
      }
    ]
  }
];