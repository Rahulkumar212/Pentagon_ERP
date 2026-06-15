import {
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { OrganizationService } from '../../../core/services/organization.service';

import {
  Organization,
  OrganizationPayload,
  PriorityType
} from '../../../core/models/client-crm.type';

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

  @Output()
  close = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<Organization>();

  private fb = inject(FormBuilder);

  private organizationService =
    inject(OrganizationService);

  isSubmitting = false;

  organizationForm =
    this.fb.nonNullable.group({
      organization_name: [
        '',
        Validators.required
      ],
       industry_sector: ['',
        Validators.required
       ],
      name_of_poc: [
        '',
        Validators.required
      ],

      designation: [''],

      phoneNumber: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      city: [''],

      address: [''],

      notes: [''],

      priority: [
        'MEDIUM' as PriorityType
      ]
    });

  submit(): void {

    if (this.organizationForm.invalid) {

      this.organizationForm.markAllAsTouched();

      return;
    }

    this.isSubmitting = true;

    const payload: OrganizationPayload =
      this.organizationForm.getRawValue();

    this.organizationService
      .createOrganization(payload)
      .subscribe({

        next: (response: Organization) => {

          console.log(
            'Organization Created Successfully',
            response
          );

          // Parent component ko data bhejna
          this.save.emit(response);

          this.organizationForm.reset({
            organization_name: '',
            name_of_poc: '',
            designation: '',
            phoneNumber: '',
            email: '',
            city: '',
            address: '',
            // notes: '',
            // priority: 'MEDIUM'
          });

          this.isSubmitting = false;

          this.close.emit();
        },

        error: (error) => {

          console.error(
            'Create Organization Error',
            error
          );

          this.isSubmitting = false;
        }
      });
  }
}