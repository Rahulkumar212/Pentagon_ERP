import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface PayrollAdjustment {
  employeeId: string;
  employeeName: string;
  adjustmentType: AdjustmentType;
  amount: number;
  effectiveMonth: string;
  reason: string;
  remarks: string;
}

type AdjustmentType =
  | 'Bonus'
  | 'Incentive'
  | 'Arrear'
  | 'Overtime'
  | 'Allowance'
  | 'Deduction'
  | 'Recovery';

@Component({
  selector: 'app-payroll-adjustment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './payroll-adjustment-form.component.html'
})
export class PayrollAdjustmentFormComponent {

  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  saved = new EventEmitter<PayrollAdjustment>();

  @Output()
  cancelled = new EventEmitter<void>();

  // =====================================================
  // FORM MODEL
  // =====================================================

  adjustment: PayrollAdjustment = {
    employeeId: '',
    employeeName: '',
    adjustmentType: 'Bonus',
    amount: 0,
    effectiveMonth: '',
    reason: '',
    remarks: ''
  };

  // =====================================================
  // ADJUSTMENT TYPES
  // =====================================================

  readonly adjustmentTypes: AdjustmentType[] = [
    'Bonus',
    'Incentive',
    'Arrear',
    'Overtime',
    'Allowance',
    'Deduction',
    'Recovery'
  ];

  // =====================================================
  // SAVE
  // =====================================================

  saveAdjustment(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.saved.emit({
      ...this.adjustment
    });
  }

  // =====================================================
  // VALIDATION
  // =====================================================

  isFormValid(): boolean {
    return (
      this.adjustment.employeeId.trim().length > 0 &&
      this.adjustment.employeeName.trim().length > 0 &&
      this.adjustment.adjustmentType.length > 0 &&
      this.adjustment.amount > 0 &&
      this.adjustment.effectiveMonth.trim().length > 0 &&
      this.adjustment.reason.trim().length > 0
    );
  }

  // =====================================================
  // CANCEL
  // =====================================================

  cancel(): void {
    this.cancelled.emit();
  }

  // =====================================================
  // TYPE CHECK
  // =====================================================

  isDeduction(): boolean {
    return (
      this.adjustment.adjustmentType === 'Deduction' ||
      this.adjustment.adjustmentType === 'Recovery'
    );
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