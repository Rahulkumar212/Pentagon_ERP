import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PayrollHeaderComponent } from '../components/payroll-header/payroll-header.component';
import { PayrollSummaryCardsComponent } from '../components/payroll-summary-cards/payroll-summary-cards.component';
import { PayrollRegisterComponent } from '../components/payroll-register/payroll-register.component';
import { SalaryDisbursementModalComponent } from '../forms/salary-disbursement-modal.component';
import { EmployeePayslipModalComponent } from '../forms/employee-payslip-modal.component';


@Component({
  selector: 'app-payroll-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PayrollHeaderComponent,
    PayrollSummaryCardsComponent,
    PayrollRegisterComponent,
    SalaryDisbursementModalComponent,
    EmployeePayslipModalComponent
  ],
  templateUrl: './payroll-dashboard.component.html'
})
export class PayrollDashboardComponent {

  showSalaryDisbursementModal = false;

  showPayslipModal = false;

  selectedBank = '';

  onBankChanged(bank: string): void {

    this.selectedBank = bank;

    console.log('Selected Bank :', bank);

  }

  openSalaryDisbursementModal(): void {

    this.showSalaryDisbursementModal = true;

  }

  closeSalaryDisbursementModal(): void {

    this.showSalaryDisbursementModal = false;

  }

  openPayslipModal(): void {

    this.showPayslipModal = true;

  }

  closePayslipModal(): void {

    this.showPayslipModal = false;

  }

}