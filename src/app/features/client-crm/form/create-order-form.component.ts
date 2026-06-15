import {
  Component,
  EventEmitter,
  Output,
  inject,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Organization } from '../../../core/models/client-crm.type';

@Component({
  selector: 'app-create-order-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-order-form.component.html'
})
export class CreateOrderFormComponent {

  @Input()
  organization: Organization | null = null;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<any>();

  private fb = inject(FormBuilder);

  form = this.fb.group({

    purchaseMode: [
      '',
      Validators.required
    ],
    shippingAddress: [
      '',
      Validators.required
    ],

    orderAmount: [
      '',
      Validators.required
    ],

    proposal: [
      '',
      Validators.required
    ]

  });

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.save.emit(this.form.getRawValue());

  }

}