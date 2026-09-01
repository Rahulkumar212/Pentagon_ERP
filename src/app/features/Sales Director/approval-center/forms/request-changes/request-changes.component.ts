
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  CHANGE_REASONS,
  RequestChangesData,
} from '../../utils/request-changes.util';

@Component({
  selector: 'app-request-changes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './request-changes.component.html',
})
export class RequestChangesComponent {

  // =====================================================
  // DEPENDENCIES
  // =====================================================

  private readonly fb = inject(FormBuilder);


  // =====================================================
  // INPUTS
  // =====================================================

  @Input() isOpen = false;

  @Input() request: RequestChangesData | null = null;


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output() closed = new EventEmitter<void>();

  @Output() submitted = new EventEmitter<{
    request: RequestChangesData;
    reason: string;
    message: string;
  }>();


  // =====================================================
  // DATA
  // =====================================================

  readonly changeReasons = CHANGE_REASONS;

  isSubmitting = false;


  // =====================================================
  // FORM
  // =====================================================

  form = this.fb.group({
    reason: [
      '',
      Validators.required,
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    ],
  });


  // =====================================================
  // CLOSE
  // =====================================================

  close(): void {

    if (this.isSubmitting) {
      return;
    }

    this.form.reset();

    this.isSubmitting = false;

    this.closed.emit();
  }


  // =====================================================
  // SUBMIT
  // =====================================================

  submit(): void {

    if (!this.request) {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const {
      reason,
      message,
    } = this.form.getRawValue();

    this.isSubmitting = true;

    this.submitted.emit({
      request: this.request,
      reason: reason!,
      message: message!,
    });
  }


  // =====================================================
  // FORM CONTROLS
  // =====================================================

  get reasonControl() {
    return this.form.controls.reason;
  }

  get messageControl() {
    return this.form.controls.message;
  }


  // =====================================================
  // CHARACTER COUNT
  // =====================================================

  get remainingCharacters(): number {

    const value =
      this.messageControl.value ?? '';

    return 500 - value.length;
  }
}

