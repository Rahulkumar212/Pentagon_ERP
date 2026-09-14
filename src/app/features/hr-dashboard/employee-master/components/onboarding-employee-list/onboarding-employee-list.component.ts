import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  EmployeeOnboard
} from '../../../../../core/models/hr/employee-onboard.type';

@Component({
  selector: 'app-onboarding-employee-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './onboarding-employee-list.component.html'
})
export class OnboardingEmployeeListComponent {

  @Input({ required: true })
  employees: EmployeeOnboard[] = [];

  @Output()
  selectEmployee =
    new EventEmitter<EmployeeOnboard>();

  onSelectEmployee(
    employee: EmployeeOnboard
  ): void {

    this.selectEmployee.emit(employee);

  }

}