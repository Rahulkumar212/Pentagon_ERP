import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
  UpdateSalesVisitPayload
} from '../../../../core/models/client-crm.type';

import { OrganizationService }
  from '../../../../core/services/organization.service';

@Component({
  selector: 'app-edit-sales-visit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-sales-visit.component.html'
})
export class EditSalesVisitComponent
  implements OnInit {

  @Input({ required: true })
  visit!: SalesVisit;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  updated = new EventEmitter<void>();

  private readonly fb =
    inject(FormBuilder);

  private readonly organizationService =
    inject(OrganizationService);

  isSubmitting = false;

  form = this.fb.nonNullable.group({

    status: [
      'OPEN',
      Validators.required
    ],

    closure_date: [
      '',
      Validators.required
    ],

    basic_amount: [
      0,
      Validators.required
    ],

    remarks: ['']

  });

  ngOnInit(): void {

    this.form.patchValue({

      status: this.visit.status ?? 'OPEN',

      closure_date:
        this.visit.closure_date
          ? this.visit.closure_date.substring(0, 10)
          : '',

      basic_amount:
        this.visit.basic_amount ?? 0,

      remarks:
        this.visit.remarks ?? ''

    });

  }

  save(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    const payload: UpdateSalesVisitPayload = {

      status: this.form.value.status!,

      closure_date:
        this.form.value.closure_date!,

      basic_amount:
        Number(this.form.value.basic_amount),

      remarks:
        this.form.value.remarks ?? ''

    };

    this.isSubmitting = true;

    this.organizationService
      .updateSalesVisit(
        this.visit.id,
        payload
      )
      .subscribe({

        next: () => {

          this.isSubmitting = false;

          this.updated.emit();

        },

        error: (err) => {

          console.error(err);

          this.isSubmitting = false;

        }

      });

  }

  cancel(): void {

    this.close.emit();

  }

}