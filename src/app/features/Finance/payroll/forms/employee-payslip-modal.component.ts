import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-payslip-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-payslip-modal.component.html'
})
export class EmployeePayslipModalComponent {

  @Output()
  close = new EventEmitter<void>();

  payslip = {

    employee: 'Rahul Sharma',

    employeeId: 'EMP-1025',

    designation: 'Software Engineer',

    department: 'Finance',

    month: 'July 2026',

    bank: 'HDFC Bank',

    account: 'XXXXXX4589',

    earnings: [

      {
        name: 'Basic Salary',
        amount: 60000
      },

      {
        name: 'House Rent Allowance',
        amount: 12000
      },

      {
        name: 'Special Allowance',
        amount: 8000
      },

      {
        name: 'Medical Allowance',
        amount: 5000
      }

    ],

    deductions: [

      {
        name: 'Provident Fund',
        amount: 2500
      },

      {
        name: 'Professional Tax',
        amount: 200
      },

      {
        name: 'Income Tax',
        amount: 2300
      }

    ]

  };

  get grossSalary(): number {

    return this.payslip.earnings.reduce(

      (sum, item) => sum + item.amount,

      0

    );

  }

  get totalDeduction(): number {

    return this.payslip.deductions.reduce(

      (sum, item) => sum + item.amount,

      0

    );

  }

  get netSalary(): number {

    return this.grossSalary - this.totalDeduction;

  }

  closeModal(): void {

    this.close.emit();

  }

  download(): void {

    console.log('Download Payslip');

  }

}