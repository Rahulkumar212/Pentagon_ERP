import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { OnboardingEmployee } from '../../../../../core/models/onboarding.type';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  @Input({ required: true })
  employees: OnboardingEmployee[] = [];

  @Input({ required: true })
  selectedEmployee!: OnboardingEmployee;

  @Output()
  selectEmployee =
    new EventEmitter<OnboardingEmployee>();


  onSelectEmployee(
    employee: OnboardingEmployee
  ): void {

    this.selectEmployee.emit(employee);

  }

}