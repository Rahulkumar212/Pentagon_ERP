import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface RequisitionFormData {

  title: string;

  department: string;

  employmentType: string;

  description: string;

}

@Component({
  selector: 'app-requisition-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './requisition-form.component.html'
})
export class RequisitionFormComponent {

  // ==========================
  // Outputs
  // ==========================

  @Output()
  close = new EventEmitter<void>();

  @Output()
  submit = new EventEmitter<RequisitionFormData>();

  // ==========================
  // Form Fields
  // ==========================

  jobTitle = '';

  department = 'Engineering';

  employmentType = 'Full-time';

  description = '';

  // ==========================
  // Close Form
  // ==========================

  onClose(): void {
    this.close.emit();
  }

  // ==========================
  // Submit Form
  // ==========================

  onSubmit(): void {

    const formData: RequisitionFormData = {

      title: this.jobTitle.trim(),

      department: this.department,

      employmentType: this.employmentType,

      description: this.description.trim()

    };

    this.submit.emit(formData);

  }

}