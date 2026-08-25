import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import {
  PayrollHeaderComponent,
  PayrollTab 
} from '../components/payroll-header/payroll-header.component';

import { PayrollRegisterComponent }
  from '../components/payroll-register/payroll-register.component';

import { SalaryExpenseComponent }
  from '../components/salary-expense/salary-expense.component';

import { PayrollLiabilitiesComponent }
  from '../components/payroll-liabilities/payroll-liabilities.component';

import { PayrollJournalComponent }
  from '../components/payroll-journal/payroll-journal.component';

import { SalaryPaymentComponent }
  from '../components/salary-payment/salary-payment.component';

import { PaymentHistoryComponent }
  from '../components/payment-history/payment-history.component';

import { PayrollReconciliationComponent }
  from '../components/payroll-reconciliation/payroll-reconciliation.component';

import { SalaryDisbursementModalComponent }
  from '../forms/salary-disbursement-modal.component';

import { EmployeePayslipModalComponent }
  from '../forms/employee-payslip-modal.component';


@Component({
  selector: 'app-payroll-dashboard',

  standalone: true,

  imports: [

    CommonModule,

    // Header
    PayrollHeaderComponent,

    // Payroll Components
    PayrollRegisterComponent,
    SalaryExpenseComponent,
    PayrollLiabilitiesComponent,
    PayrollJournalComponent,
    SalaryPaymentComponent,
    PaymentHistoryComponent,
    PayrollReconciliationComponent,

    // Modals
    SalaryDisbursementModalComponent,
    EmployeePayslipModalComponent

  ],

  templateUrl: './payroll-dashboard.component.html'
})
export class PayrollDashboardComponent {

  // =====================================================
  // ACTIVE TAB
  // =====================================================

  readonly activeTab = signal<PayrollTab>('register');


  // =====================================================
  // MODALS
  // =====================================================

  showSalaryDisbursementModal = false;

  showPayslipModal = false;


  // =====================================================
  // SELECTED BANK
  // =====================================================

  selectedBank = '';


  // =====================================================
  // TAB CHANGE
  // =====================================================

  onTabChanged(tab: PayrollTab): void {

    this.activeTab.set(tab);

  }


  // =====================================================
  // BANK CHANGE
  // =====================================================

  onBankChanged(bank: string): void {

    this.selectedBank = bank;

    console.log(
      'Selected Bank:',
      bank
    );

  }


  // =====================================================
  // SALARY DISBURSEMENT MODAL
  // =====================================================

  openSalaryDisbursementModal(): void {

    this.showSalaryDisbursementModal = true;

  }


  closeSalaryDisbursementModal(): void {

    this.showSalaryDisbursementModal = false;

  }


  // =====================================================
  // PAYSLIP MODAL
  // =====================================================

  openPayslipModal(): void {

    this.showPayslipModal = true;

  }


  closePayslipModal(): void {

    this.showPayslipModal = false;

  }

}