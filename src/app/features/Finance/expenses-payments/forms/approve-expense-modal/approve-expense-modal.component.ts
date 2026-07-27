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
  selector: 'app-approve-expense-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './approve-expense-modal.component.html'
})
export class ApproveExpenseModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form: FormGroup;

  decisionOptions = [
    'Approved',
    'Rejected'
  ];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      claimId: [
        'EXP-801'
      ],

      employee: [
        'Rahul Sharma'
      ],

      category: [
        'Travel'
      ],

      amount: [
        14500
      ],

      decision: [
        'Approved',
        Validators.required
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