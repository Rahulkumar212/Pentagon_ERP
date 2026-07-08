import {
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import {
  SalesVisitPayload,
  VisitType,
  LeadType
} from '../../../core/models/client-crm.type';

import { OrganizationService } from '../../../core/services/organization.service';

@Component({
  selector: 'app-organization-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './organization-form.component.html'
})
export class OrganizationFormComponent {

  private readonly fb = inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);

  @Output()
  save = new EventEmitter<SalesVisitPayload>();

  showOrganizationModal = true;

  isSubmitting = false;

  organizationForm =
    this.fb.nonNullable.group({

      executive_name: [
        '',
        Validators.required
      ],

      designation: [
        '',
        Validators.required
      ],

      visit_date: [
        '',
        Validators.required
      ],

      visit_type: [
        '' as VisitType,
        Validators.required
      ],

      lead_type: [
        '' as LeadType,
        Validators.required
      ],

      customer_name: [
        '',
        Validators.required
      ],

      customer_address: [
        '',
        Validators.required
      ],

      contact_person: [
        '',
        Validators.required
      ],

      contact_number: [
        '',
        Validators.required
      ],

      customer_email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      product_type: [
        '',
        Validators.required
      ],

      product_description: [
        '',
        Validators.required
      ],

      quantity: [
        1,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      remarks: ['']
    });

  onSubmit(): void {

    if (this.organizationForm.invalid) {

      this.organizationForm.markAllAsTouched();

      return;
    }

    const formValue =
      this.organizationForm.getRawValue();

    const payload: SalesVisitPayload = {

      executive_name:
        formValue.executive_name.trim(),

        designation:
        formValue.executive_name.trim(),

      visit_date:
        formValue.visit_date,

      visit_type:
        formValue.visit_type as VisitType,

      lead_type:
        formValue.lead_type as LeadType,

      customer_name:
        formValue.customer_name.trim(),

      customer_address:
        formValue.customer_address.trim(),

      contact_person:
        formValue.contact_person.trim(),

      contact_number:
        formValue.contact_number.trim(),

      customer_email:
        formValue.customer_email.trim(),

      product_type:
        formValue.product_type.trim(),

      product_description:
        formValue.product_description.trim(),

      quantity:
        formValue.quantity,

      remarks:
        formValue.remarks?.trim() ?? ''
    };

    this.isSubmitting = true;

    this.organizationService
      .createSalesVisit(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Sales Visit Created',
            response
          );

          this.isSubmitting = false;

          this.save.emit(payload);

          this.resetForm();

          this.showOrganizationModal = false;
        },

        error: (error) => {

          console.error(
            'Create Sales Visit Error',
            error
          );

          this.isSubmitting = false;
        }
      });
  }

  @Output()
  cancel = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }

  private resetForm(): void {

    this.organizationForm.reset({

      executive_name: '',
      designation:'',
      visit_date: '',

      visit_type:
        '' as VisitType,

      lead_type:
        '' as LeadType,

      customer_name: '',
      customer_address: '',
      contact_person: '',
      contact_number: '',
      customer_email: '',

      product_type: '',
      product_description: '',

      quantity: 1,

      remarks: ''
    });
  }
}