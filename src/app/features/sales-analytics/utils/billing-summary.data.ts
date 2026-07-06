export interface BillingSummary {

  client: string;

  invoice: string;

  amount: string;

  status: 'Paid' | 'Pending' | 'Overdue';

}

export const BILLING_SUMMARY_DATA: BillingSummary[] = [

  {
    client: 'ABC Public School',
    invoice: 'INV-2026-001',
    amount: '₹12,50,000',
    status: 'Paid'
  },

  {
    client: 'Sunrise University',
    invoice: 'INV-2026-014',
    amount: '₹8,40,000',
    status: 'Pending'
  },

  {
    client: 'Green Valley College',
    invoice: 'INV-2026-028',
    amount: '₹5,75,000',
    status: 'Paid'
  },

  {
    client: 'Modern Institute',
    invoice: 'INV-2026-041',
    amount: '₹3,20,000',
    status: 'Overdue'
  },

  {
    client: 'City International School',
    invoice: 'INV-2026-052',
    amount: '₹9,80,000',
    status: 'Pending'
  }

];