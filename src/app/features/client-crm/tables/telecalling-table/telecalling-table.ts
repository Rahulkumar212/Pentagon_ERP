import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Telecalling,
  TelecallingResponse
} from '../../../../core/models/client-crm/telecalling.type';

import {
  OrganizationService
} from '../../../../core/services/organization.service';
import { CallDiscussionFormComponent } from '../call-discussion-form/call-discussion-form.component';
import { CallDiscussionViewComponent } from '../call-discussion-view/call-discussion-view.component';


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
export class TelecallingTable implements OnInit {

  // =====================================================
  // STATE
  // =====================================================

  telecallingRecords: Telecalling[] = [];


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

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.loadTelecalling();

  }


  // =====================================================
  // LOAD TELECALLING
  // =====================================================

  loadTelecalling(): void {

    this.organizationService
      .fetchTelecalling()
      .subscribe({

        // -------------------------------------------------
        // SUCCESS
        // -------------------------------------------------

        next: (response: TelecallingResponse) => {

          this.telecallingRecords =
            response.data ?? [];

          this.cdr.detectChanges();

        },


        // -------------------------------------------------
        // ERROR
        // -------------------------------------------------

        error: (error) => {

          console.error(
            'Failed to load telecalling records:',
            error
          );

          this.telecallingRecords = [];

          this.cdr.detectChanges();

        }

      });

  }


  // =====================================================
  // ADD CALL
  // =====================================================

  addCall(visit: Telecalling): void {

    // Selected telecalling record
    this.selectedVisit = visit;

    // Open Call Discussion Form
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
  // CALL SAVED
  // =====================================================

  onUpdated(): void {

    // Close form
    this.closeCallModal();

    // Reload telecalling records
    this.loadTelecalling();

  }


  // =====================================================
  // VIEW CALL HISTORY
  // =====================================================

  viewHistory(visit: Telecalling): void {

    // Selected telecalling record
    this.selectedVisit = visit;

    /*
     * Yahan baad mein API call karenge:
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