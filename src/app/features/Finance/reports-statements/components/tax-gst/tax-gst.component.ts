import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface TaxItem {

  title: string;

  amount: number;

}

@Component({
  selector: 'app-tax-gst',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tax-gst.component.html'
})
export class TaxGstComponent {

  readonly gstSummary = signal<TaxItem[]>([

    {
      title: 'GST Collected (Output GST)',
      amount: 1865000
    },

    {
      title: 'GST Paid (Input GST)',
      amount: 1210000
    }

  ]);

  readonly taxSummary = signal<TaxItem[]>([

    {
      title: 'TDS Deducted',
      amount: 245000
    },

    {
      title: 'Advance Tax Paid',
      amount: 410000
    },

    {
      title: 'Professional Tax',
      amount: 85000
    }

  ]);

  readonly filingStatus = signal([

    {
      name: 'GSTR-1',
      dueDate: '10 Aug 2026',
      status: 'Filed'
    },

    {
      name: 'GSTR-3B',
      dueDate: '20 Aug 2026',
      status: 'Pending'
    },

    {
      name: 'TDS Return',
      dueDate: '31 Jul 2026',
      status: 'Filed'
    }

  ]);

  readonly gstPayable = computed(() =>

    this.gstSummary()[0].amount -
    this.gstSummary()[1].amount

  );

  readonly totalTaxes = computed(() =>

    this.taxSummary()
      .reduce((sum, item) => sum + item.amount, 0)

  );

}