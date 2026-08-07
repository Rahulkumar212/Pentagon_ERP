import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-upload-bank-statement',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './upload-bank-statement.component.html'
})
export class UploadBankStatementComponent {

  @Input()
  bank: any = null;

  @Output()
  close = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);

  selectedFile: File | null = null;

  banks = [
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'State Bank of India',
    'Punjab National Bank',
    'Kotak Mahindra Bank'
  ];

  form = this.fb.nonNullable.group({

    bankName: [
      '',
      Validators.required
    ],

    accountNumber: [
      '',
      Validators.required
    ],

    statementMonth: [
      '',
      Validators.required
    ],

    statementYear: [
      new Date().getFullYear(),
      Validators.required
    ]

  });

  ngOnInit(): void {

    if (this.bank) {

      this.form.patchValue({

        bankName: this.bank.name ?? '',
        accountNumber: this.bank.accountNo ?? ''

      });

    }

  }

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {

      return;

    }

    this.selectedFile = input.files[0];

  }

  submit(): void {

    if (this.form.invalid || !this.selectedFile) {

      this.form.markAllAsTouched();

      alert('Please select a bank statement.');

      return;

    }

    console.log({

      ...this.form.getRawValue(),

      file: this.selectedFile

    });

    // TODO
    // TreasuryService.uploadBankStatement()

    this.close.emit();

  }

  cancel(): void {

    this.close.emit();

  }

}