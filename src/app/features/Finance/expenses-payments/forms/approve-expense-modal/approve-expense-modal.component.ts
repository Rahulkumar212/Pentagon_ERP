import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ExpenseClaimService } from '../../../../../core/services/finance/expense-claim.service';

import {
  UpdateExpenseClaimRequest
} from '../../../../../core/models/finance/expense-claim.model';

@Component({
  selector: 'app-approve-expense-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './approve-expense-modal.component.html'
})
export class ApproveExpenseModalComponent implements OnChanges {

  @Input()
  decision: 'Approved' | 'Rejected' = 'Approved';

  @Input()
  expenseClaim: any;

  @Output()
  close = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly expenseClaimService: ExpenseClaimService
  ) {

    this.form = this.fb.group({

      claimId: [''],

      employee: [''],

      category: [''],

      amount: [''],

      decision: [
        '',
        Validators.required
      ],

      remarks: ['']

    });

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.expenseClaim) {

      return;

    }

    this.form.patchValue({

      claimId: this.expenseClaim.claimId,

      employee: this.expenseClaim.employee,

      category: this.expenseClaim.category,

      amount: this.expenseClaim.amount,

      decision: this.decision,

      remarks: this.expenseClaim.remarks ?? ''

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    const payload: UpdateExpenseClaimRequest = {

      status: this.form.value.decision.toUpperCase(),

      remarks: this.form.value.remarks

    };

    this.expenseClaimService
      .updateExpenseClaim(
        this.expenseClaim.id,
        payload
      )
      .subscribe({

        next: (response) => {

          console.log(
            'Expense Claim Updated',
            response
          );

          this.close.emit(true);

        },

        error: (error) => {

          console.error(
            'Failed to update expense claim',
            error
          );

        }

      });

  }

  cancel(): void {

    this.close.emit(false);

  }

}