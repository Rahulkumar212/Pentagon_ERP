import {
  CommonModule
} from '@angular/common';

import {
  Component,
  signal
} from '@angular/core';

interface Asset {

  id: number;

  name: string;

  category: string;

  department: string;

  value: number;

  depreciation: number;

  status: string;

}

@Component({
  selector: 'app-assets-budget-center',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './assets-budget-center.component.html'
})
export class AssetsBudgetCenterComponent {

  assets = signal<Asset[]>([

    {

      id: 1,

      name: 'Dell PowerEdge Server',

      category: 'IT Infrastructure',

      department: 'Engineering',

      value: 1450000,

      depreciation: 18,

      status: 'Active'

    },

    {

      id: 2,

      name: 'Office Building',

      category: 'Property',

      department: 'Corporate',

      value: 28000000,

      depreciation: 5,

      status: 'Active'

    },

    {

      id: 3,

      name: 'Company Vehicles',

      category: 'Transport',

      department: 'Operations',

      value: 4200000,

      depreciation: 22,

      status: 'Maintenance'

    },

    {

      id: 4,

      name: 'Employee Laptops',

      category: 'IT Equipment',

      department: 'Engineering',

      value: 1850000,

      depreciation: 30,

      status: 'Active'

    },

    {

      id: 5,

      name: 'Warehouse Machinery',

      category: 'Manufacturing',

      department: 'SCM',

      value: 9600000,

      depreciation: 14,

      status: 'Active'

    }

  ]);

  viewAsset(asset: Asset): void {

    console.log(asset);

  }

}