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

import { ClientCrmService }
  from '../../../core/services/client-crm.service';

import { EditSalesVisitComponent }
  from './edit-sales-visit/edit-sales-visit.component';

@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [
    CommonModule,
    EditSalesVisitComponent
  ],
  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent
  implements OnInit {
  @Input() canEdit = false;
  @Input()
  status?: 'FAILED' | 'CONVERTED';

  @Input()
  showBillingColumns = false;



  salesVisits: SalesVisit[] = [];

  selectedVisit: SalesVisit | null = null;

  showEditModal = false;

  private readonly clientCrmService =
    inject(ClientCrmService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {

    this.loadSalesVisits();

  }

  loadSalesVisits(): void {

    this.clientCrmService
      .getSalesVisits()
      .subscribe({

        next: (response: SalesVisitResponse) => {

          const data = response.data ?? [];

          // Client CRM Page
          if (!this.canEdit) {

            this.salesVisits = data.filter(
              visit =>
                visit.status === 'CONVERTED' ||
                visit.status === 'FAILED'
            );

          }

          // Executive Center
          else {

            this.salesVisits = data;

          }

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(err);

        }

      });

  }

  editVisit(
    visit: SalesVisit
  ): void {

    this.selectedVisit = visit;

    this.showEditModal = true;

  }

  closeEditModal(): void {

    this.showEditModal = false;

    this.selectedVisit = null;

  }

  onUpdated(): void {

    this.closeEditModal();

    this.loadSalesVisits();

  }

}