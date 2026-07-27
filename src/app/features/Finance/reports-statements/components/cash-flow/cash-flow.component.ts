import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface CashFlowItem {

  title: string;

  amount: number;

}

@Component({
  selector: 'app-cash-flow',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cash-flow.component.html'
})
export class CashFlowComponent {

  readonly operatingActivities = signal<CashFlowItem[]>([

    {
      title: 'Customer Receipts',
      amount: 8650000
    },

    {
      title: 'Vendor Payments',
      amount: -3180000
    },

    {
      title: 'Employee Salaries',
      amount: -1540000
    },

    {
      title: 'Tax Payments',
      amount: -420000
    }

  ]);

  readonly investingActivities = signal<CashFlowItem[]>([

    {
      title: 'Purchase of Equipment',
      amount: -1250000
    },

    {
      title: 'Sale of Machinery',
      amount: 480000
    }

  ]);

  readonly financingActivities = signal<CashFlowItem[]>([

    {
      title: 'Bank Loan Received',
      amount: 2800000
    },

    {
      title: 'Loan Repayment',
      amount: -940000
    },

    {
      title: 'Dividend Paid',
      amount: -350000
    }

  ]);

  readonly operatingTotal = computed(() =>

    this.operatingActivities()
      .reduce((sum, item) => sum + item.amount, 0)

  );

  readonly investingTotal = computed(() =>

    this.investingActivities()
      .reduce((sum, item) => sum + item.amount, 0)

  );

  readonly financingTotal = computed(() =>

    this.financingActivities()
      .reduce((sum, item) => sum + item.amount, 0)

  );

  readonly netCashFlow = computed(() =>

    this.operatingTotal() +
    this.investingTotal() +
    this.financingTotal()

  );

}