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
  Employee
} from '../../../../../core/models/employee.type';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-card.component.html'
})
export class EmployeeCardComponent {

  @Input({ required: true })
  employee!: Employee;

  @Output()
  viewProfile = new EventEmitter<Employee>();

  openProfile(): void {

    this.viewProfile.emit(this.employee);

  }

}