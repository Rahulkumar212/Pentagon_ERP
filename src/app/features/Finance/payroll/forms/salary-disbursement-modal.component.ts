import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-salary-disbursement-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './salary-disbursement-modal.component.html'
})
export class SalaryDisbursementModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  paymentMethods = [
    'Bank Transfer',
    'NEFT',
    'RTGS',
    'UPI',
    'Cheque'
  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      employee: [
        'Rahul Sharma',
        Validators.required
      ],

      employeeId: [
        'EMP-1025'
      ],

      department: [
        'Finance'
      ],

      month: [
        'July 2026',
        Validators.required
      ],

      grossSalary: [
        85000
      ],

      deductions: [
        5000
      ],

      netSalary: [
        80000,
        Validators.required
      ],

      paymentDate: [
        new Date().toISOString().substring(0,10),
        Validators.required
      ],

      paymentMethod: [
        'Bank Transfer',
        Validators.required
      ],

      referenceNo: [''],

      remarks: ['']

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(this.form.value);

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}