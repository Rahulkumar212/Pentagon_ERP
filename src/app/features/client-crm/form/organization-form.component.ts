import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { Organization } from '../models/organization.model';

@Component({
  selector: 'app-organization-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './organization-form.component.html'
})
export class OrganizationFormComponent {

  private fb = inject(FormBuilder);

  @Output() save = new EventEmitter<Organization>();
  @Output() close = new EventEmitter<void>();

  isSubmitting = false;

  organizationForm: FormGroup = this.fb.group({
    organization_name: ['', Validators.required],
    name_of_poc: ['', Validators.required],
    designation: [''],
    phoneNumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    city: [''],
    address: [''],
    notes: [''],
    priority: ['MEDIUM']
  });

  submit(): void {
    if (this.organizationForm.invalid) {
      this.organizationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const payload: Organization = this.organizationForm.value;

    // emit to parent
    this.save.emit(payload);

    this.isSubmitting = false;
  }

  closeForm(): void {
    this.close.emit();
  }
}