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

import { ChartAccountService } from '../../../../../core/services/finance/chart-account.service';

@Component({
  selector: 'app-create-account-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-account-modal.component.html'
})
export class CreateAccountModalComponent {

  @Output()
  close = new EventEmitter<void>();

  form!: FormGroup;

  isSubmitting = false;

  classifications = [
    'Assets',
    'Liabilities',
    'Equity',
    'Revenue',
    'Expenses'
  ];

  subClassifications = [
    'Current Assets',
    'Non Current Assets',
    'Current Liabilities',
    'Long Term Liabilities',
    'Direct Income',
    'Indirect Income',
    'Direct Expenses',
    'Indirect Expenses'
  ];

  balanceTypes = [
    'Debit',
    'Credit'
  ];

  statuses = [
    'Active',
    'Inactive'
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly chartAccountService: ChartAccountService
  ) {

    this.form = this.fb.group({

      code: [
        '',
        Validators.required
      ],

      accountName: [
        '',
        Validators.required
      ],

      classification: [
        'Assets',
        Validators.required
      ],

      subClassification: [
        'Current Assets',
        Validators.required
      ],

      balanceType: [
        'Debit',
        Validators.required
      ],

      openingBalance: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      description: [
        ''
      ],

      status: [
        'Active',
        Validators.required
      ]

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.chartAccountService
      .createChartAccount(this.form.getRawValue())
      .subscribe({

        next: (response) => {

          console.log(
            'Chart Account Created',
            response
          );

          this.isSubmitting = false;

          this.form.reset({

          code: '',

            accountName: '',

            classification: 'Assets',

            subClassification: 'Current Assets',

            balanceType: 'Debit',

            openingBalance: 0,

            description: '',

            status: 'Active'

          });

          this.close.emit();

        },

        error: (error) => {

          console.error(
            'Failed to create chart account',
            error
          );

          this.isSubmitting = false;

        }

      });

  }

  closeModal(): void {

    this.close.emit();

  }

}