
export type PermissionAction =
  | 'view'
  | 'create'
  | 'edit'
  | 'approve'
  | 'reject'
  | 'export';

export interface PermissionModule {
  id: string;
  moduleName: string;
  description: string;
  icon: string;
  permissions: Record<PermissionAction, boolean>;
}

export const PERMISSION_ACTIONS: {
  key: PermissionAction;
  label: string;
}[] = [
  {
    key: 'view',
    label: 'View',
  },
  {
    key: 'create',
    label: 'Create',
  },
  {
    key: 'edit',
    label: 'Edit',
  },
  {
    key: 'approve',
    label: 'Approve',
  },
  {
    key: 'reject',
    label: 'Reject',
  },
  {
    key: 'export',
    label: 'Export',
  },
];

export const PERMISSION_MODULES: PermissionModule[] = [
  {
    id: 'sales',
    moduleName: 'Sales & CRM',
    description: 'Manage customers, leads and sales activities.',
    icon: '📈',
    permissions: {
      view: true,
      create: true,
      edit: true,
      approve: true,
      reject: true,
      export: true,
    },
  },
  {
    id: 'orders',
    moduleName: 'Orders',
    description: 'View and manage sales orders.',
    icon: '📦',
    permissions: {
      view: true,
      create: true,
      edit: true,
      approve: true,
      reject: true,
      export: true,
    },
  },
  {
    id: 'finance',
    moduleName: 'Finance',
    description: 'Access financial information and approvals.',
    icon: '💰',
    permissions: {
      view: true,
      create: false,
      edit: false,
      approve: true,
      reject: true,
      export: true,
    },
  },
  {
    id: 'hr',
    moduleName: 'Human Resources',
    description: 'Access employee and HR related information.',
    icon: '👥',
    permissions: {
      view: true,
      create: false,
      edit: false,
      approve: true,
      reject: true,
      export: false,
    },
  },
  {
    id: 'supply-chain',
    moduleName: 'Supply Chain',
    description: 'Monitor procurement and supply chain operations.',
    icon: '🚚',
    permissions: {
      view: true,
      create: false,
      edit: true,
      approve: true,
      reject: true,
      export: true,
    },
  },
  {
    id: 'reports',
    moduleName: 'Reports & Analytics',
    description: 'Access management reports and analytics.',
    icon: '📊',
    permissions: {
      view: true,
      create: false,
      edit: false,
      approve: false,
      reject: false,
      export: true,
    },
  },
];

