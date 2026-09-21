
import {
  ChangeDetectorRef,
  Component,
  Input,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Telecalling } from '../../../../core/models/client-crm/telecalling.type';

import { CallDiscussionFormComponent } from '../call-discussion-form/call-discussion-form.component';

type TelecallingFilter = 'ALL' | 'APPROVED' | 'REJECTED';

@Component({
  selector: 'app-telecalling-table',
  standalone: true,
  imports: [
    CommonModule,
    CallDiscussionFormComponent
  ],
  templateUrl: './telecalling-table.html'
})
export class TelecallingTable {

  @Input() approvedTelecalling: Telecalling[] = [];
  @Input() rejectedTelecalling: Telecalling[] = [];

  activeFilter: TelecallingFilter = 'ALL';

  showCallModal = false;
  selectedVisit: Telecalling | null = null;

  showViewModal = false;
  selectedViewVisit: Telecalling | null = null;

  private readonly cdr = inject(ChangeDetectorRef);

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

  setFilter(filter: TelecallingFilter): void {
    this.activeFilter = filter;
  }

  addCall(visit: Telecalling): void {
    if (visit.status !== 'APPROVED') {
      return;
    }

    this.selectedVisit = visit;
    this.showCallModal = true;

    this.cdr.detectChanges();
  }

  closeCallModal(): void {
    this.showCallModal = false;
    this.selectedVisit = null;
  }

  onUpdated(): void {
    this.closeCallModal();
  }

  viewDetails(visit: Telecalling): void {
    this.selectedViewVisit = visit;
    this.showViewModal = true;

    this.cdr.detectChanges();
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedViewVisit = null;
  }
}

