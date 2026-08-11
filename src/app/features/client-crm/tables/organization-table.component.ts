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
  SalesVisitResponse,
  CallDiscussion,
  CallDiscussionResponse
} from '../../../core/models/client-crm.type';

import {
  ClientCrmService
} from '../../../core/services/client-crm.service';

import {
  OrganizationService
} from '../../../core/services/organization.service';

import {
  CallDiscussionFormComponent
} from './call-discussion-form/call-discussion-form.component';

import {
  CallDiscussionViewComponent
} from './call-discussion-view/call-discussion-view.component';

@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [
    CommonModule,
    CallDiscussionFormComponent,
    CallDiscussionViewComponent
  ],
  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent implements OnInit {

  @Input()
  canEdit = false;

  @Input()
  status?: 'FAILED' | 'CONVERTED';

  @Input()
  fetchType: 'MY_VISITS' | 'ALL_VISITS' = 'MY_VISITS';

  salesVisits: SalesVisit[] = [];

  selectedVisit: SalesVisit | null = null;

  selectedDiscussion: CallDiscussion | null = null;

  showCallModal = false;

  showViewModal = false;

  private readonly clientCrmService =
    inject(ClientCrmService);

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {
    this.loadSalesVisits();
  }

  // =====================================================
  // LOAD SALES VISITS
  // =====================================================

  loadSalesVisits(): void {

    const request$ =
      this.fetchType === 'ALL_VISITS'
        ? this.clientCrmService.getSalesAllVisits()
        : this.clientCrmService.getSalesVisits();

    request$.subscribe({

      next: (response: SalesVisitResponse) => {

        const data = response.data ?? [];

        /*
         * Physical Meeting table me sirf
         * visit_type = COLD records dikhayenge.
         */
        let physicalVisits = data.filter(
          visit => visit.visit_type === 'COLD'
        );

        /*
         * Agar user/editor nahi hai,
         * to sirf CONVERTED / FAILED records dikhayenge.
         */
        if (!this.canEdit) {

          physicalVisits = physicalVisits.filter(
            visit =>
              visit.status === 'CONVERTED' ||
              visit.status === 'FAILED'
          );
        }

        /*
         * Optional status filter.
         *
         * Agar parent component se status diya gaya hai,
         * to uske according bhi filter karenge.
         */
        if (this.status) {

          physicalVisits = physicalVisits.filter(
            visit => visit.status === this.status
          );
        }

        this.salesVisits = physicalVisits;

        this.cdr.detectChanges();
      },

      error: err => {
        console.error(
          'Failed to load physical sales visits:',
          err
        );
      }

    });
  }

  // =====================================================
  // ADD CALL
  // =====================================================

  addCall(visit: SalesVisit): void {

    this.selectedVisit = visit;

    this.showCallModal = true;
  }

  // =====================================================
  // CLOSE CALL MODAL
  // =====================================================

  closeCallModal(): void {

    this.showCallModal = false;

    this.selectedVisit = null;
  }

  // =====================================================
  // VIEW CALL HISTORY
  // =====================================================

  viewHistory(visit: SalesVisit): void {

    this.organizationService
      .getCallDiscussionHistory(visit.id)
      .subscribe({

        next: (response: CallDiscussionResponse) => {

          this.selectedDiscussion =
            response.data?.[0] ?? null;

          this.showViewModal =
            this.selectedDiscussion !== null;
        },

        error: err => {

          console.error(
            'Failed to load call discussion history:',
            err
          );

        }

      });
  }

  // =====================================================
  // CLOSE VIEW MODAL
  // =====================================================

  closeViewModal(): void {

    this.showViewModal = false;

    this.selectedDiscussion = null;
  }

  // =====================================================
  // AFTER CALL UPDATED
  // =====================================================

  onUpdated(): void {

    this.closeCallModal();

    this.loadSalesVisits();
  }
}