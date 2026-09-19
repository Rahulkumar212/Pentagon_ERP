
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../../core/models/client-crm/sales-visit.type';

import { OrganizationService } from '../../../../core/services/organization.service';

import { CallDiscussionFormComponent } from '../call-discussion-form/call-discussion-form.component';

type PhysicalMeetingFilter =
  | 'ALL'
  | 'APPROVED'
  | 'REJECTED';

@Component({
  selector: 'app-physical-meeting-table',
  standalone: true,
  imports: [
    CommonModule,
    CallDiscussionFormComponent
  ],
  templateUrl: './physical-meeting-table.html'
})
export class PhysicalMeetingTable implements OnInit {

  @Input()
  canEdit = false;

  @Input()
  fetchType:
    | 'ALL_VISITS'
    | 'APPROVED'
    | 'REJECTED'
    = 'ALL_VISITS';

  activeFilter: PhysicalMeetingFilter = 'ALL';

  salesVisits: SalesVisit[] = [];

  selectedVisit: SalesVisit | null = null;

  selectedViewVisit: SalesVisit | null = null;

  showCallModal = false;

  showViewModal = false;

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadSalesVisits();
  }

  get filteredSalesVisits(): SalesVisit[] {

    if (this.activeFilter === 'ALL') {
      return this.salesVisits;
    }

    if (this.activeFilter === 'APPROVED') {
      return this.salesVisits.filter(
        visit => visit.status === 'APPROVED'
      );
    }

    if (this.activeFilter === 'REJECTED') {
      return this.salesVisits.filter(
        visit => visit.status === 'REJECTED'
      );
    }

    return this.salesVisits;
  }

  setFilter(
    filter: PhysicalMeetingFilter
  ): void {
    this.activeFilter = filter;
  }

  loadSalesVisits(): void {

    if (this.fetchType === 'APPROVED') {
      this.loadApprovedSalesVisits();
      return;
    }

    if (this.fetchType === 'REJECTED') {
      this.loadRejectedSalesVisits();
      return;
    }

    this.organizationService
      .fetchSalesVisits()
      .subscribe({
        next: (
          response: SalesVisitResponse
        ) => {
          this.salesVisits =
            response?.data ?? [];

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Failed to load all sales visits:',
            error
          );

          this.salesVisits = [];

          this.cdr.detectChanges();
        }
      });
  }

  private loadApprovedSalesVisits(): void {

    this.organizationService
      .fetchApprovedSalesVisits()
      .subscribe({
        next: (
          response: SalesVisitResponse
        ) => {
          this.salesVisits =
            response?.data ?? [];

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Failed to load approved sales visits:',
            error
          );

          this.salesVisits = [];

          this.cdr.detectChanges();
        }
      });
  }

  private loadRejectedSalesVisits(): void {

    this.organizationService
      .fetchRejectedSalesVisits()
      .subscribe({
        next: (
          response: SalesVisitResponse
        ) => {
          this.salesVisits =
            response?.data ?? [];

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Failed to load rejected sales visits:',
            error
          );

          this.salesVisits = [];

          this.cdr.detectChanges();
        }
      });
  }

  addCall(
    visit: SalesVisit
  ): void {
    this.selectedVisit = visit;
    this.showCallModal = true;
  }

  closeCallModal(): void {
    this.showCallModal = false;
    this.selectedVisit = null;
  }

  viewDetails(
    visit: SalesVisit
  ): void {
    this.selectedViewVisit = visit;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedViewVisit = null;
  }

  onUpdated(): void {
    this.closeCallModal();
    this.loadSalesVisits();
  }
}

