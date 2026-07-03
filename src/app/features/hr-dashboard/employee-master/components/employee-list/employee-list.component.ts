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
  Employee,
  EmployeeCardComponent
} from '../employee-card/employee-card.component';

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
viewProfile =
  new EventEmitter<Employee>();

openProfile(
  employee: Employee
): void {

  this.viewProfile.emit(employee);

}

}