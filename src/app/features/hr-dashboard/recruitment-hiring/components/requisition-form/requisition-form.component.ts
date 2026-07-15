import {
  Component,
  EventEmitter,
  inject,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HiringRequirementService } from '../../../../../core/services/hiring-requirement.service';
import { CreateHiringRequirementPayload } from '../../../../../core/models/hiring-requirement.type';


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

  private readonly hiringRequirementService = inject(HiringRequirementService)

  // ==========================
  // Outputs
  // ==========================

  @Output()
  close = new EventEmitter<void>();

  @Output()
  created = new EventEmitter<void>();

  @Output()
submit =
  new EventEmitter<CreateHiringRequirementPayload>();

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

    const payload: CreateHiringRequirementPayload = {

      jobTitle: this.jobTitle.trim(),

      department: this.department,

      employmentType: this.employmentType,

      description: this.description.trim()

    };

    this.hiringRequirementService.createHiringRequirement(payload).subscribe({
      next:() => {
        this.created.emit();
        this.onClose();
      },
      error:err => {
        console.log(err);
      }
    })

  }

}