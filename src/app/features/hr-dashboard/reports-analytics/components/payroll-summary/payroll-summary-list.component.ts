import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PayrollRecord {

  employeeId: string;

  employeeName: string;

  designation: string;

  grossSalary: string;

  deductions: string;

  netSalary: string;

}

@Component({
  selector: 'app-payroll-summary-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payroll-summary-list.component.html'
})
export class PayrollSummaryListComponent {

  payrolls: PayrollRecord[] = [

    {
      employeeId: 'EMP2024001',
      employeeName: 'Aanya Sharma',
      designation: 'Senior Software Engineer',
      grossSalary: '₹1,65,000',
      deductions: '₹23,300',
      netSalary: '₹1,41,700'
    },

    {
      employeeId: 'EMP2024002',
      employeeName: 'Kabir Malhotra',
      designation: 'Lead UX Designer',
      grossSalary: '₹1,45,000',
      deductions: '₹20,500',
      netSalary: '₹1,24,500'
    },

    {
      employeeId: 'EMP2024003',
      employeeName: 'Priya Iyer',
      designation: 'HR Specialist',
      grossSalary: '₹95,000',
      deductions: '₹13,500',
      netSalary: '₹81,500'
    },

    {
      employeeId: 'EMP2024004',
      employeeName: 'Rohan Deshmukh',
      designation: 'Senior Sales Director',
      grossSalary: '₹1,80,000',
      deductions: '₹25,400',
      netSalary: '₹1,54,600'
    },

    {
      employeeId: 'EMP2024005',
      employeeName: 'Diya Sen',
      designation: 'Software Engineer',
      grossSalary: '₹85,000',
      deductions: '₹12,100',
      netSalary: '₹72,900'
    },

    {
      employeeId: 'EMP2024006',
      employeeName: 'Vikram Joshi',
      designation: 'Product Manager',
      grossSalary: '₹1,55,000',
      deductions: '₹21,900',
      netSalary: '₹1,33,100'
    },

    {
      employeeId: 'EMP2024007',
      employeeName: 'Meera Patel',
      designation: 'Operations Lead',
      grossSalary: '₹1,10,000',
      deductions: '₹15,600',
      netSalary: '₹94,400'
    }

  ];

}