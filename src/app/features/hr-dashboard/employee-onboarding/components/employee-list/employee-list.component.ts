import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { OnboardingEmployee } from '../../../../../core/models/onboarding.type';
import { OnboardingService } from '../../../../../core/services/onboarding.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  constructor(

  public onboardingService: OnboardingService

) {}

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