import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  SalaryStructureComponent
} from '../components/salary-structure/salary-structure.component';

import {
  PayrollProcessingComponent
} from '../components/payroll-processing/payroll-processing.component';

import {
  PayrollStatusComponent
} from '../components/payroll-status/payroll-status.component';


// =====================================================
// TAB TYPE
// =====================================================

export type PayrollTabId =
  | 'overview'
  | 'salary-structure'
  | 'processing'
  | 'status';


// =====================================================
// TAB MODEL
// =====================================================

interface PayrollTab {

  id: PayrollTabId;

  label: string;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-payroll-dashboard',

  standalone: true,

  imports: [
    CommonModule,

    SalaryStructureComponent,

    PayrollProcessingComponent,

    PayrollStatusComponent
  ],

  templateUrl: './payroll-dashboard.component.html'
})
export class PayrollDashboardComponent {


  // =====================================================
  // ACTIVE TAB
  // =====================================================

  activeTab: PayrollTabId = 'salary-structure';


  // =====================================================
  // PAYROLL PERIOD
  // =====================================================

  selectedPeriod = 'August 2026';


  readonly payrollPeriods = [
    'August 2026',
    'July 2026',
    'June 2026',
    'May 2026',
    'April 2026'
  ];


  // =====================================================
  // TABS
  // =====================================================

  readonly tabs: PayrollTab[] = [

    {
      id: 'salary-structure',
      label: 'Salary Structure'
    },

    {
      id: 'processing',
      label: 'Payroll Processing'
    },

    {
      id: 'status',
      label: 'Payroll Status'
    }

  ];


  // =====================================================
  // TAB CHANGE
  // =====================================================

  selectTab(tab: PayrollTabId): void {

    this.activeTab = tab;

  }


  // =====================================================
  // PAYROLL PERIOD CHANGE
  // =====================================================

  onPeriodChange(event: Event): void {

    const select =
      event.target as HTMLSelectElement;

    this.selectedPeriod =
      select.value;

    console.log(
      'Selected Payroll Period:',
      this.selectedPeriod
    );

  }

}