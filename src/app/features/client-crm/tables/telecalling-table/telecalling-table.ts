import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../../core/models/client-crm/sales-visit.type';

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

  private readonly clientCrmService =
    inject(ClientCrmService);

  private readonly cdr =
    inject(ChangeDetectorRef);


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


        // ============================================
        // ONLY TELECALLING RECORDS
        // ============================================

       this.salesVisits = data.filter(
  visit => visit.visit_type === 'TELECALL'
);

        // ============================================
        // UPDATE VIEW
        // ============================================

        this.cdr.detectChanges();

      },


      // ============================================
      // ERROR
      // ============================================

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