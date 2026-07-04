export interface Asset {

  assetId: string;

  name: string;

  category: string;

  assignedDate: string;

  condition: string;

  status: string;

}

export const ASSET_DATA: Asset[] = [

  {
    assetId: 'AST-1001',
    name: 'Dell Latitude 7440',
    category: 'Laptop',
    assignedDate: '10 Jan 2026',
    condition: 'Excellent',
    status: 'Assigned'
  },

  {
    assetId: 'AST-1002',
    name: 'Apple iPhone 15',
    category: 'Mobile',
    assignedDate: '12 Feb 2026',
    condition: 'Good',
    status: 'Assigned'
  },

  {
    assetId: 'AST-1003',
    name: 'Logitech MX Keys',
    category: 'Keyboard',
    assignedDate: '18 Mar 2026',
    condition: 'Excellent',
    status: 'Assigned'
  },

  {
    assetId: 'AST-1004',
    name: 'Dell 27" Monitor',
    category: 'Monitor',
    assignedDate: '25 Mar 2026',
    condition: 'Good',
    status: 'Maintenance'
  },

  {
    assetId: 'AST-1005',
    name: 'Noise Cancelling Headset',
    category: 'Headset',
    assignedDate: '02 Apr 2026',
    condition: 'Excellent',
    status: 'Assigned'
  },

  {
    assetId: 'AST-1006',
    name: 'Access Card',
    category: 'Security',
    assignedDate: '01 Jan 2026',
    condition: 'Returned',
    status: 'Returned'
  }

];