import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reimbursement-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reimbursement-modal.component.html'
})
export class ReimbursementModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  paymentMethods = [

    'Bank Transfer',

    'UPI',

    'Cheque',

    'Cash'

  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      employee: [
        'Rahul Sharma'
      ],

      claimId: [
        'EXP-801'
      ],

      approvedAmount: [
        14500
      ],

      paymentDate: [
        new Date().toISOString().substring(0, 10),
        Validators.required
      ],

      paymentMethod: [
        'Bank Transfer',
        Validators.required
      ],

      referenceNo: [
        ''
      ],

      remarks: [
        ''
      ]

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