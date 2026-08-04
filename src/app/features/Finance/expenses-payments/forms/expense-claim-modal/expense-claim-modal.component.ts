import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ExpenseClaimService } from '../../../../../core/services/finance/expense-claim.service';

@Component({
  selector: 'app-expense-claim-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-claim-modal.component.html',
})
export class ExpenseClaimModalComponent {
  @Output() close = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);
  private readonly expenseClaimService = inject(ExpenseClaimService);

  form: FormGroup;

  categories = [
    'Travel',
    'Meals',
    'Office',
    'Software',
    'Training',
    'Medical',
    'Other',
  ];

  constructor() {
    this.form = this.fb.group({
      employee: ['', Validators.required],
      category: ['Travel', Validators.required],
      expenseDate: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
    });
  }

  cancel(): void {
    this.close.emit();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      employee: this.form.value.employee,
      category: this.form.value.category,
      date: this.form.value.expenseDate, // Backend field = date
      amount: Number(this.form.value.amount),
      description: this.form.value.description,
    };

    this.expenseClaimService.createExpenseClaim(payload).subscribe({
      next: (response) => {
        console.log('Expense Claim Created:', response);

        // Optional
        this.form.reset({
          category: 'Travel',
        });

        this.close.emit();
      },

      error: (error) => {
        console.error('Failed to create expense claim', error);
      },
    });
  }
}