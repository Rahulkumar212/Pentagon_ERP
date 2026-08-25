import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';

// =====================================================
// SALARY STRUCTURE MODEL
// =====================================================

interface SalaryStructure {
  employeeId: string;
  employeeName: string;
  effectiveFrom: string;

  basicSalary: number;
  hra: number;
  conveyanceAllowance: number;
  medicalAllowance: number;
  specialAllowance: number;

  pfApplicable: boolean;
  esiApplicable: boolean;
  professionalTaxApplicable: boolean;
  tdsApplicable: boolean;
}

// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-salary-structure-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './salary-structure-form.component.html'
})
export class SalaryStructureFormComponent {

  // =====================================================
  // OUTPUT EVENTS
  // =====================================================

  @Output()
  saved = new EventEmitter<SalaryStructure>();

  @Output()
  cancelled = new EventEmitter<void>();

  // =====================================================
  // FORM MODEL
  // =====================================================

  salaryStructure: SalaryStructure = {
    employeeId: '',
    employeeName: '',
    effectiveFrom: '',

    basicSalary: 0,
    hra: 0,
    conveyanceAllowance: 0,
    medicalAllowance: 0,
    specialAllowance: 0,

    pfApplicable: true,
    esiApplicable: false,
    professionalTaxApplicable: true,
    tdsApplicable: false
  };

  // =====================================================
  // TOTAL ALLOWANCES
  // =====================================================

  get totalAllowances(): number {
    return (
      this.salaryStructure.hra +
      this.salaryStructure.conveyanceAllowance +
      this.salaryStructure.medicalAllowance +
      this.salaryStructure.specialAllowance
    );
  }

  // =====================================================
  // GROSS SALARY
  // =====================================================

  get grossSalary(): number {
    return (
      this.salaryStructure.basicSalary +
      this.totalAllowances
    );
  }

  // =====================================================
  // ESTIMATED PF
  // =====================================================

  get estimatedPf(): number {

    if (!this.salaryStructure.pfApplicable) {
      return 0;
    }

    return Math.round(
      this.salaryStructure.basicSalary * 0.12
    );
  }

  // =====================================================
  // ESTIMATED ESI
  // =====================================================

  get estimatedEsi(): number {

    if (!this.salaryStructure.esiApplicable) {
      return 0;
    }

    return Math.round(
      this.grossSalary * 0.0075
    );
  }

  // =====================================================
  // PROFESSIONAL TAX
  // =====================================================

  get estimatedProfessionalTax(): number {

    if (!this.salaryStructure.professionalTaxApplicable) {
      return 0;
    }

    return 200;
  }

  // =====================================================
  // TDS
  // =====================================================
  //
  // IMPORTANT:
  // Actual TDS calculation should happen during payroll.
  // We do NOT estimate TDS here.
  //
  // =====================================================

  get estimatedTds(): number {

    if (!this.salaryStructure.tdsApplicable) {
      return 0;
    }

    return 0;
  }

  // =====================================================
  // TOTAL ESTIMATED DEDUCTIONS
  // =====================================================

  get estimatedDeductions(): number {

    return (
      this.estimatedPf +
      this.estimatedEsi +
      this.estimatedProfessionalTax +
      this.estimatedTds
    );
  }

  // =====================================================
  // HAS DEDUCTIONS
  // =====================================================

  get hasApplicableDeductions(): boolean {

    return (
      this.salaryStructure.pfApplicable ||
      this.salaryStructure.esiApplicable ||
      this.salaryStructure.professionalTaxApplicable ||
      this.salaryStructure.tdsApplicable
    );
  }

  // =====================================================
  // ESTIMATED NET SALARY
  // =====================================================

  get estimatedNetSalary(): number {

    if (!this.hasApplicableDeductions) {
      return this.grossSalary;
    }

    return (
      this.grossSalary -
      this.estimatedDeductions
    );
  }

  // =====================================================
  // ANNUAL CTC
  // =====================================================

  get estimatedAnnualCtc(): number {

    return this.grossSalary * 12;
  }

  // =====================================================
  // SAVE
  // =====================================================

  saveSalaryStructure(): void {

    if (!this.isFormValid()) {
      return;
    }

    this.saved.emit({
      ...this.salaryStructure
    });
  }

  // =====================================================
  // VALIDATION
  // =====================================================

  isFormValid(): boolean {

    return (
      this.salaryStructure.employeeId.trim().length > 0 &&
      this.salaryStructure.employeeName.trim().length > 0 &&
      this.salaryStructure.effectiveFrom.trim().length > 0 &&
      this.salaryStructure.basicSalary > 0
    );
  }

  // =====================================================
  // CANCEL
  // =====================================================

  cancel(): void {

    this.cancelled.emit();
  }

  // =====================================================
  // CURRENCY
  // =====================================================

  formatCurrency(value: number): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }
    ).format(value);
  }
}