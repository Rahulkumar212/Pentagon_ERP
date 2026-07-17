import {
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
  EmployeeOnboard
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

  readonly employeeOnboardService =
    inject(EmployeeOnboardService);

  showPreparationForm =
    signal(false);

  ngOnInit(): void {

    this.employeeOnboardService.loadEmployees();

  }

  selectEmployee(
    employee: EmployeeOnboard
  ): void {

    this.employeeOnboardService
      .selectEmployee(employee);

  }

  toggleChecklist(
    item: TaskChecklist
  ): void {

    this.employeeOnboardService
      .toggleChecklist(item);

  }

  

  isChecklistCompleted(): boolean {

    return this.employeeOnboardService
      .checklist()
      .every(item => item.completed);

  }

  prepareChecklist(): void {

    this.showPreparationForm.set(true);

  }

  closePreparationForm(): void {

    this.showPreparationForm.set(false);

    this.employeeOnboardService.loadEmployees();

  }

  createChecklist(
    _: PreparationForm
  ): void {

    this.showPreparationForm.set(false);

    this.employeeOnboardService.loadEmployees();

  }

 generateEmployeeCode(): void {

  if (!this.isChecklistCompleted()) {
    return;
  }

  this.employeeOnboardService
    .generateEmployeeCodeForSelectedEmployee();

}

}