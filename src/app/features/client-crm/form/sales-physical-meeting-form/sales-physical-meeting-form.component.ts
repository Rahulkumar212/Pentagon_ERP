import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ActivityType,
  ClientType,
  LeadPriority,
  ManagementSupport,
  OrderStatus,
  ProposalStatus,
  SalesActivityStatus,
  SalesVisitPayload,
  SalesVisitResponse
} from '../../../../core/models/client-crm/sales-visit.type';

import {
  OrganizationService
} from '../../../../core/services/organization.service';


@Component({
  selector: 'app-sales-physical-meeting-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sales-physical-meeting-form.component.html'
})
export class SalesPhysicalMeetingFormComponent
  implements OnInit {

  private readonly fb =
    inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  save =
    new EventEmitter<SalesVisitPayload>();

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
  // EXISTING CLIENTS
  // =====================================================

  existingClients: string[] = [];


  // =====================================================
  // ORDER LOST REASONS
  // =====================================================

  // Reason ab dropdown nahi hai.
  // HTML me normal text field use ho rahi hai.


  // =====================================================
  // MEETING PHOTO
  // =====================================================

  selectedMeetingPhoto: File | null = null;

  meetingPhotoUrl: string | null = null;


  // =====================================================
  // SALES VISIT FORM
  // =====================================================

  salesVisitForm =
    this.fb.nonNullable.group({

      // -------------------------------------------------
      // Employee Information
      // -------------------------------------------------

      executive_name: [
        '',
        Validators.required
      ],

      reporting_location: [
        '',
        Validators.required
      ],

      visit_date: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // Activity Information
      // -------------------------------------------------

      activity_type: [
        '' as ActivityType,
        Validators.required
      ],


      // -------------------------------------------------
      // Client Information
      // -------------------------------------------------

      customer_name: [
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

      city: [
        '',
        Validators.required
      ],

      client_type: [
        '' as ClientType,
        Validators.required
      ],


      // -------------------------------------------------
      // Lead Information
      // -------------------------------------------------

      lead_priority: [
        '' as LeadPriority,
        Validators.required
      ],


      // -------------------------------------------------
      // Discussion
      // -------------------------------------------------

      discussion_summary: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // Sales Status
      // -------------------------------------------------

      current_status: [
        '' as SalesActivityStatus,
        Validators.required
      ],

      expected_business_value: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      proposal_sent: [
        '' as ProposalStatus,
        Validators.required
      ],

      order_closed: [
        '' as OrderStatus,
        Validators.required
      ],

      order_lost_reason: [
        ''
      ],


      // -------------------------------------------------
      // Dates
      // -------------------------------------------------

      expected_closure_date: [
        '',
        Validators.required
      ],

      next_followup_date: [
        '',
        Validators.required
      ],


      // -------------------------------------------------
      // Management
      // -------------------------------------------------

      management_support_required: [
        '' as ManagementSupport,
        Validators.required
      ],


      // -------------------------------------------------
      // Remarks
      // -------------------------------------------------

      additional_remarks: [
        ''
      ],


      // -------------------------------------------------
      // Meeting Photo
      // -------------------------------------------------

      meeting_photo: [
        ''
      ]

    });


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.loadClientNames();

  }


  // =====================================================
  // LOAD CLIENT NAMES
  // =====================================================

 private loadClientNames(): void {

  this.organizationService
    .fetchClientName()
    .subscribe({

      next: (response: any) => {

        console.log(
          'Client Names Response:',
          response
        );

        this.existingClients =
          (response.data ?? []).map(
            (client: { customer_name: string }) =>
              client.customer_name
          );

      },

      error: (error) => {

        console.error(
          'Failed to load client names:',
          error
        );

        this.existingClients = [];

      }

    });
}


  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    // ---------------------------------------------------
    // Validate Form
    // ---------------------------------------------------

    if (this.salesVisitForm.invalid) {

      this.salesVisitForm.markAllAsTouched();

      return;
    }


    // ---------------------------------------------------
    // Get Form Value
    // ---------------------------------------------------

    const formValue =
      this.salesVisitForm.getRawValue();


    // ---------------------------------------------------
    // Create Payload
    // ---------------------------------------------------

    const payload: SalesVisitPayload = {

      executive_name:
        formValue.executive_name.trim(),

      reporting_location:
        formValue.reporting_location.trim(),

      visit_date:
        formValue.visit_date,

      activity_type:
        formValue.activity_type,

      customer_name:
        formValue.customer_name.trim(),

      contact_person:
        formValue.contact_person.trim(),

      contact_number:
        formValue.contact_number.trim(),

      city:
        formValue.city.trim(),

      client_type:
        formValue.client_type,

      lead_priority:
        formValue.lead_priority,

      discussion_summary:
        formValue.discussion_summary.trim(),

      current_status:
        formValue.current_status,

      expected_business_value:
        formValue.expected_business_value,

      proposal_sent:
        formValue.proposal_sent,

      order_closed:
        formValue.order_closed,

      ...(formValue.order_lost_reason.trim()
        ? {
            order_lost_reason:
              formValue.order_lost_reason.trim()
          }
        : {}),

      expected_closure_date:
        formValue.expected_closure_date,

      next_followup_date:
        formValue.next_followup_date,

      management_support_required:
        formValue.management_support_required,

      additional_remarks:
        formValue.additional_remarks.trim(),

      meeting_photo:
        this.selectedMeetingPhoto

    };


    // ---------------------------------------------------
    // Debug
    // ---------------------------------------------------

    console.log(
      'Sales Visit Payload:',
      payload
    );


    // ---------------------------------------------------
    // Start Submission
    // ---------------------------------------------------

    this.isSubmitting = true;


    this.organizationService
      .createSalesVisit(payload)
      .subscribe({

        // -----------------------------------------------
        // SUCCESS
        // -----------------------------------------------

        next: (response) => {

          console.log(
            'Sales Physical Meeting Created',
            response
          );

          this.save.emit(payload);

          this.resetForm();

          this.isSubmitting = false;

        },


        // -----------------------------------------------
        // ERROR
        // -----------------------------------------------

        error: (error) => {

          console.error(
            'Create Sales Visit Error',
            error
          );

          this.isSubmitting = false;

        }

      });

  }


  // =====================================================
  // MEETING PHOTO CHANGE
  // =====================================================

  onMeetingPhotoChange(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    const file =
      input.files?.[0] ?? null;


    this.selectedMeetingPhoto =
      file;


    if (!file) {

      this.meetingPhotoUrl =
        null;

      this.salesVisitForm.patchValue({
        meeting_photo: ''
      });

      return;
    }


    const reader =
      new FileReader();


    reader.onload = () => {

      const result =
        reader.result as string;

      this.meetingPhotoUrl =
        result;

      this.salesVisitForm.patchValue({
        meeting_photo: result
      });

    };


    reader.readAsDataURL(file);

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

    this.selectedMeetingPhoto =
      null;

    this.meetingPhotoUrl =
      null;


    this.salesVisitForm.reset({

      executive_name: '',

      reporting_location: '',

      visit_date: '',

      activity_type:
        '' as ActivityType,

      customer_name: '',

      contact_person: '',

      contact_number: '',

      city: '',

      client_type:
        '' as ClientType,

      lead_priority:
        '' as LeadPriority,

      discussion_summary: '',

      current_status:
        '' as SalesActivityStatus,

      expected_business_value:
        0,

      proposal_sent:
        '' as ProposalStatus,

      order_closed:
        '' as OrderStatus,

      order_lost_reason: '',

      expected_closure_date: '',

      next_followup_date: '',

      management_support_required:
        '' as ManagementSupport,

      additional_remarks: '',

      meeting_photo: ''

    });

  }

}