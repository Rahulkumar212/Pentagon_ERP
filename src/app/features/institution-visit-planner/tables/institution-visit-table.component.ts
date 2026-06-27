import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  InstitutionVisitService
} from '../../../core/services/institution-visit.service';

import {
  InstitutionVisit,
  InstitutionVisitResponse
} from '../../../core/models/institution-visit.type';

@Component({
  selector: 'app-institution-visit-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './institution-visit-table.component.html'
})
export class InstitutionVisitTableComponent
implements OnInit {

   @Output()
editVisitEvent = new EventEmitter<InstitutionVisit>();


  institutionVisits: InstitutionVisit[] = [];

  private readonly institutionVisitService =
    inject(InstitutionVisitService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {

    this.loadVisits();

  }

  // ==========================
  // Fetch Institution Visits
  // ==========================

  loadVisits(): void {

    this.institutionVisitService
      .getInstitutionVisits()
      .subscribe({

        next: (
          response: InstitutionVisitResponse
        ) => {

          this.institutionVisits =
            response.data ?? [];

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(
            'Failed to fetch Institution Visits',
            err
          );

        }

      });

  }

  // ==========================
  // Edit
  // ==========================

  editVisit(
  visit: InstitutionVisit
): void {

  this.editVisitEvent.emit(visit);

}

  // ==========================
  // Delete
  // ==========================

  deleteVisit(
    visit: InstitutionVisit
  ): void {

    console.log('Delete', visit);

  }

}