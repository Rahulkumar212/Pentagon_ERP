import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  CallType,
  DiscussionOutcome,
  FollowupMode,
  CallDiscussionPayload,
} from '../../../../core/models/client-crm/call-discussion.type';

import {
  CallDiscussionService
} from '../../../../core/services/call-discussion.service';

import {
  ToastService
} from '../../../../core/services/toast/toast.service';

import {
  SalesVisit
} from '../../../../core/models/client-crm/sales-visit.type';


@Component({
  selector: 'app-call-discussion-form',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],

  templateUrl: './call-discussion-form.component.html',
})
export class CallDiscussionFormComponent implements OnInit {

  // =====================================================
  // INPUT
  // =====================================================

  @Input({ required: true })
  lead!: SalesVisit;


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  close = new EventEmitter<void>();

  @Output()
  saved = new EventEmitter<void>();


  // =====================================================
  // SERVICES
  // =====================================================

  private readonly fb =
    inject(FormBuilder);

  private readonly callDiscussionService =
    inject(CallDiscussionService);

  private readonly toast =
    inject(ToastService);


  // =====================================================
  // STATE
  // =====================================================

  isSubmitting = false;


  // =====================================================
  // FORM
  // =====================================================

  form =
    this.fb.nonNullable.group({

      call_date: [
        '',
        Validators.required,
      ],

      call_time: [
        '',
        Validators.required,
      ],

      call_type: [
        'PHONE' as CallType,
        Validators.required,
      ],

      duration: [
        5,
        [
          Validators.required,
          Validators.min(1),
        ],
      ],

      discussion: [
        '',
        Validators.required,
      ],

      requirement: [
        '',
        Validators.required,
      ],

      solution: [
        '',
        Validators.required,
      ],

      outcome: [
        '' as DiscussionOutcome,
        Validators.required,
      ],

      expected_amount: [
        0,
        [
          Validators.required,
          Validators.min(0),
        ],
      ],

      next_followup_date: [
        '',
        Validators.required,
      ],

      followup_mode: [
        '' as FollowupMode,
        Validators.required,
      ],

      remarks: [
        '',
      ],

    });


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    const now = new Date();

    this.form.patchValue({

      call_date:
        now.toISOString().split('T')[0],

      call_time:
        now.toTimeString().slice(0, 5),

    });

  }


  // =====================================================
  // SAVE CALL DISCUSSION
  // =====================================================

  save(): void {

    // ---------------------------------------------------
    // Validate
    // ---------------------------------------------------

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      this.toast.warning(
        'Please fill all required fields.'
      );

      return;
    }


    // ---------------------------------------------------
    // Prevent Multiple Submission
    // ---------------------------------------------------

    if (this.isSubmitting) {
      return;
    }


    this.isSubmitting = true;


    // ---------------------------------------------------
    // Get Form Value
    // ---------------------------------------------------

    const raw =
      this.form.getRawValue();


    // ---------------------------------------------------
    // Create Payload
    // ---------------------------------------------------

    const payload: CallDiscussionPayload = {

      call_date:
        raw.call_date,

      call_time:
        raw.call_time,

      call_type:
        raw.call_type,

      duration:
        Number(raw.duration),

      discussion:
        raw.discussion.trim(),

      requirement:
        raw.requirement.trim(),

      solution:
        raw.solution.trim(),

      outcome:
        raw.outcome,

      expected_amount:
        Number(raw.expected_amount),

      next_followup_date:
        raw.next_followup_date,

      followup_mode:
        raw.followup_mode,

      remarks:
        raw.remarks.trim(),

      sales_visit_id:
        this.lead.id

    };


    // ---------------------------------------------------
    // Debug
    // ---------------------------------------------------

    console.log(
      'Call Discussion Payload:',
      payload
    );


    // ---------------------------------------------------
    // POST API
    // ---------------------------------------------------

    this.callDiscussionService
      .createCallDiscussion(payload)
      .subscribe({

        // -----------------------------------------------
        // SUCCESS
        // -----------------------------------------------

        next: (response) => {

          console.log(
            'Call Discussion Created:',
            response
          );

          this.toast.success(
            'Call discussion submitted successfully.'
          );

          this.isSubmitting = false;

          this.saved.emit();

        },


        // -----------------------------------------------
        // ERROR
        // -----------------------------------------------

        error: (error) => {

          console.error(
            'Create Call Discussion Error:',
            error
          );

          this.toast.error(
            'Unable to save call discussion.'
          );

          this.isSubmitting = false;

        },

      });

  }


  // =====================================================
  // CANCEL
  // =====================================================

  cancel(): void {

    this.close.emit();

  }

}