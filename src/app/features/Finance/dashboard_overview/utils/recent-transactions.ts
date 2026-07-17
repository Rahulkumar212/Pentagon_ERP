export interface RecentTransaction {

  id: number;

  title: string;

  category: string;

  amount: number;

  type: 'Income' | 'Expense';

  date: string;

  status: 'Completed' | 'Pending';

}


export const RecentTransactions: RecentTransaction[] = [

  {
    id: 1,
    title: 'Client Payment',
    category: 'Sales',
    amount: 250000,
    type: 'Income',
    date: '2026-07-15',
    status: 'Completed'
  },

  {
    id: 2,
    title: 'Office Rent',
    category: 'Operations',
    amount: 45000,
    type: 'Expense',
    date: '2026-07-14',
    status: 'Completed'
  },

  {
    id: 3,
    title: 'Salary Payment',
    category: 'Payroll',
    amount: 320000,
    type: 'Expense',
    date: '2026-07-13',
    status: 'Completed'
  },

  {
    id: 4,
    title: 'Project Advance',
    category: 'Client',
    amount: 180000,
    type: 'Income',
    date: '2026-07-12',
    status: 'Pending'
  },

  {
    id: 5,
    title: 'Software Subscription',
    category: 'IT',
    amount: 12000,
    type: 'Expense',
    date: '2026-07-11',
    status: 'Completed'
  }

];