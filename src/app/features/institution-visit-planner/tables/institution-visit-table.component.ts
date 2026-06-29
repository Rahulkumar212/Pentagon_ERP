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
import { AlertService } from '../../../core/alert/alert.service';

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
  editVisitEvent =
    new EventEmitter<InstitutionVisit>();

  institutionVisits: InstitutionVisit[] = [];

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

}