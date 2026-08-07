import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

export type TreasuryTab =
  | 'Dashboard'
  | 'Accounts'
  | 'Reconciliation'
  | 'Payments'
  | 'Statements';

@Component({
  selector: 'app-treasury-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './treasury-header.component.html'
})
export class TreasuryHeaderComponent {

  @Output()
  bankChanged = new EventEmitter<string>();

  @Output()
  tabChanged = new EventEmitter<TreasuryTab>();

  banks = [
    'All Banks',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'SBI',
    'PNB'
  ];

  tabs: TreasuryTab[] = [
    'Dashboard',
    'Accounts',
    'Reconciliation',
    'Payments',
    'Statements'
  ];

  selectedBank = 'All Banks';

  selectedTab: TreasuryTab = 'Dashboard';

  onBankChange(): void {

    this.bankChanged.emit(this.selectedBank);

  }

  changeTab(tab: TreasuryTab): void {

    this.selectedTab = tab;

    this.tabChanged.emit(tab);

  }

}