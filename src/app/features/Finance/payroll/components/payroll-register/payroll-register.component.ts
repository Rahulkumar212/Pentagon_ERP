import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';

interface PayrollEmployee {

  id: number;

  initials: string;

  name: string;

  designation: string;

  department: string;

  grossSalary: number;

  tds: number;

  pf: number;

  netSalary: number;

  status: 'DISBURSED' | 'PENDING';

}

@Component({
  selector: 'app-payroll-register',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payroll-register.component.html'
})
export class PayrollRegisterComponent {

  @Output()
  disburseSalary = new EventEmitter<PayrollEmployee>();

  @Output()
  viewPayslip = new EventEmitter<PayrollEmployee>();

  employees = signal<PayrollEmployee[]>([

    {
      id: 1,
      initials: 'AS',
      name: 'Aarav Sharma',
      designation: 'Principal Engineer',
      department: 'Engineering',
      grossSalary: 180000,
      tds: 32000,
      pf: 12000,
      netSalary: 136000,
      status: 'DISBURSED'
    },

    {
      id: 2,
      initials: 'AI',
      name: 'Ananya Iyer',
      designation: 'VP of Finance',
      department: 'Finance',
      grossSalary: 220000,
      tds: 45000,
      pf: 12000,
      netSalary: 163000,
      status: 'DISBURSED'
    },

    {
      id: 3,
      initials: 'VP',
      name: 'Vihaan Patel',
      designation: 'Senior Product Manager',
      department: 'Product',
      grossSalary: 150000,
      tds: 24000,
      pf: 11000,
      netSalary: 115000,
      status: 'DISBURSED'
    },

    {
      id: 4,
      initials: 'MD',
      name: 'Meera Deshmukh',
      designation: 'HR Coordinator',
      department: 'Human Resources',
      grossSalary: 85000,
      tds: 9500,
      pf: 10000,
      netSalary: 65500,
      status: 'PENDING'
    },

    {
      id: 5,
      initials: 'KM',
      name: 'Kabir Mehta',
      designation: 'DevOps Engineer',
      department: 'Engineering',
      grossSalary: 110000,
      tds: 15000,
      pf: 11000,
      netSalary: 84000,
      status: 'PENDING'
    }

  ]);

  onDisburse(employee: PayrollEmployee): void {

    this.disburseSalary.emit(employee);

  }

  onPayslip(employee: PayrollEmployee): void {

    this.viewPayslip.emit(employee);

  }

}