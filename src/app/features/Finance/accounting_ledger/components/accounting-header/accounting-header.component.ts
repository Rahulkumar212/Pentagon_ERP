import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounting-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './accounting-header.component.html'
})
export class AccountingHeaderComponent {

  fromDate = '2026-04-01';

toDate = '2027-03-31';

financialYear = 'FY 2026-27';

  @Input()
  activeTab!: 'accounts' | 'journal' | 'ledger' | 'trialBalance';

  @Output()
createAccount = new EventEmitter<void>();

@Output()
createJournal = new EventEmitter<void>();


  @Output()
  tabChange = new EventEmitter<
    'accounts' | 'journal' | 'ledger' | 'trialBalance'
  >();

  tabs = [

    {
      label: 'Chart Of Accounts',
      value: 'accounts'
    },

    {
      label: 'Journal',
      value: 'journal'
    },

    {
      label: 'Ledger',
      value: 'ledger'
    },

    {
      label: 'Trial Balance',
      value: 'trialBalance'
    }

  ] as const;

  setActiveTab(
    tab: 'accounts' | 'journal' | 'ledger' | 'trialBalance'
  ): void {

    this.tabChange.emit(tab);

  }

  updateFinancialYear(): void {

  const date = new Date(this.fromDate);

  const year = date.getFullYear();

  const month = date.getMonth() + 1;

  if (month >= 4) {

    this.financialYear = `FY ${year}-${(year + 1)
      .toString()
      .slice(-2)}`;

  } else {

    this.financialYear = `FY ${year - 1}-${year
      .toString()
      .slice(-2)}`;

  }

}

}