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

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-order-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './purchase-order-request.component.html'
})
export class PurchaseOrderRequestComponent {

  @Output() close = new EventEmitter<void>();

  @Output() submitForm =
    new EventEmitter<any>();

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {

    this.form = this.fb.group({

      orderNumber: [
        '',
        Validators.required
      ],

      vendorCompany: [
        '',
        Validators.required
      ],

      procurementCost: [
        '',
        Validators.required
      ]

    });

  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.submitForm.emit(
      this.form.getRawValue()
    );

  }

}