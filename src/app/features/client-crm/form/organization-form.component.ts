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
  MatTabsModule,
  MatTabChangeEvent
} from '@angular/material/tabs';

import {
  ActivityType,
  ClientType,
  LeadPriority,
  ManagementSupport,
  OrderStatus,
  ProposalStatus,
  SalesActivityStatus,
  VisitType,
  SalesVisitPayload
} from '../../../core/models/client-crm/sales-visit.type';

import {
  TelecallingPayload
} from '../../../core/models/client-crm/telecalling.type';

import {
  OrganizationService
} from '../../../core/services/organization.service';

@Component({
  selector: 'app-organization-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatTabsModule
  ],
  templateUrl: './organization-form.component.html'
})
export class OrganizationFormComponent {

  selectedTab = 0;

  private readonly fb = inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);

  @Output()
  save = new EventEmitter<
    TelecallingPayload | SalesVisitPayload
  >();

  @Output()
  cancel = new EventEmitter<void>();

  showOrganizationModal = true;

  isSubmitting = false;

  // =====================================================
  // EMPLOYEE LIST
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
  // TAB CHANGE
  // =====================================================

  onTabChange(event: MatTabChangeEvent): void {

    this.selectedTab = event.index;

    if (event.index === 0) {

      this.telecallingForm.patchValue({
        visit_type: 'TELECALL'
      });

    } else {

      this.salesVisitForm.patchValue({
        visit_type: 'COLD'
      });
    }
  }

  // =====================================================
  // TELECALLING FORM
  // =====================================================

  telecallingForm = this.fb.nonNullable.group({

    executive_name: [
      '',
      Validators.required
    ],

    visit_date: [
      '',
      Validators.required
    ],

    visit_type: [
      'TELECALL' as const
    ],

    total_calls_made: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    connected_calls: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    meetings_scheduled: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    new_leads_generated: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

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

    customer_email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    city: [
      '',
      Validators.required
    ],

    lead_priority: [
      '' as LeadPriority,
      Validators.required
    ],

    remarks: [
      '',
      Validators.required
    ]
  });

  // =====================================================
  // SALES PHYSICAL MEETING FORM
  // =====================================================

  salesVisitForm = this.fb.nonNullable.group({

    executive_name: [
      '',
      Validators.required
    ],

    visit_type: [
      'COLD' as VisitType
    ],

    reporting_location: [
      '',
      Validators.required
    ],

    visit_date: [
      '',
      Validators.required
    ],

    activity_type: [
      '' as ActivityType,
      Validators.required
    ],

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

    lead_priority: [
      '' as LeadPriority,
      Validators.required
    ],

    discussion_summary: [
      '',
      Validators.required
    ],

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

    expected_closure_date: [
      '',
      Validators.required
    ],

    next_followup_date: [
      '',
      Validators.required
    ],

    management_support_required: [
      '' as ManagementSupport,
      Validators.required
    ],

    additional_remarks: [
      ''
    ],

    meeting_photo: [
      null as File | null
    ]
  });

  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    if (this.selectedTab === 0) {

      this.submitTelecalling();

      return;
    }

    this.submitSalesVisit();
  }

  // =====================================================
  // TELECALLING SUBMIT
  // =====================================================

  private submitTelecalling(): void {

    if (this.telecallingForm.invalid) {

      this.telecallingForm.markAllAsTouched();

      return;
    }

    const formValue =
      this.telecallingForm.getRawValue();

    const payload: TelecallingPayload = {

      executive_name:
        formValue.executive_name.trim(),

      visit_date:
        formValue.visit_date,

      visit_type:
        'TELECALL',

      total_calls_made:
        formValue.total_calls_made,

      connected_calls:
        formValue.connected_calls,

      meetings_scheduled:
        formValue.meetings_scheduled,

      new_leads_generated:
        formValue.new_leads_generated,

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

    this.isSubmitting = true;

    this.organizationService
      .createSalesVisit(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Telecalling Created',
            response
          );

          this.save.emit(payload);

          this.resetTelecallingForm();

          this.showOrganizationModal = false;

          this.isSubmitting = false;
        },

        error: (error) => {

          console.error(
            'Create Telecalling Error',
            error
          );

          this.isSubmitting = false;
        }
      });
  }

  // =====================================================
  // SALES PHYSICAL MEETING SUBMIT
  // =====================================================

  private submitSalesVisit(): void {

    if (this.salesVisitForm.invalid) {

      this.salesVisitForm.markAllAsTouched();

      return;
    }

    const formValue =
      this.salesVisitForm.getRawValue();

    const payload: SalesVisitPayload = {

      executive_name:
        formValue.executive_name.trim(),

      visit_type:
        formValue.visit_type,

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

      expected_closure_date:
        formValue.expected_closure_date,

      next_followup_date:
        formValue.next_followup_date,

      management_support_required:
        formValue.management_support_required,

      additional_remarks:
        formValue.additional_remarks.trim(),

      meeting_photo:
        formValue.meeting_photo
    };

    this.isSubmitting = true;

    this.organizationService
      .createSalesVisit(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Sales Physical Meeting Created',
            response
          );

          this.save.emit(payload);

          this.resetSalesVisitForm();

          this.showOrganizationModal = false;

          this.isSubmitting = false;
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

  // =====================================================
  // MEETING PHOTO
  // =====================================================

  onMeetingPhotoChange(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    const file =
      input.files?.[0] ?? null;

    this.salesVisitForm.patchValue({
      meeting_photo: file
    });
  }

  // =====================================================
  // CANCEL
  // =====================================================

  onCancel(): void {

    this.cancel.emit();
  }

  // =====================================================
  // RESET TELECALLING
  // =====================================================

  private resetTelecallingForm(): void {

    this.telecallingForm.reset({

      executive_name: '',

      visit_date: '',

      visit_type: 'TELECALL',

      total_calls_made: 0,

      connected_calls: 0,

      meetings_scheduled: 0,

      new_leads_generated: 0,

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

  // =====================================================
  // RESET SALES VISIT
  // =====================================================

  private resetSalesVisitForm(): void {

    this.salesVisitForm.reset({

      executive_name: '',

      visit_type: 'COLD',

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

      expected_business_value: 0,

      proposal_sent:
        '' as ProposalStatus,

      order_closed:
        '' as OrderStatus,

      expected_closure_date: '',

      next_followup_date: '',

      management_support_required:
        '' as ManagementSupport,

      additional_remarks: '',

      meeting_photo: null
    });
  }
}