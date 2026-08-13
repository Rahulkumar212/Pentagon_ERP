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

import {
  LeadPriority
} from '../../../../core/models/client-crm/sales-visit.type';

import {
  TelecallingPayload
} from '../../../../core/models/client-crm/telecalling.type';

import {
  OrganizationService
} from '../../../../core/services/organization.service';


@Component({
  selector: 'app-telecalling-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './telecalling-form.component.html'
})
export class TelecallingFormComponent {

  private readonly fb =
    inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  save =
    new EventEmitter<TelecallingPayload>();

  @Output()
  cancel =
    new EventEmitter<void>();


  // =====================================================
  // STATE
  // =====================================================

  isSubmitting = false;


  // =====================================================
  // EMPLOYEES
  // =====================================================

  readonly employees = [
    'Durga Shankar Mishra',
    'Gaurav Shukla',
    'Sheikh Rizwan Ali',
    'Sunil Patle',
    'Rajesh Pathak',
    'Monika',
    'Yatendra',
    'Shivam',
    'Vanshika'
  ];


  // =====================================================
  // TELECALLING FORM
  // =====================================================

  telecallingForm =
    this.fb.nonNullable.group({

      // -------------------------------------------------
      // 1. Executive Name
      // -------------------------------------------------

      executive_name: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // 2. Visit Date
      // -------------------------------------------------

      visit_date: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // 3. Customer Name
      // -------------------------------------------------

      customer_name: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // 4. Contact Person
      // -------------------------------------------------

      contact_person: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // 5. Contact Number
      // -------------------------------------------------

      contact_number: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // 6. Customer Email
      // -------------------------------------------------

      customer_email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],


      // -------------------------------------------------
      // 7. City
      // -------------------------------------------------

      city: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // 8. Lead Priority
      // -------------------------------------------------

      lead_priority: [
        '' as LeadPriority,
        Validators.required
      ],


      // -------------------------------------------------
      // 9. Remarks
      // -------------------------------------------------

      remarks: [
        '',
        Validators.required
      ]

    });


  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    // ---------------------------------------------------
    // Validate Form
    // ---------------------------------------------------

    if (this.telecallingForm.invalid) {

      this.telecallingForm.markAllAsTouched();

      return;
    }


    // ---------------------------------------------------
    // Get Form Value
    // ---------------------------------------------------

    const formValue =
      this.telecallingForm.getRawValue();


    // ---------------------------------------------------
    // Create Payload
    // ---------------------------------------------------

    const payload: TelecallingPayload = {

      executive_name:
        formValue.executive_name.trim(),

      visit_date:
        formValue.visit_date,

      customer_name:
        formValue.customer_name.trim(),

      contact_person:
        formValue.contact_person.trim(),

      contact_number:
        formValue.contact_number.trim(),

      customer_email:
        formValue.customer_email.trim(),

      city:
        formValue.city.trim(),

      lead_priority:
        formValue.lead_priority,

      remarks:
        formValue.remarks.trim()

    };


    // ---------------------------------------------------
    // Start Submission
    // ---------------------------------------------------

    this.isSubmitting = true;


    // ---------------------------------------------------
    // CREATE TELECALLING API
    // POST /createTelecalling
    // ---------------------------------------------------

    this.organizationService
      .createTelecalling(payload)
      .subscribe({

        // -----------------------------------------------
        // Success
        // -----------------------------------------------

        next: (response) => {

          console.log(
            'Telecalling Created',
            response
          );


          // Notify parent component
          this.save.emit(payload);


          // Reset form
          this.resetForm();


          // Stop loading
          this.isSubmitting = false;

        },


        // -----------------------------------------------
        // Error
        // -----------------------------------------------

        error: (error) => {

          console.error(
            'Create Telecalling Error',
            error
          );


          // Stop loading
          this.isSubmitting = false;

        }

      });

  }


  // =====================================================
  // CANCEL
  // =====================================================

  onCancel(): void {

    this.cancel.emit();
  }


  // =====================================================
  // RESET FORM
  // =====================================================

  private resetForm(): void {

    this.telecallingForm.reset({

      executive_name: '',

      visit_date: '',

      customer_name: '',

      contact_person: '',

      contact_number: '',

      customer_email: '',

      city: '',

      lead_priority:
        '' as LeadPriority,

      remarks: ''

    });

  }

}