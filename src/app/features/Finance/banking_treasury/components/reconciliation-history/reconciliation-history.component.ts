import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface ReconciliationHistory {

  id: number;

  bank: string;

  account: string;

  statementDate: string;

  uploadedBy: string;

  transactions: number;

  matched: number;

  unmatched: number;

  variance: number;

  status: string;

}

@Component({
  selector: 'app-reconciliation-history',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reconciliation-history.component.html'
})
export class ReconciliationHistoryComponent {

  history = signal<ReconciliationHistory[]>([

    {

      id: 1,

      bank: 'HDFC Bank',

      account: 'XXXX-4587',

      statementDate: '31 Jul 2026',

      uploadedBy: 'Rahul',

      transactions: 486,

      matched: 474,

      unmatched: 12,

      variance: 18500,

      status: 'Completed'

    },

    {

      id: 2,

      bank: 'ICICI Bank',

      account: 'XXXX-8721',

      statementDate: '31 Jul 2026',

      uploadedBy: 'Finance Team',

      transactions: 392,

      matched: 381,

      unmatched: 11,

      variance: 9500,

      status: 'Pending Review'

    },

    {

      id: 3,

      bank: 'Axis Bank',

      account: 'XXXX-1134',

      statementDate: '31 Jul 2026',

      uploadedBy: 'Accounts',

      transactions: 214,

      matched: 214,

      unmatched: 0,

      variance: 0,

      status: 'Completed'

    },

    {

      id: 4,

      bank: 'SBI',

      account: 'XXXX-7654',

      statementDate: '31 Jul 2026',

      uploadedBy: 'Finance Team',

      transactions: 518,

      matched: 501,

      unmatched: 17,

      variance: 31200,

      status: 'Exception'

    }

  ]);

  view(row: ReconciliationHistory): void {

    console.log(row);

  }

}