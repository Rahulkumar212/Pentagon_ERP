import {
  Component,
  Signal,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';


import {
  OnboardingPreparationFormComponent,
  PreparationForm
} from '../form/onboarding-preparation-form.component';
import { OnboardingHeaderComponent } from '../components/onboarding-header/onboarding-header.component';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeProfileComponent } from '../components/employee-profile/employee-profile.component';
import { ChecklistComponent } from '../components/checklist/checklist.component';
import { ChecklistItem } from '../../../../core/models/onboarding.type';
import { OnboardingService } from '../../../../core/services/onboarding.service';

export interface OnboardingEmployee {

  name: string;

  designation: string;

  department: string;

  joiningDate: string;

  progress: number;

  status: string;

  avatar: string;

}

@Component({
  selector: 'app-onboarding-milestones',
  standalone: true,
  imports: [
    CommonModule,
    OnboardingHeaderComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    ChecklistComponent,
    OnboardingPreparationFormComponent,
  ],
  templateUrl: './onboarding-milestones.component.html'
})
export class OnboardingMilestonesComponent {

  // ===========================================
  // Employees
  // ===========================================

  onboardingEmployees!: Signal<OnboardingEmployee[]>;

  selectedEmployee!: OnboardingEmployee;

  checklist: ChecklistItem[] = [];

  showPreparationForm =
    signal(false);


    constructor(
    private readonly onboardingService: OnboardingService
  ) {

    this.onboardingEmployees =
      this.onboardingService.getEmployees();

    this.selectedEmployee =
      this.onboardingEmployees()[0];

    this.generateChecklist();

  }


  // ===========================================
  // Employee Selection
  // ===========================================

  selectEmployee(
    employee: OnboardingEmployee
  ): void {

    this.selectedEmployee = employee;

    this.generateChecklist();

  }

  // ===========================================
  // Checklist
  // ===========================================

  generateChecklist(): void {

    const progress =
      this.selectedEmployee.progress;

    this.checklist = [

      {
        title: 'Submit Documents',
        category: 'DOCUMENT',
        completed: progress >= 20
      },

      {
        title: 'Create Email Account',
        category: 'IT',
        completed: progress >= 40
      },

      {
        title: 'Laptop Allocation',
        category: 'ASSET',
        completed: progress >= 60
      },

      {
        title: 'HR Induction',
        category: 'INDUCTION',
        completed: progress >= 80
      },

      {
        title: 'Manager Introduction',
        category: 'MEETING',
        completed: progress >= 100
      }

    ];

  }

  toggleChecklist(
    item: ChecklistItem
  ): void {

    item.completed =
      !item.completed;

    const completed =
      this.checklist.filter(
        x => x.completed
      ).length;

    this.selectedEmployee.progress =
      Math.round(
        (completed / this.checklist.length) * 100
      );

    if (this.selectedEmployee.progress === 100) {

      this.selectedEmployee.status =
        'Completed';

    }

    else if (this.selectedEmployee.progress >= 80) {

      this.selectedEmployee.status =
        'Almost Complete';

    }

    else if (this.selectedEmployee.progress >= 60) {

      this.selectedEmployee.status =
        'HR Induction Pending';

    }

    else if (this.selectedEmployee.progress >= 40) {

      this.selectedEmployee.status =
        'Asset Allocation Pending';

    }

    else if (this.selectedEmployee.progress >= 20) {

      this.selectedEmployee.status =
        'Documents Pending';

    }

    else {

      this.selectedEmployee.status =
        'Joining Formalities';

    }

  }

  isChecklistCompleted(): boolean {

    return this.checklist.every(
      item => item.completed
    );

  }

  // ===========================================
  // Preparation Form
  // ===========================================

  prepareChecklist(): void {

    this.showPreparationForm.set(true);

  }

  closePreparationForm(): void {

    this.showPreparationForm.set(false);

  }

  createChecklist(
    data: PreparationForm
  ): void {

    const newEmployee: OnboardingEmployee = {

      name: data.employeeName,

      designation: data.designation,

      department: 'Not Assigned',

      joiningDate: data.joiningDate,

      progress: 0,

      status: 'Joining Formalities',

      avatar: data.employeeName.charAt(0).toUpperCase()

    };

    this.selectedEmployee = newEmployee;

    this.generateChecklist();

    this.onboardingService.addEmployee(newEmployee);

    this.showPreparationForm.set(false);

  }

  // ===========================================
  // Employee Code
  // ===========================================

  generateEmployeeCode(): void {

    if (!this.isChecklistCompleted()) {

      return;

    }

    const employeeCode =
      'EMP-' +
      Math.floor(
        1000 + Math.random() * 9000
      );

    console.log(
      'Employee Code:',
      employeeCode
    );

  }

}