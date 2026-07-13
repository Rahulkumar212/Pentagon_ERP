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
  EmployeeCardComponent
} from '../employee-card/employee-card.component';

import {
  Employee
} from '../../../../../core/models/employee.type';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeCardComponent
  ],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  @Input({ required: true })
  employees: Employee[] = [];

  @Output()
  viewProfile = new EventEmitter<Employee>();

  openProfile(
    employee: Employee
  ): void {

    this.viewProfile.emit(employee);

  }

}