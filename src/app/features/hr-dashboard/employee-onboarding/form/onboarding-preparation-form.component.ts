import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  EmployeeOnboardService
} from '../../../../core/services/employee-onboard.service';

import {
  EmployeeNameDesignation,
  EmployeeOnboardPayload
} from '../../../../core/models/employee-onboard.type';

export interface PreparationForm {

  employeeId: number;

  employeeName:string;

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
export class OnboardingPreparationFormComponent implements OnInit {

  private readonly employeeOnboardService =
    inject(EmployeeOnboardService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  @Output()
  close =
    new EventEmitter<void>();

  @Output()
  createChecklist =
    new EventEmitter<PreparationForm>();

  employees: EmployeeNameDesignation[] = [];

  form: PreparationForm = {

    employeeId: 0,

    employeeName:'',

    designation: '',

    joiningDate: ''

  };

  ngOnInit(): void {

    this.loadEmployees();

  }

  loadEmployees(): void {

    this.employeeOnboardService
      .getEmployeeNameDesignation()
      .subscribe({

        next: (response) => {

          this.employees = response.data;

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(err);

        }

      });

  }

  onEmployeeChange(): void {

    const employee = this.employees.find(

      emp => emp.id === this.form.employeeId

    );

    this.form.designation =
      employee?.designation ?? '';

    this.cdr.detectChanges();

  }

  isFormValid(): boolean {

    return (

      this.form.employeeId > 0 &&

      this.form.joiningDate.trim().length > 0

    );

  }

  private resetForm(): void {

    this.form = {

      employeeId: 0,

      employeeName:'',

      designation: '',

      joiningDate: ''

    };

    this.cdr.detectChanges();

  }

  onCancel(): void {

    this.resetForm();

    this.close.emit();

  }

  onSubmit(): void {

    if (!this.isFormValid()) {

      return;

    }

    const payload: EmployeeOnboardPayload = {

      employeeId: this.form.employeeId,

      joiningDate: this.form.joiningDate

    };

    console.log('Creating Checklist...', payload);

    this.employeeOnboardService
      .createEmployeeOnboard(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Checklist Created Successfully',
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
            'Create Checklist Failed',
            err
          );

        }

      });

  }

}