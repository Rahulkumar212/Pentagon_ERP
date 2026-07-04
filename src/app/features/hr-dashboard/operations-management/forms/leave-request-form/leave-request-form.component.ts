import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

export interface LeaveRequest {

  employee: string;

  leaveType: string;

  fromDate: string;

  toDate: string;

  reason: string;

}

@Component({
  selector: 'app-leave-request-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './leave-request-form.component.html'
})
export class LeaveRequestFormComponent {

  @Output()
  submitForm =
    new EventEmitter<LeaveRequest>();

  @Output()
  cancel =
    new EventEmitter<void>();

  employees = [

    'Rahul Sharma',

    'Sneha Kapoor',

    'Arjun Patel',

    'Priya Iyer',

    'Rohit Singh'

  ];

  leaveTypes = [

    'Casual Leave',

    'Sick Leave',

    'Earned Leave',

    'Maternity Leave',

    'Paternity Leave',

    'Work From Home'

  ];

  form: LeaveRequest = {

    employee: this.employees[0],

    leaveType: this.leaveTypes[0],

    fromDate: '',

    toDate: '',

    reason: ''

  };

  onSubmit(): void {

    this.submitForm.emit(this.form);

  }

  onCancel(): void {

    this.cancel.emit();

  }

}