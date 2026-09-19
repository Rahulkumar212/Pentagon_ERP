import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ApprovalHistoryItem } from '../../utils/approval-history.data';

import { OrganizationService } from '../../../../../core/services/organization.service';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../../../core/models/client-crm/sales-visit.type';

type HistoryFilter = 'ALL' | 'PHYSICAL_MEETING' | 'TELECALLING';

@Component({
  selector: 'app-approval-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval-history.component.html',
})
export class ApprovalHistoryComponent implements OnInit {

  history: ApprovalHistoryItem[] = [];

  // =====================================================
  // API DATA
  // =====================================================

  physicalMeetingRecords: SalesVisit[] = [];

  telecallingRecords: any[] = [];

  // =====================================================
  // FILTER
  // =====================================================

  activeFilter: HistoryFilter = 'ALL';

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.fetchApprovedSalesVisits();
    this.fetchCallDiscussionAndTelecalling();
  }

  // =====================================================
  // APPROVED PHYSICAL MEETINGS
  // =====================================================

  fetchApprovedSalesVisits(): void {
    this.organizationService
      .getApprovedSalesVisits()
      .subscribe({
        next: (response: SalesVisitResponse) => {

          console.log(
            'Approved Physical Meetings:',
            response
          );

          this.physicalMeetingRecords =
            response?.data ?? [];

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Failed to fetch approved sales visits:',
            error
          );

          this.physicalMeetingRecords = [];
        }
      });
  }

  // =====================================================
  // TELECALLING
  // =====================================================

  fetchCallDiscussionAndTelecalling(): void {
    this.organizationService
      .getCallDiscussionAndTelecalling()
      .subscribe({
        next: (response: any) => {

          console.log(
            'Call Discussion + Telecalling:',
            response
          );

          this.telecallingRecords =
            response?.data ?? [];

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Failed to fetch call discussion and telecalling:',
            error
          );

          this.telecallingRecords = [];
        }
      });
  }

  // =====================================================
  // FILTER
  // =====================================================

  setFilter(filter: HistoryFilter): void {
    this.activeFilter = filter;
  }

  // =====================================================
  // FILTERED DATA
  // =====================================================

  get filteredRecords(): any[] {

    if (this.activeFilter === 'PHYSICAL_MEETING') {
      return this.physicalMeetingRecords;
    }

    if (this.activeFilter === 'TELECALLING') {
      return this.telecallingRecords;
    }

    return [
      ...this.physicalMeetingRecords,
      ...this.telecallingRecords
    ];
  }

  // =====================================================
  // TOTAL COUNT
  // =====================================================

  get totalRecords(): number {
    return this.filteredRecords.length;
  }

  // =====================================================
  // CURRENCY
  // =====================================================

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }
}