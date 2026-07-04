import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-approvals',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './leave-approvals.component.html'
})
export class LeaveApprovalsComponent {

  constructor(private readonly router:Router){};

  leaveRequests = [

    {

      employee: 'Priya Iyer',

      designation: 'HR Specialist',

      leaveType: 'Casual Leave',

      duration: '2 Days',

      date: '2026-06-29 to 2026-06-30',

      remarks: 'Family function.',

      avatar: 'P'

    },

    {

      employee: 'Aanya Sharma',

      designation: 'Senior Software Engineer',

      leaveType: 'Casual Leave',

      duration: '2 Days',

      date: '2026-07-02 to 2026-07-03',

      remarks: 'Personal work.',

      avatar: 'A'

    },

    {

      employee: 'Diya Sen',

      designation: 'Software Engineer',

      leaveType: 'Sick Leave',

      duration: '1 Day',

      date: '2026-06-28',

      remarks: 'Doctor advised rest.',

      avatar: 'D'

    }

  ];

  getToLogs():void {
    this.router.navigate(["/daily-operations"]);
  }

  approveLeave(request: any): void {

    console.log(
      'Approved',
      request
    );

  }

  rejectLeave(request: any): void {

    console.log(
      'Rejected',
      request
    );

  }

}