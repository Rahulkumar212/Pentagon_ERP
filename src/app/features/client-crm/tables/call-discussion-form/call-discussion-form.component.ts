
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  SalesVisit,
  CallDiscussionPayload,
  CallType,
  DiscussionOutcome,
  FollowupMode
} from '../../../../core/models/client-crm.type';

import {
  OrganizationService
} from '../../../../core/services/organization.service';

import {
  ToastService
} from '../../../../core/services/toast/toast.service';

@Component({
  selector: 'app-call-discussion-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './call-discussion-form.component.html'
})
export class CallDiscussionFormComponent
implements OnInit {

  @Input({ required: true })
  lead!: SalesVisit;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  saved = new EventEmitter<void>();

  private readonly fb =
    inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);

  private readonly toast =
    inject(ToastService);

  isSubmitting = false;

  form = this.fb.nonNullable.group({

    call_date: [
      '',
      Validators.required
    ],

    call_time: [
      '',
      Validators.required
    ],

    call_type: [
      'PHONE',
      Validators.required
    ],

    duration: [
      5,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    discussion: [
      '',
      Validators.required
    ],

    requirement: [
      '',
      Validators.required
    ],

    solution: [
      '',
      Validators.required
    ],

    outcome: [
      '',
      Validators.required
    ],

    expected_amount: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    next_followup_date: [
      '',
      Validators.required
    ],

    followup_mode: [
      '',
      Validators.required
    ],

    remarks: [
      ''
    ]

  });

  ngOnInit(): void {

    const now = new Date();

    this.form.patchValue({

      call_date:
        now.toISOString().substring(0, 10),

      call_time:
        now.toTimeString().substring(0, 5)

    });

  }

  save(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      this.toast.warning(
        'Please fill all required fields.'
      );

      return;

    }

    this.isSubmitting = true;

    const raw =
      this.form.getRawValue();

    const payload: CallDiscussionPayload = {

      sales_visit_id:
        this.lead.id,

      call_date:
        raw.call_date,

      call_time:
        raw.call_time,

      call_type:
        raw.call_type as CallType,

      duration:
        Number(raw.duration),

      discussion:
        raw.discussion,

      requirement:
        raw.requirement,

      solution:
        raw.solution,

      outcome:
        raw.outcome as DiscussionOutcome,

      expected_amount:
        Number(raw.expected_amount),

      next_followup_date:
        raw.next_followup_date,

      followup_mode:
        raw.followup_mode as FollowupMode,

      remarks:
        raw.remarks

    };

    this.organizationService
      .saveCallDiscussion(
        this.lead.id,
        payload
      )
      .subscribe({

        next: () => {

          this.toast.success(
            'Call discussion submitted for approval.'
          );

          this.isSubmitting = false;

          this.saved.emit();

        },

        error: (err) => {

          console.error(err);

          this.toast.error(
            'Unable to save call discussion.'
          );

          this.isSubmitting = false;

        }

      });

  }

  cancel(): void {

    this.close.emit();

  }

}