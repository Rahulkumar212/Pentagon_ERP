import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface CashAccount {

  bank: string;

  account: string;

  balance: number;

  available: number;

  reserved: number;

  lastUpdated: string;

}

@Component({
  selector: 'app-cash-position-summary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cash-position-summary.component.html'
})
export class CashPositionSummaryComponent {

  totalCash = signal(254850000);

  totalAvailable = signal(221340000);

  totalReserved = signal(33510000);

  accounts = signal<CashAccount[]>([

    {

      bank: 'HDFC Bank',

      account: 'Current Account',

      balance: 84250000,

      available: 78100000,

      reserved: 6150000,

      lastUpdated: 'Today 10:15 AM'

    },

    {

      bank: 'ICICI Bank',

      account: 'Salary Account',

      balance: 65300000,

      available: 60250000,

      reserved: 5050000,

      lastUpdated: 'Today 09:42 AM'

    },

    {

      bank: 'Axis Bank',

      account: 'Vendor Payments',

      balance: 45800000,

      available: 37200000,

      reserved: 8600000,

      lastUpdated: 'Today 10:05 AM'

    },

    {

      bank: 'SBI',

      account: 'Operations',

      balance: 59100000,

      available: 45790000,

      reserved: 13310000,

      lastUpdated: 'Today 09:58 AM'

    }

  ]);

}