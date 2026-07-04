import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

interface LeaveRequest {

  employee: string;

  category: string;

  fromDate: string;

  toDate: string;

  days: number;

  status: string;

}

@Component({
  selector: 'app-leave-request-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './leave-request-list.component.html'
})
export class LeaveRequestListComponent {

  leaveRequests: LeaveRequest[] = [

    {
      employee: 'Aanya Sharma',
      category: 'Annual Leave',
      fromDate: '08 Jul 2026',
      toDate: '10 Jul 2026',
      days: 3,
      status: 'Pending'
    },

    {
      employee: 'Rahul Sharma',
      category: 'Sick Leave',
      fromDate: '18 Jun 2026',
      toDate: '19 Jun 2026',
      days: 2,
      status: 'Approved'
    },

    {
      employee: 'Priya Iyer',
      category: 'Casual Leave',
      fromDate: '22 Jun 2026',
      toDate: '22 Jun 2026',
      days: 1,
      status: 'Rejected'
    },

    {
      employee: 'Kabir Malhotra',
      category: 'Work From Home',
      fromDate: '30 Jun 2026',
      toDate: '30 Jun 2026',
      days: 1,
      status: 'Approved'
    }

  ];

}