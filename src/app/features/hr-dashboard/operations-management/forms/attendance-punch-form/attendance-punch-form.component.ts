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

export interface AttendancePunch {

  employee: string;

  punchType: string;

  shift: string;

  location: string;

  remarks: string;

}

@Component({
  selector: 'app-attendance-punch-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './attendance-punch-form.component.html'
})
export class AttendancePunchFormComponent {

  @Output()
  submitForm =
    new EventEmitter<AttendancePunch>();

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

  shifts = [

    'General Shift',

    'Morning Shift',

    'Evening Shift',

    'Night Shift'

  ];

  locations = [

    'Head Office',

    'Mumbai Branch',

    'Delhi Branch',

    'Remote'

  ];

  form: AttendancePunch = {

    employee: this.employees[0],

    punchType: 'Punch In',

    shift: this.shifts[0],

    location: this.locations[0],

    remarks: ''

  };

  onSubmit(): void {

    this.submitForm.emit(this.form);

  }

  onCancel(): void {

    this.cancel.emit();

  }

}