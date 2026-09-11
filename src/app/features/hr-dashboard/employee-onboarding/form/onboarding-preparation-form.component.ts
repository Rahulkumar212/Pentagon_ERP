import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeOnboardService } from '../../../../core/services/hr/employee-onboard.service';

import {
  HiredJobApplicant,
  EmployeeOnboardPayload
} from '../../../../core/models/hr/employee-onboard.type';

export interface PreparationForm {
  jobApplicationId: number;
  employeeName: string;
  designation: string;
  joiningDate: string;
}

@Component({
  selector: 'app-onboarding-preparation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './onboarding-preparation-form.component.html'
})
export class OnboardingPreparationFormComponent
  implements OnInit {

  private readonly employeeOnboardService =
    inject(EmployeeOnboardService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  @Output()
  close = new EventEmitter<void>();

  @Output()
  createChecklist =
    new EventEmitter<PreparationForm>();

  employees: HiredJobApplicant[] = [];

  form: PreparationForm = {
  jobApplicationId: 0,
  employeeName: '',
  designation: '',
  joiningDate: ''
};

  ngOnInit(): void {
    this.loadEmployees();
  }

  // =====================================================
  // GET HIRED CANDIDATES
  // =====================================================

  loadEmployees(): void {
    this.employeeOnboardService
      .getHiredJobApplicants()
      .subscribe({
        next: (response) => {

          console.log(
            'Hired Job Applicants:',
            response
          );

          this.employees = response.data;

          this.cdr.detectChanges();
        },

        error: (err) => {
          console.error(
            'Failed to load hired candidates:',
            err
          );
        }
      });
  }

  // =====================================================
  // EMPLOYEE CHANGE
  // =====================================================

 onEmployeeChange(): void {

  const employee =
    this.employees.find(
      emp =>
        emp.id === this.form.jobApplicationId
    );

  this.form.employeeName =
    employee?.candidateName ?? '';

  this.form.designation =
    employee?.hiringRequirement?.jobTitle ?? '';

  this.cdr.detectChanges();
}

  // =====================================================
  // FORM VALIDATION
  // =====================================================

 isFormValid(): boolean {
  return (
    this.form.jobApplicationId > 0 &&
    this.form.employeeName.trim().length > 0 &&
    this.form.designation.trim().length > 0 &&
    this.form.joiningDate.trim().length > 0
  );
}

  // =====================================================
  // RESET FORM
  // =====================================================

  private resetForm(): void {

    this.form = {
      jobApplicationId: 0,
      employeeName: '',
      designation: '',
      joiningDate: ''
    };

    this.cdr.detectChanges();
  }

  // =====================================================
  // CANCEL
  // =====================================================

  onCancel(): void {
    this.resetForm();
    this.close.emit();
  }

  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    if (!this.isFormValid()) {
      return;
    }

    const payload: EmployeeOnboardPayload = {
      candidateName: this.form.employeeName,
      jobTitle: this.form.designation,
      joiningDate: this.form.joiningDate
    };

    console.log(
      'Creating Checklist:',
      payload
    );

    this.employeeOnboardService
      .createEmployeeOnboard(payload)
      .subscribe({
        next: (response) => {

          console.log(
            'Checklist Created Successfully:',
            response
          );

          this.createChecklist.emit({
            ...this.form
          });

          this.resetForm();

          this.close.emit();

          this.cdr.detectChanges();
        },

        error: (err) => {
          console.error(
            'Create Checklist Failed:',
            err
          );
        }
      });
  }
}