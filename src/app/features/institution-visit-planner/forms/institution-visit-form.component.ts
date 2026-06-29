import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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
  InstitutionVisitService
} from '../../../core/services/institution-visit.service';

import {
  CreateInstitutionVisitPayload,
  InstitutionVisit,
  InstitutionVisitResponse
} from '../../../core/models/institution-visit.type';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-institution-visit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './institution-visit-form.component.html'
})
export class InstitutionVisitFormComponent
  implements OnChanges {

  @Input()
  visit: InstitutionVisit | null = null;

  @Output()
  save = new EventEmitter<InstitutionVisit>();

  @Output()
  cancel = new EventEmitter<void>();

  private readonly fb =
    inject(FormBuilder);

  private readonly institutionVisitService =
    inject(InstitutionVisitService);

  private readonly toast =
    inject(ToastService);

  isSubmitting = false;

  isEditMode = false;

  visitForm = this.fb.group({

    institution_type: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    institution_name: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    address: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    contact_person: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    contact_number: this.fb.nonNullable.control(
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ),

    designation: this.fb.nonNullable.control(
      '',
      Validators.required
    ),

    planned_visit_date: this.fb.nonNullable.control(
      '',
      Validators.required
    )

  });

  // ==========================
  // Edit Data
  // ==========================

  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (changes['visit']) {

      if (this.visit) {

        this.isEditMode = true;

        this.visitForm.patchValue({

          institution_type:
            this.visit.institution_type,

          institution_name:
            this.visit.institution_name,

          address:
            this.visit.address,

          contact_person:
            this.visit.contact_person,

          contact_number:
            this.visit.contact_number,

          designation:
            this.visit.designation,

          planned_visit_date:
            this.visit.planned_visit_date
              ?.substring(0, 10)

        });

      } else {

        this.isEditMode = false;

        this.visitForm.reset({

          institution_type: '',
          institution_name: '',
          address: '',
          contact_person: '',
          contact_number: '',
          designation: '',
          planned_visit_date: ''

        });

      }

    }

  }

  // ==========================
  // Save / Update
  // ==========================

  onSubmit(): void {

    if (this.visitForm.invalid) {

      this.visitForm.markAllAsTouched();
      this.toast.warning(
        'Please fill all required fields.'
      );


      return;

    }

    this.isSubmitting = true;

    if (this.isEditMode && this.visit) {

      const payload: CreateInstitutionVisitPayload =
        this.visitForm.getRawValue();

      this.institutionVisitService
        .updateInstitutionVisit(
          this.visit.id,
          payload
        )
        .subscribe({

          next: (response: InstitutionVisitResponse) => {
            this.toast.clear();

            this.toast.success(
              'Visit details updated successfully.'
            );

            this.isSubmitting = false;

            this.save.emit(response.data[0]);

          },

          error: (err) => {

            this.toast.clear();

            this.toast.error(
              'Failed to update Institution Visit.'
            );


            this.isSubmitting = false;

          }

        });

    } else {

      const payload: CreateInstitutionVisitPayload =
        this.visitForm.getRawValue();

      this.institutionVisitService
        .createInstitutionVisit(payload)
        .subscribe({

          next: (response: InstitutionVisitResponse) => {

            this.isSubmitting = false;

            this.visitForm.reset({

              institution_type: '',
              institution_name: '',
              address: '',
              contact_person: '',
              contact_number: '',
              designation: '',
              planned_visit_date: ''

            });

            this.save.emit(response.data[0]);

          },

          error: (err) => {

            console.error(
              'Failed to create institution visit',
              err
            );

            this.isSubmitting = false;

          }

        });

    }

  }

  // ==========================
  // Cancel
  // ==========================

  onCancel(): void {

    this.cancel.emit();

  }

}