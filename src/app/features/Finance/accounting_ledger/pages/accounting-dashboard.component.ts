import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AccountingHeaderComponent } from '../components/accounting-header/accounting-header.component';
import { ChartOfAccountsComponent } from '../components/chart-of-accounts-table/chart-of-accounts-table.component';
import { JournalTableComponent } from '../components/journal-table/journal-table.component';
import { LedgerTableComponent } from '../components/ledger-table/ledger-table.component';
import { TrialBalanceTableComponent } from '../components/trial-balance-table/trial-balance-table.component';

import { CreateAccountModalComponent } from '../forms/create-account-modal/create-account-modal.component';
import { JournalEntryModalComponent } from '../forms/journal-entry-modal/journal-entry-modal.component';

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
    TrialBalanceTableComponent,

    CreateAccountModalComponent,
    JournalEntryModalComponent
  ],
  templateUrl: './accounting-dashboard.component.html'
})
export class AccountingDashboardComponent {

  activeTab: AccountingTab = 'accounts';

  showCreateAccountModal = false;

  showJournalEntryModal = false;

  setTab(tab: AccountingTab): void {

    this.activeTab = tab;

  }

  /* ==============================
        Create Account
  ============================== */

  openCreateAccountModal(): void {

    this.showCreateAccountModal = true;

  }

  closeCreateAccountModal(): void {

    this.showCreateAccountModal = false;

  }

  saveAccount(data: any): void {

    console.log('Account Created', data);

    this.showCreateAccountModal = false;

  }

  /* ==============================
        Journal Entry
  ============================== */

  openJournalEntryModal(): void {

    this.showJournalEntryModal = true;

  }

  closeJournalEntryModal(): void {

    this.showJournalEntryModal = false;

  }

  saveJournal(data: any): void {

    console.log('Journal Entry', data);

    this.showJournalEntryModal = false;

  }

}