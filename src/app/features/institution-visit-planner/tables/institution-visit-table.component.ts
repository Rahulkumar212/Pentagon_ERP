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
  FormsModule
} from '@angular/forms';

import {
  InstitutionVisitService
} from '../../../core/services/institution-visit.service';

import {
  InstitutionVisit,
  InstitutionVisitResponse
} from '../../../core/models/institution-visit.type';

import {
  AlertService
} from '../../../core/alert/alert.service';

@Component({
  selector: 'app-institution-visit-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './institution-visit-table.component.html'
})
export class InstitutionVisitTableComponent implements OnInit {

  @Output()
  editVisitEvent =
    new EventEmitter<InstitutionVisit>();

  institutionVisits: InstitutionVisit[] = [];

  selectedType = 'ALL';

  private readonly institutionVisitService =
    inject(InstitutionVisitService);

  private readonly alert =
    inject(AlertService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {

    this.loadVisits();

  }

  loadVisits(): void {

    this.institutionVisitService
      .getInstitutionVisits()
      .subscribe({

        next: (response: InstitutionVisitResponse) => {

          this.institutionVisits =
            response.data ?? [];

          this.cdr.detectChanges();

        },

        error: err => {

          console.error(
            'Failed to fetch Institution Visits',
            err
          );

        }

      });

  }

  get filteredVisits(): InstitutionVisit[] {

    if (this.selectedType === 'ALL') {

      return this.institutionVisits;

    }

    if (this.selectedType === 'Government') {

      return this.institutionVisits.filter(visit =>

        visit.institution_type?.startsWith('GOVT_')

      );

    }

    if (this.selectedType === 'Private') {

      return this.institutionVisits.filter(visit =>

        visit.institution_type?.startsWith('PRIVATE_')

      );

    }

    return this.institutionVisits.filter(

      visit =>

        visit.institution_type === 'OTHER'

    );

  }

  editVisit(
    visit: InstitutionVisit
  ): void {

    this.editVisitEvent.emit(visit);

  }

  deleteVisit(
    visit: InstitutionVisit
  ): void {

    this.alert

      .confirm(
        'Delete Visit',
        'Are you sure?'
      )

      .then(result => {

        if (!result.isConfirmed) {

          return;

        }

        this.institutionVisitService

          .deleteInstitutionVisit(
            visit.id
          )

          .subscribe({

            next: () => {

              this.alert.success(
                'Deleted Successfully'
              );

              this.loadVisits();

            },

            error: () => {

              this.alert.error(
                'Delete Failed'
              );

            }

          });

      });

  }

  formatInstitutionType(type: string): string {

  return type
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());

}

}