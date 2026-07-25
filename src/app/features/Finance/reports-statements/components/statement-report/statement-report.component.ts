import { CommonModule } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';

interface StatementItem {

  name: string;

  amount: number;

}

@Component({
  selector: 'app-statement-report',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './statement-report.component.html'
})
export class StatementReportComponent {

  readonly revenue = signal<StatementItem[]>([

    {
      name: 'Product Sales & Software Licensing',
      amount: 58135
    },

    {
      name: 'Professional Consulting & Implementation',
      amount: 24915
    }

  ]);

  readonly expenses = signal<StatementItem[]>([

    {
      name: 'Employee Compensation (Salaries & Benefits)',
      amount: 745000
    },

    {
      name: 'Cloud Hosting (AWS)',
      amount: 2450
    },

    {
      name: 'Office Space Lease Rentals',
      amount: 12000
    },

    {
      name: 'General Administrative Expenses',
      amount: 3200
    },

    {
      name: 'Depreciation & Amortization',
      amount: 599000
    },

    {
      name: 'Bank Charges',
      amount: 9650
    },

    {
      name: 'Marketing & Advertising',
      amount: 98000
    }

  ]);

  get totalRevenue(): number {

    return this.revenue()
      .reduce((sum, item) => sum + item.amount, 0);

  }

  get totalExpenses(): number {

    return this.expenses()
      .reduce((sum, item) => sum + item.amount, 0);

  }

  get netProfit(): number {

    return this.totalRevenue - this.totalExpenses;

  }

  exportExcel(): void {

    console.log('Export Excel');

  }

  exportPdf(): void {

    console.log('Export PDF');

  }

}