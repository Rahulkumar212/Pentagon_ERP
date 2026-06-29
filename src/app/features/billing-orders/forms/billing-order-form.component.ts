import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  BillingOrderService
} from '../../../core/services/billing-order.service';

import {
  BillingOrder,
  BillingResponse,
  CreateBillingOrderPayload
} from '../../../core/models/billing-order.type';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-billing-order-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './billing-order-form.component.html'
})
export class BillingOrderFormComponent
  implements OnChanges {

  @Input()
  billing?: BillingOrder | null;

  @Output()
  save = new EventEmitter<BillingOrder>();

  @Output()
  cancel = new EventEmitter<void>();

  private readonly fb =
    inject(FormBuilder);

  private readonly billingService =
    inject(BillingOrderService);

  private readonly toast =
    inject(ToastService);

  isSubmitting = false;

  isEditMode = false;

  billingForm = this.fb.group({

    date: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    particulars: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    item_details: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    taxable_amount: this.fb.nonNullable.control(
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ),

    support_of: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    monthly_business: this.fb.nonNullable.control(
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    )

  });

  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (changes['billing']) {

      if (this.billing) {

        this.isEditMode = true;

        this.billingForm.patchValue({

          date: this.billing.date,
          particulars: this.billing.particulars,
          item_details: this.billing.item_details,
          taxable_amount: this.billing.taxable_amount,
          support_of: this.billing.support_of,
          monthly_business: this.billing.monthly_business

        });

      } else {

        this.isEditMode = false;

        this.billingForm.reset({

          date: '',
          particulars: '',
          item_details: '',
          taxable_amount: 0,
          support_of: '',
          monthly_business: 0

        });

      }

    }

  }

  onSubmit(): void {

    if (this.billingForm.invalid) {

      this.billingForm.markAllAsTouched();
      this.toast.warning(
        'Please fill all required fields.'
      );

      return;

    }

    this.isSubmitting = true;

    const payload: CreateBillingOrderPayload =
      this.billingForm.getRawValue();

    if (this.isEditMode && this.billing) {

      this.billingService
        .updateBilling(this.billing.id, payload)
        .subscribe({

          next: (response: BillingResponse) => {

            this.toast.clear();

            this.toast.success(
              'Billing updated successfully.'
            );


            this.isSubmitting = false;

            this.save.emit(response.data);

          },

          error: (err) => {

            this.toast.clear();

            this.toast.error(
              'Failed to update billing.'
            );

            console.error(err);

            this.isSubmitting = false;

          }

        });

    } else {

      this.billingService
        .createBilling(payload)
        .subscribe({

          next: (response: BillingResponse) => {

            this.isSubmitting = false;

            this.billingForm.reset({

              date: '',
              particulars: '',
              item_details: '',
              taxable_amount: 0,
              support_of: '',
              monthly_business: 0

            });

            this.save.emit(response.data);

          },

          error: (err) => {

            console.error(err);

            this.isSubmitting = false;

          }

        });

    }

  }

  onCancel(): void {

    this.cancel.emit();

  }

}