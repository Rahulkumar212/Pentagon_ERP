import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { TreasuryHeaderComponent } from '../components/treasury-header/treasury-header.component';
import { BankAccountsComponent } from '../components/bank-accounts/bank-accounts.component';
import { ReconciliationCenterComponent } from '../components/reconciliation-center/reconciliation-center.component';

@Component({
  selector: 'app-banking-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TreasuryHeaderComponent,
    BankAccountsComponent,
    ReconciliationCenterComponent
  ],
  templateUrl: './banking-dashboard.component.html'
})
export class BankingDashboardComponent {

  selectedBank = signal('HDFC Corporate Checking');

  onBankChanged(bank: string): void {

    this.selectedBank.set(bank);

    console.log('Selected Bank : ', bank);

  }

}