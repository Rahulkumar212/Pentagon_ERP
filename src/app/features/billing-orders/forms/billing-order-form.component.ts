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

    // Billing Information
    date: this.fb.nonNullable.control('', Validators.required),

    particulars: this.fb.nonNullable.control('', Validators.required),

    item_details: this.fb.nonNullable.control('', Validators.required),

    taxable_amount: this.fb.nonNullable.control(0, [
      Validators.required,
      Validators.min(0)
    ]),

    business_value: this.fb.nonNullable.control(0, [
      Validators.required,
      Validators.min(0)
    ]),

    // Customer
    customer_name: this.fb.nonNullable.control('', Validators.required),

    // Customer Contact (PO)
    po_contact_name: this.fb.nonNullable.control('', Validators.required),

    po_contact_email: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.email
    ]),

    po_contact_phone: this.fb.nonNullable.control('', Validators.required),

    // Billing Contact
    billing_contact_name: this.fb.nonNullable.control('', Validators.required),

    billing_contact_email: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.email
    ]),

    billing_contact_phone: this.fb.nonNullable.control('', Validators.required),

    // Invoice Recipient
    recipient_name: this.fb.nonNullable.control('', Validators.required),

    recipient_email: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.email
    ]),

    recipient_phone: this.fb.nonNullable.control('', Validators.required),

    // Accounts
    accounts_phone: this.fb.nonNullable.control('', Validators.required),

    // Execution
    execution_phone: this.fb.nonNullable.control('', Validators.required),

    // Support
    support_phone: this.fb.nonNullable.control('', Validators.required),

    // Partner / Support Reference
    support_name: this.fb.nonNullable.control('', Validators.required),

    support_contact_phone: this.fb.nonNullable.control('', Validators.required)

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
          business_value: this.billing.business_value,

          customer_name: this.billing.customer_name,

          po_contact_name: this.billing.po_contact_name,
          po_contact_email: this.billing.po_contact_email,
          po_contact_phone: this.billing.po_contact_phone,

          billing_contact_name: this.billing.billing_contact_name,
          billing_contact_email: this.billing.billing_contact_email,
          billing_contact_phone: this.billing.billing_contact_phone,

          recipient_name: this.billing.recipient_name,
          recipient_email: this.billing.recipient_email,
          recipient_phone: this.billing.recipient_phone,

          accounts_phone: this.billing.accounts_phone,

          execution_phone: this.billing.execution_phone,

          support_phone: this.billing.support_phone,

          support_name: this.billing.support_name,
          support_contact_phone: this.billing.support_contact_phone

        });

      } else {

        this.isEditMode = false;

        this.billingForm.reset({

          date: '',
          particulars: '',
          item_details: '',
          taxable_amount: 0,
          business_value: 0,

          customer_name: '',

          po_contact_name: '',
          po_contact_email: '',
          po_contact_phone: '',

          billing_contact_name: '',
          billing_contact_email: '',
          billing_contact_phone: '',

          recipient_name: '',
          recipient_email: '',
          recipient_phone: '',

          accounts_phone: '',

          execution_phone: '',

          support_phone: '',

          support_name: '',
          support_contact_phone: ''

        });

      }

    }

  }

 onSubmit(): void {
   console.log('Submit Clicked');

  if (this.billingForm.invalid) {
    this.billingForm.markAllAsTouched();
    this.toast.warning('Please fill all required fields.');
    return;
  }

  this.isSubmitting = true;

  const payload = this.billingForm.getRawValue();

  if (this.isEditMode && this.billing) {

    this.billingService
      .updateBilling(this.billing.id, payload)
      .subscribe({

        next: (response) => {

          this.toast.success('Billing updated successfully.');

          this.isSubmitting = false;

          this.save.emit(response.data);

        },

        error: (err) => {

          this.isSubmitting = false;

          this.toast.error('Failed to update billing.');

          console.error(err);

        }

      });

  } else {

    this.billingService
      .createBilling(payload)
      .subscribe({

        next: (response) => {

          this.toast.success('Billing created successfully.');

          this.isSubmitting = false;

          this.billingForm.reset();

          this.save.emit(response.data);

        },

        error: (err) => {

          this.isSubmitting = false;

          this.toast.error('Failed to create billing.');

          console.error(err);

        }

      });

  }

}



  onCancel(): void {

    this.cancel.emit();

  }

}