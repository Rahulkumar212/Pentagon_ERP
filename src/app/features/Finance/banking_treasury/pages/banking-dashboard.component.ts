import { CommonModule } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';

import {
  TreasuryHeaderComponent,
  TreasuryTab
} from '../components/treasury-header/treasury-header.component';

import { BankAccountsComponent } from '../components/bank-accounts/bank-accounts.component';
import { ReconciliationCenterComponent } from '../components/reconciliation-center/reconciliation-center.component';

import { TreasuryDashboardCardsComponent } from '../components/treasury-dashboard-cards/treasury-dashboard-cards.component';
import { BankBalanceChartComponent } from '../components/bank-balance-chart/bank-balance-chart.component';
import { CashPositionSummaryComponent } from '../components/cash-position-summary/cash-position-summary.component';

import { StatementUploadComponent } from '../components/statement-upload/statement-upload.component';
import { ReconciliationHistoryComponent } from '../components/reconciliation-history/reconciliation-history.component';

import { PaymentApprovalTableComponent } from '../components/payment-approval-table/payment-approval-table.component';

@Component({
  selector: 'app-banking-dashboard',
  standalone: true,
  imports: [
    CommonModule,

    TreasuryHeaderComponent,

    BankAccountsComponent,
    ReconciliationCenterComponent,

    TreasuryDashboardCardsComponent,
    BankBalanceChartComponent,
    CashPositionSummaryComponent,

    StatementUploadComponent,
    ReconciliationHistoryComponent,

    PaymentApprovalTableComponent
  ],
  templateUrl: './banking-dashboard.component.html'
})
export class BankingDashboardComponent {

  readonly selectedBank =
    signal('All Banks');

  readonly selectedTab =
    signal<TreasuryTab>('Dashboard');

  onBankChanged(bank: string): void {

    this.selectedBank.set(bank);

    console.log('Selected Bank :', bank);

  }

  changeTab(tab: TreasuryTab): void {

    this.selectedTab.set(tab);

    console.log('Selected Tab :', tab);

  }

}