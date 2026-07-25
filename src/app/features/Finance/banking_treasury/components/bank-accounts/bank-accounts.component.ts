import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface BankAccount {

  id: number;

  type: string;

  name: string;

  accountNo: string;

  balance: number;

}

@Component({
  selector: 'app-bank-accounts',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './bank-accounts.component.html'
})
export class BankAccountsComponent {

  banks = signal<BankAccount[]>([

    {
      id: 1,
      type: 'CHECKING',
      name: 'HDFC Corporate Checking',
      accountNo: '**** **** **** 8820',
      balance: 340800
    },

    {
      id: 2,
      type: 'CURRENT',
      name: 'ICICI Business Current',
      accountNo: '**** **** **** 4572',
      balance: 215900
    },

    {
      id: 3,
      type: 'TREASURY',
      name: 'SBI Treasury Account',
      accountNo: '**** **** **** 9914',
      balance: 152450
    }

  ]);

  selectedBank = signal(1);

  selectBank(id: number): void {

    this.selectedBank.set(id);

  }

}