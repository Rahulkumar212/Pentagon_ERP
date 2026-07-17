import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  EmployeeOnboard
} from '../../../../../core/models/employee-onboard.type';
import { EmployeeOnboardService } from '../../../../../core/services/employee-onboard.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  @Input({ required: true })
  employees: EmployeeOnboard[] = [];

  @Input({ required: true })
  selectedEmployee!: EmployeeOnboard;

  @Input()
  progress = 0;

  @Output()
  selectEmployee =
    new EventEmitter<EmployeeOnboard>();

     readonly onboardingService =
    inject(EmployeeOnboardService);

  onSelectEmployee(
    employee: EmployeeOnboard
  ): void {

    this.selectEmployee.emit(employee);

  }

}