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
  SalesVisit,
  CallType,
  DiscussionOutcome,
  FollowupMode,
} from '../../../../core/models/client-crm.type';

import { OrganizationService } from '../../../../core/services/organization.service';
import { ToastService } from '../../../../core/services/toast/toast.service';

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

  @Input({ required: true })
  lead!: SalesVisit;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  saved = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);

  private readonly toast =
    inject(ToastService);

  isSubmitting = false;

  form = this.fb.nonNullable.group({

    call_date: [
      '',
      Validators.required,
    ],

    call_time: [
      '',
      Validators.required,
    ],

    call_type: [
      'PHONE',
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
      '',
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
      '',
      Validators.required,
    ],

    remarks: [
      '',
    ],

  });

  ngOnInit(): void {

    const now = new Date();

    this.form.patchValue({

      call_date: now.toISOString().split('T')[0],

      call_time: now.toTimeString().slice(0, 5),

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

    const raw = this.form.getRawValue();

    const payload = {

      call_date: raw.call_date,

      call_time: raw.call_time,

      call_type: raw.call_type as CallType,

      duration: Number(raw.duration),

      discussion: raw.discussion,

      requirement: raw.requirement,

      solution: raw.solution,

      outcome: raw.outcome as DiscussionOutcome,

      expected_amount: Number(raw.expected_amount),

      next_followup_date: raw.next_followup_date,

      followup_mode: raw.followup_mode as FollowupMode,

      remarks: raw.remarks,

    };

    this.organizationService
      .updateSalesVisit(
        this.lead.id!,
        payload as any
      )
      .subscribe({

        next: (response) => {

          console.log(
            'Sales Visit Updated',
            response
          );

          this.toast.success(
            'Call discussion submitted successfully.'
          );

          this.isSubmitting = false;

          this.saved.emit();

        },

        error: (error) => {

          console.error(error);

          this.toast.error(
            'Unable to save call discussion.'
          );

          this.isSubmitting = false;

        },

      });

  }

  cancel(): void {

    this.close.emit();

  }

}