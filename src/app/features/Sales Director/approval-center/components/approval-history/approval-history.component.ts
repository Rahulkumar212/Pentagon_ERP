import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ApprovalHistoryItem,
  SALES_DIRECTOR_APPROVAL_HISTORY
} from '../../utils/approval-history.data';

import { OrganizationService } from '../../../../../core/services/organization.service';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../../../core/models/client-crm/sales-visit.type';

@Component({
  selector: 'app-approval-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval-history.component.html',
})
export class ApprovalHistoryComponent implements OnInit {

  history: ApprovalHistoryItem[] =
    SALES_DIRECTOR_APPROVAL_HISTORY;

  salesVisits: SalesVisit[] = [];

  private readonly organizationService =
    inject(OrganizationService);

     private readonly cdr =
  inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.fetchSalesVisits();
  }

  fetchSalesVisits(): void {
    this.organizationService
      .fetchSalesVisits()
      .subscribe({
        next: (response: SalesVisitResponse) => {
          console.log('Sales Visits:', response);

          this.salesVisits =
            response.data ?? [];

            this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Failed to fetch sales visits:',
            error
          );
        }
      });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }
}