import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accounting-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './accounting-header.component.html'
})
export class AccountingHeaderComponent {

  @Input()
  activeTab!: 'accounts' | 'journal' | 'ledger' | 'trialBalance';

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

}