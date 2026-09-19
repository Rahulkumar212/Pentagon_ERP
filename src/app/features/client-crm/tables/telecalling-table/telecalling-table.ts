import {
  ChangeDetectorRef,
  Component,
  Input,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Telecalling
} from '../../../../core/models/client-crm/telecalling.type';

import { CallDiscussionFormComponent } from '../call-discussion-form/call-discussion-form.component';

import { CallDiscussionViewComponent } from '../call-discussion-view/call-discussion-view.component';

// =====================================================
// FILTER TYPE
// =====================================================

type TelecallingFilter = 'ALL' | 'APPROVED' | 'REJECTED';

// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-telecalling-table',
  standalone: true,
  imports: [
    CommonModule,
    CallDiscussionFormComponent,
    CallDiscussionViewComponent
  ],
  templateUrl: './telecalling-table.html'
})
export class TelecallingTable {

  // =====================================================
  // DATA FROM PARENT
  // =====================================================

  @Input() approvedTelecalling: Telecalling[] = [];

  @Input() rejectedTelecalling: Telecalling[] = [];

  // =====================================================
  // FILTER
  // =====================================================

  activeFilter: TelecallingFilter = 'ALL';

  // =====================================================
  // FILTERED RECORDS
  // =====================================================

  get filteredTelecalling(): Telecalling[] {

    if (this.activeFilter === 'APPROVED') {
      return this.approvedTelecalling;
    }

    if (this.activeFilter === 'REJECTED') {
      return this.rejectedTelecalling;
    }

    return [
      ...this.approvedTelecalling,
      ...this.rejectedTelecalling
    ];
  }

  // =====================================================
  // SET FILTER
  // =====================================================

  setFilter(filter: TelecallingFilter): void {
    this.activeFilter = filter;
  }

  // =====================================================
  // CALL DISCUSSION MODAL STATE
  // =====================================================

  showCallModal = false;

  selectedVisit: Telecalling | null = null;

  // =====================================================
  // CALL HISTORY MODAL STATE
  // =====================================================

  showViewModal = false;

  selectedDiscussion: any = null;

  // =====================================================
  // SERVICES
  // =====================================================

  private readonly cdr = inject(ChangeDetectorRef);

  // =====================================================
  // ADD CALL
  // =====================================================

  addCall(visit: Telecalling): void {

    // Selected telecalling record
    this.selectedVisit = visit;

    // Open Call Discussion Form
    this.showCallModal = true;

    this.cdr.detectChanges();
  }

  // =====================================================
  // CLOSE CALL MODAL
  // =====================================================

  closeCallModal(): void {

    this.showCallModal = false;

    this.selectedVisit = null;
  }

  // =====================================================
  // CALL SAVED
  // =====================================================

  onUpdated(): void {

    // Close form
    this.closeCallModal();

    // Parent API data will be refreshed by parent.
    // No API call from this component.
  }

  // =====================================================
  // VIEW CALL HISTORY
  // =====================================================

  viewHistory(visit: Telecalling): void {

    // Selected telecalling record
    this.selectedVisit = visit;

    /*
     * Yahan baad mein API call kar sakte hain:
     *
     * getCallDiscussionHistory(visit.id)
     *
     * Abhi temporary selected record pass kar rahe hain.
     */

    this.selectedDiscussion = visit;

    // Open history modal
    this.showViewModal = true;
  }

  // =====================================================
  // CLOSE HISTORY MODAL
  // =====================================================

  closeViewModal(): void {

    this.showViewModal = false;

    this.selectedDiscussion = null;
  }
}