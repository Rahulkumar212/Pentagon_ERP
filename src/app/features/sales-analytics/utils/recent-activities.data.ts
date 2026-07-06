export interface RecentActivity {

  icon: string;

  title: string;

  description: string;

  time: string;

}

export const RECENT_ACTIVITIES: RecentActivity[] = [

  {
    icon: '🏢',
    title: 'New Organization Added',
    description: 'ABC Public School has been registered in CRM.',
    time: '10 min ago'
  },

  {
    icon: '🏫',
    title: 'Institution Visit Completed',
    description: 'Sales Executive Rahul Sharma completed the scheduled visit.',
    time: '35 min ago'
  },

  {
    icon: '📄',
    title: 'Quotation Sent',
    description: 'Proposal shared with Sunrise University.',
    time: '1 hour ago'
  },

  {
    icon: '🧾',
    title: 'Billing Order Generated',
    description: 'Invoice INV-2026-021 has been generated successfully.',
    time: '2 hours ago'
  },

  {
    icon: '💰',
    title: 'Payment Received',
    description: '₹8,40,000 received from Green Valley College.',
    time: '3 hours ago'
  },

  {
    icon: '👨‍💼',
    title: 'Executive Assigned',
    description: 'Neha Gupta assigned to Modern Institute.',
    time: '5 hours ago'
  },

  {
    icon: '📈',
    title: 'Monthly Target Updated',
    description: 'Sales target revised for North Zone.',
    time: 'Yesterday'
  }

];