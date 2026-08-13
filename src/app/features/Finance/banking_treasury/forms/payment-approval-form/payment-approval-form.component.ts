import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  PaymentApproval
} from '../../components/payment-approval-table/payment-approval-table.component';

@Component({
  selector: 'app-payment-approval-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './payment-approval-form.component.html'
})
export class PaymentApprovalFormComponent implements OnInit {

  @Input()
  payment: PaymentApproval | null = null;

  @Output()
  close = new EventEmitter<boolean>();

  private readonly fb = inject(FormBuilder);

  paymentTypes = [
    'Vendor Payment',
    'Employee Reimbursement',
    'Salary Payment',
    'Tax Payment',
    'Utility Payment',
    'Advance Payment',
    'Other'
  ];

  priorities = [
    'Low',
    'Medium',
    'High',
    'Critical'
  ];

  approvalLevels = [
    'Finance Manager',
    'Finance Director',
    'Managing Director'
  ];

  form = this.fb.nonNullable.group({

    beneficiaryName: [
      '',
      Validators.required
    ],

    paymentType: [
      '',
      Validators.required
    ],

    amount: [
      0,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    paymentDate: [
      '',
      Validators.required
    ],

    bankAccount: [
      '',
      Validators.required
    ],

    priority: [
      'Medium',
      Validators.required
    ],

    approvalLevel: [
      'Finance Manager',
      Validators.required
    ],

    purpose: [
      '',
      Validators.required
    ],

    remarks: ['']

  });

  ngOnInit(): void {

    if (!this.payment) return;

    this.form.patchValue({

      beneficiaryName: this.payment.vendor,

      paymentType: this.payment.paymentType,

      amount: this.payment.amount,

      priority: this.payment.priority

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    console.log(this.form.getRawValue());

    this.close.emit(true);

  }

  cancel(): void {

    this.close.emit(false);

  }

}