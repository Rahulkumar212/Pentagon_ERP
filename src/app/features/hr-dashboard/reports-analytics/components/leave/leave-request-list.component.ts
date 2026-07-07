import {
  Component,
  OnInit,
  ChangeDetectorRef,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  LeaveService
} from '../../../../../core/services/leave.service';

import {
  Leave
} from '../../../../../core/models/leave.model';

@Component({
  selector: 'app-leave-request-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './leave-request-list.component.html'
})
export class LeaveRequestListComponent implements OnInit {

  private readonly leaveService = inject(LeaveService);

  private readonly cdr = inject(ChangeDetectorRef);

  leaveRequests: Leave[] = [];

  isLoading = false;

  ngOnInit(): void {

    this.loadLeaveRequests();

  }

  private loadLeaveRequests(): void {

    this.isLoading = true;

    this.leaveService.getLeaveApplicants().subscribe({

      next: (response) => {

        this.leaveRequests = response.data;

        this.isLoading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('Failed to fetch leave requests', error);

        this.isLoading = false;

        this.cdr.detectChanges();

      }

    });

  }

  getLeaveDays(from: string, to: string): number {

    const start = new Date(from);

    const end = new Date(to);

    const diff = end.getTime() - start.getTime();

    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

  }

}