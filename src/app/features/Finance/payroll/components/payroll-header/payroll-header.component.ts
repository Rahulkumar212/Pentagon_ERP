import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';

export type PayrollTab =
  | 'register'
  | 'expense'
  | 'liabilities'
  | 'journal'
  | 'payments'
  | 'history'
  | 'reconciliation';

interface PayrollTabItem {
  id: PayrollTab;
  label: string;
}

@Component({
  selector: 'app-payroll-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './payroll-header.component.html'
})
export class PayrollHeaderComponent {

  // =====================================================
  // EVENTS
  // =====================================================

  @Output()
  bankChanged = new EventEmitter<string>();

  @Output()
  tabChanged = new EventEmitter<PayrollTab>();


  // =====================================================
  // ACTIVE TAB
  // =====================================================

  activeTab: PayrollTab = 'register';


  // =====================================================
  // PAYROLL TABS
  // =====================================================

  readonly tabs: PayrollTabItem[] = [

    {
      id: 'register',
      label: 'Payroll Register'
    },

    {
      id: 'expense',
      label: 'Salary Expense'
    },

    {
      id: 'liabilities',
      label: 'Liabilities'
    },

    {
      id: 'journal',
      label: 'Payroll Journal'
    },

    {
      id: 'payments',
      label: 'Salary Payment'
    },

    {
      id: 'history',
      label: 'Payment History'
    },

    {
      id: 'reconciliation',
      label: 'Reconciliation'
    }

  ];


  // =====================================================
  // BANK
  // =====================================================

  selectedBank = 'HDFC Corporate Checking';

  readonly banks = [

    'HDFC Corporate Checking',

    'ICICI Payroll Account',

    'Axis Salary Disbursement'

  ];


  // =====================================================
  // BANK CHANGE
  // =====================================================

  onBankChange(): void {

    this.bankChanged.emit(
      this.selectedBank
    );

  }


  // =====================================================
  // TAB CHANGE
  // =====================================================

  selectTab(tab: PayrollTab): void {

    this.activeTab = tab;

    this.tabChanged.emit(tab);

  }

}