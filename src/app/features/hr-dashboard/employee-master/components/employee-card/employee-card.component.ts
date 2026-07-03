import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

export interface Employee {

  employeeCode: string;

  name: string;

  designation: string;

  department: string;

  status: 'Active' | 'Probation' | 'On Leave';

  rating: number;

  attendance: number;

  avatar: string;

  email: string;

  mobileNumber: string;

  joiningDate: string;

  reportingOfficer: string;

  bankName: string;

  accountNumber: string;

  salary: number;

  panNumber: string;

  aadhaarNumber: string;

  kraGoal: string;

  kraProgress: number;

}

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