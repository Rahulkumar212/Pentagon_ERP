import {
  Component,
  EventEmitter,
  inject,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  HiringRequirementService
} from '../../../../../core/services/hr/hiring-requirement.service';

import {
  CreateHiringRequirementPayload
} from '../../../../../core/models/hr/hiring-requirement.type';


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

  // =====================================================
  // SERVICE
  // =====================================================

  private readonly hiringRequirementService =
    inject(HiringRequirementService);


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  close = new EventEmitter<void>();

  @Output()
  created = new EventEmitter<void>();

  @Output()
  submit =
    new EventEmitter<CreateHiringRequirementPayload>();


  // =====================================================
  // FORM FIELDS
  // =====================================================

  jobTitle = '';

  department = '';

  employmentType = '';

  openings = 1;

  experienceRequired = '';

  qualification = '';

  location = '';

  salaryRange = '';

  applicationDeadline = '';

  hiringManager = '';

  description = '';


  // =====================================================
  // CLOSE
  // =====================================================

  onClose(): void {

    this.close.emit();

  }


  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    // ---------------------------------------------------
    // VALIDATION
    // ---------------------------------------------------

    if (
      !this.jobTitle.trim() ||
      !this.department ||
      !this.employmentType ||
      !this.location.trim() ||
      !this.description.trim()
    ) {

      return;

    }


    // ---------------------------------------------------
    // LOCATION ARRAY
    // ---------------------------------------------------

    const locations: string[] =
      this.location
        .split(',')
        .map(location => location.trim())
        .filter(location => location.length > 0);


    // ---------------------------------------------------
    // PAYLOAD
    // ---------------------------------------------------

    const payload: CreateHiringRequirementPayload = {

      jobTitle:
        this.jobTitle.trim(),

      department:
        this.department,

      employmentType:
        this.employmentType,

      openings:
        Number(this.openings),

      experienceRequired:
        this.experienceRequired.trim(),

      qualification:
        this.qualification.trim(),

      location:
        locations,

      salaryRange:
        this.salaryRange.trim(),

      applicationDeadline:
        this.applicationDeadline,

      hiringManager:
        this.hiringManager.trim(),

      description:
        this.description.trim()
    };


    // ---------------------------------------------------
    // DEBUG
    // ---------------------------------------------------

    console.log(
      'Create Hiring Requirement Payload:',
      payload
    );


    // ===================================================
    // API CALL
    // ===================================================

    this.hiringRequirementService
      .createHiringRequirement(payload)
      .subscribe({

        // -------------------------------------------------
        // SUCCESS
        // -------------------------------------------------

        next: () => {

          this.created.emit();

          this.onClose();

        },


        // -------------------------------------------------
        // ERROR
        // -------------------------------------------------

        error: (error) => {

          console.error(
            'Failed to create hiring requirement:',
            error
          );

        }

      });

  }

}