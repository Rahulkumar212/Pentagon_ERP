import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { SalesVisit } from '../../../../core/models/client-crm/sales-visit.type';
import { SalesVisitResponse } from '../../../../core/models/client-crm.type';

import { ClientCrmService } from '../../../../core/services/client-crm.service';

@Component({
  selector: 'app-telecalling-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './telecalling-table.html'
})
export class TelecallingTable implements OnInit {

  // ============================================
  // TELECALLING RECORDS
  // ============================================

  salesVisits: SalesVisit[] = [];

  // ============================================
  // SERVICES
  // ============================================

  private readonly clientCrmService = inject(ClientCrmService);
  private readonly cdr = inject(ChangeDetectorRef);

  // ============================================
  // INIT
  // ============================================

  ngOnInit(): void {
    this.loadTelecallingVisits();
  }

  // ============================================
  // GET SALES VISITS
  // ============================================

  loadTelecallingVisits(): void {

    this.clientCrmService.getSalesVisits().subscribe({

      next: (response: SalesVisitResponse) => {

        const data = response.data ?? [];
        console.log('Loaded telecalling visits:', data);

        // Only TELECALL records
        // this.salesVisits = data.filter(
        //   visit => visit.visit_type === 'TELECALL'
        // );

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error(
          'Failed to load telecalling visits:',
          error
        );

        this.salesVisits = [];

        this.cdr.detectChanges();
      }

    });
  }
}