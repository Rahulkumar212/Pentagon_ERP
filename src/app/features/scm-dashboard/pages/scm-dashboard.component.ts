import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCardsComponent } from '../../../shared/components/cards/task-cards.component';
import { ScmOrderBoardComponent } from '../../../shared/components/board/scm-order-board.component';

@Component({
  selector: 'app-scm-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardsComponent,
    ScmOrderBoardComponent
  ],
  templateUrl: './scm-dashboard.component.html'
})
export class ScmDashboardComponent {

  cards = [
    {
      title: 'ACTIVE SUPPLY ORDERS',
      value: 2,
      description: 'Total won opportunities in pipeline',
      color: 'text-gray-500'
    },
    {
      title: 'APPROVED SCM VENDORS',
      value: '0 Vendors',
      description: 'Scorecard registries',
      color: 'text-green-600'
    },
    {
      title: 'TOTAL WAREHOUSE ITEMS',
      value: '0 Products',
      description: 'Across 4 branches',
      color: 'text-green-600'
    }
  ];

  orders = [

    {
      orderNo: 'PTF-ORD-10001',
      client: 'National Informatics Centre (NIC)',
      value: '₹85,00,000',

      progress: 40,

      status: 'WAREHOUSE_RECEIVED',

      stages: [
        'Confirmed',
        'Vendor Confirmed',
        'Warehouse',
        'Delivered',
        'Completed'
      ]
    },

    {
      orderNo: 'PTF-ORD-10002',
      client: 'Life Insurance Corporation (LIC)',
      value: '₹2,10,00,000',

      progress: 72,

      status: 'DELIVERED',

      stages: [
        'Confirmed',
        'Vendor Confirmed',
        'Warehouse',
        'Delivered',
        'Completed'
      ]
    }

  ];

}