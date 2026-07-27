import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface BalanceItem {

  title: string;

  amount: number;

}

@Component({
  selector: 'app-balance-sheet',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './balance-sheet.component.html'
})
export class BalanceSheetComponent {

  readonly assets = signal<BalanceItem[]>([

    {
      title: 'Cash & Bank',
      amount: 4850000
    },

    {
      title: 'Accounts Receivable',
      amount: 1620000
    },

    {
      title: 'Inventory',
      amount: 2380000
    },

    {
      title: 'Fixed Assets',
      amount: 12450000
    }

  ]);

  readonly liabilities = signal<BalanceItem[]>([

    {
      title: 'Accounts Payable',
      amount: 1740000
    },

    {
      title: 'Bank Loan',
      amount: 5200000
    },

    {
      title: 'GST Payable',
      amount: 640000
    }

  ]);

  readonly equity = signal<BalanceItem[]>([

    {
      title: 'Share Capital',
      amount: 8000000
    },

    {
      title: 'Retained Earnings',
      amount: 5720000
    }

  ]);

  readonly totalAssets = computed(() =>

    this.assets()
      .reduce((sum, item) => sum + item.amount, 0)

  );

  readonly totalLiabilities = computed(() =>

    this.liabilities()
      .reduce((sum, item) => sum + item.amount, 0)

  );

  readonly totalEquity = computed(() =>

    this.equity()
      .reduce((sum, item) => sum + item.amount, 0)

  );

}