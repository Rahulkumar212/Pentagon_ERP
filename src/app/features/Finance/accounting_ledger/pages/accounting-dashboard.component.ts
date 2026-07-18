import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AccountingHeaderComponent } from '../components/accounting-header/accounting-header.component';
import { ChartOfAccountsComponent } from '../components/chart-of-accounts-table/chart-of-accounts-table.component';
import { JournalTableComponent } from '../components/journal-table/journal-table.component';
import { LedgerTableComponent } from '../components/ledger-table/ledger-table.component';
import { TrialBalanceTableComponent } from '../components/trial-balance-table/trial-balance-table.component';

export type AccountingTab =
  | 'accounts'
  | 'journal'
  | 'ledger'
  | 'trialBalance';

@Component({
  selector: 'app-accounting-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AccountingHeaderComponent,
    ChartOfAccountsComponent,
    JournalTableComponent,
    LedgerTableComponent,
    TrialBalanceTableComponent
  ],
  templateUrl: './accounting-dashboard.component.html'
})
export class AccountingDashboardComponent {

  activeTab: AccountingTab = 'accounts';

  setTab(tab: AccountingTab): void {

    this.activeTab = tab;

  }

}