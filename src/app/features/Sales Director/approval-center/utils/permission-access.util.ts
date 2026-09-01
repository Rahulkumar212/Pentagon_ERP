export type PermissionStatus =
  | 'allowed'
  | 'restricted';

export interface PermissionItem {
  id: string;
  module: string;
  description: string;

  view: boolean;
  create: boolean;
  edit: boolean;
  approve: boolean;
  delete: boolean;

  status: PermissionStatus;
}

export const SALES_DIRECTOR_PERMISSIONS: PermissionItem[] = [

  {
    id: 'PERM-001',
    module: 'Sales Orders',
    description: 'View and manage sales orders',

    view: true,
    create: true,
    edit: true,
    approve: true,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-002',
    module: 'Discount Approvals',
    description: 'Review and approve special discounts',

    view: true,
    create: false,
    edit: false,
    approve: true,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-003',
    module: 'Customer Management',
    description: 'View and manage customer accounts',

    view: true,
    create: true,
    edit: true,
    approve: false,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-004',
    module: 'Sales Pipeline',
    description: 'Monitor sales pipeline and opportunities',

    view: true,
    create: true,
    edit: true,
    approve: false,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-005',
    module: 'Pricing',
    description: 'Review strategic pricing decisions',

    view: true,
    create: false,
    edit: true,
    approve: true,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-006',
    module: 'Finance',
    description: 'Access finance-related information',

    view: true,
    create: false,
    edit: false,
    approve: false,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-007',
    module: 'HR',
    description: 'Access employee and HR information',

    view: true,
    create: false,
    edit: false,
    approve: false,
    delete: false,

    status: 'allowed'
  },

  {
    id: 'PERM-008',
    module: 'System Administration',
    description: 'Manage system configuration',

    view: false,
    create: false,
    edit: false,
    approve: false,
    delete: false,

    status: 'restricted'
  }

];