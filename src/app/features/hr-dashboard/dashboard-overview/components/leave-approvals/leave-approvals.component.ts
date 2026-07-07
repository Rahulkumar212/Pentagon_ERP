import {
  Component,
  OnInit,
  ChangeDetectorRef,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { LeaveService } from '../../../../../core/services/leave.service';
import { Leave } from '../../../../../core/models/leave.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-approvals',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './leave-approvals.component.html'
})
export class LeaveApprovalsComponent implements OnInit {

  private readonly leaveService = inject(LeaveService);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(
    private readonly router: Router
  ) { }

  leaveRequests: Leave[] = [];

  showRejectModal = false;

  rejectReason = '';

  selectedLeave: Leave | null = null;

  isLoading = false;

  ngOnInit(): void {

    this.loadLeaveRequests();

  }

  private loadLeaveRequests(): void {

    this.isLoading = true;

    this.leaveService.getLeaves().subscribe({

      next: (response) => {

        this.leaveRequests = [...response.data];

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

  getToLogs(): void {

    this.router.navigate(['/daily-operations']);

  }

  approveLeave(leave: Leave): void {

  this.leaveService.updateLeave(leave.id!, {

    leave_approve: 'APPROVED'

  }).subscribe({

    next: (response) => {

      const index = this.leaveRequests.findIndex(
        item => item.id === leave.id
      );

      if (index !== -1) {
        this.leaveRequests[index] = response.data;
      }

    },

    error: (error) => {
      console.error('Approve Error:', error);
    }

  });

}

  rejectLeave(request: Leave): void {

    console.log('Rejected', request);

  }

  openRejectModal(leave: Leave): void {

  this.selectedLeave = leave;

  this.rejectReason = '';

  this.showRejectModal = true;

}

closeRejectModal(): void {

  this.showRejectModal = false;

  this.rejectReason = '';

  this.selectedLeave = null;

}

confirmReject(): void {

  if (!this.selectedLeave) {
    return;
  }

  if (!this.rejectReason.trim()) {

    alert('Please enter rejection reason.');

    return;

  }

  this.leaveService.updateLeave(this.selectedLeave.id!, {

    leave_approve: 'REJECTED',

    reason_reject: this.rejectReason

  }).subscribe({

    next: (response) => {

      const index = this.leaveRequests.findIndex(
        item => item.id === this.selectedLeave!.id
      );

      if (index !== -1) {
        this.leaveRequests[index] = response.data;
      }

      this.closeRejectModal();

    },

    error: (error) => {

      console.error('Reject Error:', error);

    }

  });

}

}