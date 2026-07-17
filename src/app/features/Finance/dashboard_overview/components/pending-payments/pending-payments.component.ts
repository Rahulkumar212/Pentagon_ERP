import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule,
  CurrencyPipe,
  DatePipe
} from '@angular/common';

interface PendingPayment {

  id: number;

  vendor: string;

  invoiceNo: string;

  dueDate: string;

  amount: number;

  priority: 'High' | 'Medium' | 'Low';

}

@Component({
  selector: 'app-pending-payments',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl:
    './pending-payments.component.html'
})
export class PendingPaymentsComponent {

     @Input() payments: any[] = [];

  pendingPayments: PendingPayment[] = [

    {

      id: 1,

      vendor: 'ABC Technologies',

      invoiceNo: 'INV-2026-101',

      dueDate: '2026-07-18',

      amount: 125000,

      priority: 'High'

    },

    {

      id: 2,

      vendor: 'Office Supplies Ltd.',

      invoiceNo: 'INV-2026-102',

      dueDate: '2026-07-20',

      amount: 42000,

      priority: 'Medium'

    },

    {

      id: 3,

      vendor: 'Cloud Hosting',

      invoiceNo: 'INV-2026-103',

      dueDate: '2026-07-22',

      amount: 78000,

      priority: 'High'

    },

    {

      id: 4,

      vendor: 'Marketing Agency',

      invoiceNo: 'INV-2026-104',

      dueDate: '2026-07-25',

      amount: 56000,

      priority: 'Low'

    }

  ];

}