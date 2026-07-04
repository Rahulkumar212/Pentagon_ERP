import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { PAYROLL_DATA } from '../../utils/payroll-data';

interface EmployeePayroll {

  id: number;

  employeeCode: string;

  name: string;

  designation: string;

  avatar: string;

  bank: string;

  accountNumber: string;

  pan: string;

  aadhaar: string;

  basic: number;

  hra: number;

  specialAllowance: number;

  epf: number;

  professionalTax: number;

  incomeTax: number;

}

@Component({
  selector: 'app-payroll-summary-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payroll-summary-card.component.html'
})
export class PayrollSummaryCardComponent {

  employees: EmployeePayroll[] = PAYROLL_DATA;

  selectedEmployee =
    this.employees[0];

  selectEmployee(
    employee: EmployeePayroll
  ): void {

    this.selectedEmployee = employee;

  }

  get grossSalary(): number {

    return (

      this.selectedEmployee.basic +

      this.selectedEmployee.hra +

      this.selectedEmployee.specialAllowance

    );

  }

  get totalDeduction(): number {

    return (

      this.selectedEmployee.epf +

      this.selectedEmployee.professionalTax +

      this.selectedEmployee.incomeTax

    );

  }

  get netSalary(): number {

    return (

      this.grossSalary -

      this.totalDeduction

    );

  }

  exportPayslip(): void {

    alert(

      `Payslip exported for ${this.selectedEmployee.name}`

    );

  }

}