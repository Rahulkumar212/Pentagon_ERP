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
} from '../../../core/models/client-crm.type';

import {
  ClientCrmService
} from '../../../core/services/client-crm.service';


import {
  CallDiscussionViewComponent
} from './call-discussion-view/call-discussion-view.component';
import { CallDiscussionFormComponent } from './call-discussion-form/call-discussion-form.component';

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
export class OrganizationTableComponent
implements OnInit {

  @Input()
  canEdit = false;

  @Input()
  status?: 'FAILED' | 'CONVERTED';

  @Input()
  showBillingColumns = false;

  @Input()
  fetchType: 'MY_VISITS' | 'ALL_VISITS' = 'MY_VISITS';

  salesVisits: SalesVisit[] = [];

  selectedVisit: SalesVisit | null = null;

  // Add Call Modal
  showCallModal = false;

  // View Modal
  showViewModal = false;

  private readonly clientCrmService =
    inject(ClientCrmService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {

    this.loadSalesVisits();

  }

  loadSalesVisits(): void {

    const request$ =
      this.fetchType === 'ALL_VISITS'
        ? this.clientCrmService.getSalesAllVisits()
        : this.clientCrmService.getSalesVisits();

    request$.subscribe({

      next: (response: SalesVisitResponse) => {

        const data = response.data ?? [];

        if (!this.canEdit) {

          this.salesVisits = data.filter(
            visit =>
              visit.status === 'CONVERTED' ||
              visit.status === 'FAILED'
          );

        } else {

          this.salesVisits = data;

        }

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(err);

      }

    });

  }

  // ==========================
  // Add Call
  // ==========================

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

  // ==========================
  // View
  // ==========================

  viewHistory(
    visit: SalesVisit
  ): void {

    this.selectedVisit = visit;

    this.showViewModal = true;

  }

  closeViewModal(): void {

    this.showViewModal = false;

    this.selectedVisit = null;

  }

  // ==========================

  onUpdated(): void {

    this.closeCallModal();

    this.loadSalesVisits();

  }

}