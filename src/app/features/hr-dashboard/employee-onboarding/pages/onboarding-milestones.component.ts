import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  OnboardingPreparationFormComponent,
  PreparationForm
} from '../form/onboarding-preparation-form.component';

import {
  OnboardingHeaderComponent
} from '../components/onboarding-header/onboarding-header.component';

import {
  EmployeeListComponent
} from '../components/employee-list/employee-list.component';

import {
  EmployeeProfileComponent
} from '../components/employee-profile/employee-profile.component';

import {
  ChecklistComponent
} from '../components/checklist/checklist.component';


import {
  TaskChecklist,
  EmployeeOnboard,
  EmployeeOnboardsResponse
} from '../../../../core/models/employee-onboard.type';

import {
  EmployeeOnboardService
} from '../../../../core/services/employee-onboard.service';

@Component({
  selector: 'app-onboarding-milestones',
  standalone: true,
  imports: [
    CommonModule,
    OnboardingHeaderComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    ChecklistComponent,
    OnboardingPreparationFormComponent
  ],
  templateUrl: './onboarding-milestones.component.html'
})
export class OnboardingMilestonesComponent
  implements OnInit {

  private readonly employeeOnboardService =
    inject(EmployeeOnboardService);

    private readonly cdr =
  inject(ChangeDetectorRef);

  employees: EmployeeOnboard[] = [];

  selectedEmployee: EmployeeOnboard | null = null;

  checklist: TaskChecklist[] = [];

  showPreparationForm =
    signal(false);

  ngOnInit(): void {

    this.loadEmployees();

  }

  loadEmployees(): void {

    this.employeeOnboardService
      .getEmployeeOnboards()
      .subscribe({

        next: (
          response: EmployeeOnboardsResponse
        ) => {

          this.employees = response.data;

          if (this.employees.length > 0) {

            this.selectedEmployee =
              this.employees[0];

            this.generateChecklist();

          }
          this.cdr.detectChanges();

        },

        error: err => {

          console.error(err);

        }

      });

  }

  selectEmployee(
    employee: EmployeeOnboard
  ): void {

    this.selectedEmployee = employee;

    this.generateChecklist();

     this.cdr.detectChanges();

  }

  getProgress(): number {

  if (!this.checklist.length) {

    return 0;

  }

  const completed =
    this.checklist.filter(
      item => item.completed
    ).length;

  return Math.round(
    (completed / this.checklist.length) * 100
  );

}

  generateChecklist(): void {

  if (!this.selectedEmployee) {

    this.checklist = [];

    return;

  }

  this.employeeOnboardService
    .getTaskChecklist(this.selectedEmployee.id)
    .subscribe({

      next: (response) => {

        this.checklist = response;

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(
          'Failed to load checklist',
          err
        );

      }

    });

}

toggleChecklist(
  item: TaskChecklist
): void {

  const completed = !item.completed;

  this.employeeOnboardService
    .toggleTaskChecklist(item.id, completed)
    .subscribe({

      next: () => {

        item.completed = completed;

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(err);

      }

    });

}

  isChecklistCompleted(): boolean {

    return this.checklist.every(
      item => item.completed
    );

  }

  prepareChecklist(): void {

    this.showPreparationForm.set(true);

  }

  closePreparationForm(): void {

    this.showPreparationForm.set(false);

    this.loadEmployees();

  }

  createChecklist(
    _: PreparationForm
  ): void {

    this.showPreparationForm.set(false);

    this.loadEmployees();

  }

  generateEmployeeCode(): void {

    if (!this.isChecklistCompleted()) {

      return;

    }

    const employeeCode =
      `EMP-${Math.floor(1000 + Math.random() * 9000)}`;

    console.log('Employee Code:', employeeCode);

  }

}