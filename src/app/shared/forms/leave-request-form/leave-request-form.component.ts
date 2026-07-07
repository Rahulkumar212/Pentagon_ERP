import {
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaveService } from '../../../core/services/leave.service';

import {
  CreateLeaveRequest,
  Leave
} from '../../../core/models/leave.model';

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

  private readonly leaveService = inject(LeaveService);

  @Output()
  submitted = new EventEmitter<Leave>();

  @Output()
  cancel = new EventEmitter<void>();

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

  form: CreateLeaveRequest = {

    applicant_name: this.employees[0],

    leave_category: this.leaveTypes[0],

    from_date: '',

    to_date: '',

    reason_absence: ''

  };

  isLoading = false;

  onSubmit(): void {

    if (

      !this.form.applicant_name ||

      !this.form.leave_category ||

      !this.form.from_date ||

      !this.form.to_date ||

      !this.form.reason_absence.trim()

    ) {

      alert('Please fill all required fields.');

      return;

    }

    this.isLoading = true;

    this.leaveService.createLeave(this.form).subscribe({

      next: (response) => {

        this.isLoading = false;

        this.submitted.emit(response.data);

        this.resetForm();

        this.cancel.emit();

      },

      error: (error) => {

        console.error('Create Leave Error:', error);

        this.isLoading = false;

      }

    });

  }

  onCancel(): void {

    this.cancel.emit();

  }

  private resetForm(): void {

    this.form = {

      applicant_name: this.employees[0],

      leave_category: this.leaveTypes[0],

      from_date: '',

      to_date: '',

      reason_absence: ''

    };

  }

}