import {
  DashboardCard,
  Activity,
  Task
} from '../models/dashboard.type';

export const ROLE_DASHBOARD_CARDS: Record<string, DashboardCard[]> = {

  SUPER_ADMIN: [
    { title: 'Total Employees', value: 124, icon: '👥', change: '+12%' },
    { title: 'Projects', value: 18, icon: '📁', change: '+5%' },
    { title: 'Revenue', value: '₹8.5L', icon: '💰', change: '+18%' },
    { title: 'Pending Approvals', value: 7, icon: '✅', change: '-2%' }
  ],

  DIRECTOR: [
    { title: 'Company Revenue', value: '₹25L', icon: '💰', change: '+15%' },
    { title: 'Departments', value: 8, icon: '🏢', change: '+1%' },
    { title: 'Active Projects', value: 22, icon: '📊', change: '+8%' },
    { title: 'Approvals', value: 15, icon: '✔️', change: '+4%' }
  ],

  MANAGER: [
    { title: 'Team Members', value: 24, icon: '👨‍💼', change: '+3%' },
    { title: 'Open Tasks', value: 18, icon: '📋', change: '+5%' },
    { title: 'Completed Tasks', value: 85, icon: '✅', change: '+11%' },
    { title: 'Pending Reviews', value: 6, icon: '📝', change: '-1%' }
  ],

  EMPLOYEE: [
    { title: 'Assigned Tasks', value: 8, icon: '📋', change: '+2%' },
    { title: 'Completed Tasks', value: 15, icon: '✅', change: '+5%' },
    { title: 'Attendance', value: '96%', icon: '⏰', change: '+1%' },
    { title: 'Leaves', value: 2, icon: '🏖️', change: '0%' }
  ],

  HR_MANAGER: [
    { title: 'Employees', value: 124, icon: '👥', change: '+12%' },
    { title: 'Present Today', value: 102, icon: '🟢', change: '+4%' },
    { title: 'Leave Requests', value: 12, icon: '📄', change: '+2%' },
    { title: 'New Joiners', value: 5, icon: '🎉', change: '+1%' }
  ],

  HR_EXECUTIVE: [
    { title: 'Attendance', value: 102, icon: '🕒', change: '+2%' },
    { title: 'Leave Requests', value: 8, icon: '📄', change: '+1%' },
    { title: 'Interviews', value: 6, icon: '🎤', change: '+3%' },
    { title: 'New Hires', value: 3, icon: '👨‍💼', change: '+1%' }
  ],

  FINANCE_MANAGER: [
    { title: 'Invoices', value: 320, icon: '🧾', change: '+6%' },
    { title: 'Collections', value: '₹18L', icon: '💵', change: '+14%' },
    { title: 'Pending Payments', value: '₹3.2L', icon: '⚠️', change: '-5%' },
    { title: 'Expenses', value: '₹4.8L', icon: '📊', change: '+3%' }
  ],

  ACCOUNTANT: [
    { title: 'Invoices', value: 120, icon: '🧾', change: '+5%' },
    { title: 'Receipts', value: 86, icon: '💳', change: '+4%' },
    { title: 'Expenses', value: '₹2.4L', icon: '📉', change: '+2%' },
    { title: 'Ledger Entries', value: 542, icon: '📚', change: '+8%' }
  ],

  SALES_MANAGER: [
    { title: 'Leads', value: 250, icon: '🎯', change: '+15%' },
    { title: 'Deals Closed', value: 42, icon: '🤝', change: '+10%' },
    { title: 'Revenue', value: '₹12L', icon: '💰', change: '+20%' },
    { title: 'Follow Ups', value: 18, icon: '📞', change: '+8%' }
  ],

  SALES_EXECUTIVE: [
    { title: 'Leads Assigned', value: 45, icon: '🎯', change: '+6%' },
    { title: 'Meetings', value: 12, icon: '📅', change: '+4%' },
    { title: 'Conversions', value: 9, icon: '🤝', change: '+3%' },
    { title: 'Follow Ups', value: 14, icon: '📞', change: '+2%' }
  ],

  GEM_MANAGER: [
    { title: 'Active Tenders', value: 35, icon: '📑', change: '+8%' },
    { title: 'Submitted Bids', value: 18, icon: '📨', change: '+4%' },
    { title: 'Won Tenders', value: 7, icon: '🏆', change: '+2%' },
    { title: 'Tender Value', value: '₹35L', icon: '💰', change: '+12%' }
  ],

  GEM_EXECUTIVE: [
    { title: 'Draft Tenders', value: 12, icon: '📝', change: '+3%' },
    { title: 'Submitted', value: 9, icon: '📨', change: '+2%' },
    { title: 'Clarifications', value: 5, icon: '❓', change: '+1%' },
    { title: 'Follow Ups', value: 8, icon: '📞', change: '+4%' }
  ],

  SCM_MANAGER: [
    { title: 'Suppliers', value: 48, icon: '🚚', change: '+4%' },
    { title: 'Purchase Orders', value: 76, icon: '📦', change: '+6%' },
    { title: 'Inventory Value', value: '₹15L', icon: '🏭', change: '+5%' },
    { title: 'Deliveries', value: 32, icon: '🚛', change: '+3%' }
  ],

  SCM_EXECUTIVE: [
    { title: 'Orders', value: 24, icon: '📦', change: '+2%' },
    { title: 'Vendors', value: 18, icon: '🏢', change: '+1%' },
    { title: 'Stock Updates', value: 14, icon: '📊', change: '+3%' },
    { title: 'Dispatches', value: 11, icon: '🚛', change: '+2%' }
  ],

  OPERATIONS_MANAGER: [
    { title: 'Active Jobs', value: 42, icon: '⚙️', change: '+7%' },
    { title: 'Completed Jobs', value: 128, icon: '✅', change: '+10%' },
    { title: 'Teams', value: 12, icon: '👷', change: '+1%' },
    { title: 'Service Requests', value: 21, icon: '🛠️', change: '+5%' }
  ],

  OPERATIONS_EXECUTIVE: [
    { title: 'Assigned Jobs', value: 14, icon: '⚙️', change: '+2%' },
    { title: 'Completed Today', value: 5, icon: '✅', change: '+1%' },
    { title: 'Pending Requests', value: 3, icon: '📌', change: '-1%' },
    { title: 'Field Visits', value: 7, icon: '🚗', change: '+3%' }
  ]
};

export const ROLE_ACTIVITIES: Record<string, Activity[]> = {

  SUPER_ADMIN: [
    {
      id: 1,
      title: 'New Employee Added',
      user: 'HR Team',
      time: '10 mins ago'
    },
    {
      id: 2,
      title: 'Project Approved',
      user: 'Director',
      time: '25 mins ago'
    }
  ],

  HR_MANAGER: [
    {
      id: 1,
      title: 'Leave Request Approved',
      user: 'Neha Gupta',
      time: '15 mins ago'
    },
    {
      id: 2,
      title: 'New Employee Joined',
      user: 'Rahul Kumar',
      time: '1 hour ago'
    }
  ],

  SALES_MANAGER: [
    {
      id: 1,
      title: 'New Lead Created',
      user: 'Sales Team',
      time: '20 mins ago'
    }
  ],

  FINANCE_MANAGER: [
    {
      id: 1,
      title: 'Invoice Generated',
      user: 'Finance Team',
      time: '30 mins ago'
    }
  ],

  EMPLOYEE: [
    {
      id: 1,
      title: 'Task Assigned',
      user: 'Manager',
      time: '5 mins ago'
    }
  ]
};

export const ROLE_TASKS: Record<string, Task[]> = {

  SUPER_ADMIN: [
    {
      id: 1,
      taskName: 'Review Approvals',
      status: 'Pending'
    }
  ],

  HR_MANAGER: [
    {
      id: 1,
      taskName: 'Employee Onboarding',
      status: 'In Progress'
    },
    {
      id: 2,
      taskName: 'Verify Attendance',
      status: 'Pending'
    }
  ],

  SALES_MANAGER: [
    {
      id: 1,
      taskName: 'Client Follow Up',
      status: 'Pending'
    }
  ],

  FINANCE_MANAGER: [
    {
      id: 1,
      taskName: 'Payroll Processing',
      status: 'In Progress'
    }
  ],

  EMPLOYEE: [
    {
      id: 1,
      taskName: 'Complete Daily Report',
      status: 'Pending'
    }
  ]
};