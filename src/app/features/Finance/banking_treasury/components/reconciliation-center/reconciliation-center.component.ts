import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { ManualStatementEntryComponent } from '../../forms/manual-statement-entry/manual-statement-entry.component';
import { ReconciliationAdjustmentComponent } from '../../forms/reconciliation-adjustment/reconciliation-adjustment.component';

export interface ReconciliationItem {
  date: string;
  vendor: string;
  reference: string;
  ledger: string;
  amount: number;
}

@Component({
  selector: 'app-reconciliation-center',
  standalone: true,
  imports: [
    CommonModule,
    ManualStatementEntryComponent,
    ReconciliationAdjustmentComponent
  ],
  templateUrl: './reconciliation-center.component.html'
})
export class ReconciliationCenterComponent {

  ledgerBalance = 340800;

  statementBalance = 344050;

  difference = 3250;

  auditDone = 0;

  auditTotal = 4;

  showManualStatementModal = signal(false);

  showAdjustmentModal = signal(false);

  reconciliations = signal<ReconciliationItem[]>([
    {
      date: '2026-07-16',
      vendor: 'AWS CLOUD BILL',
      reference: 'ST-001',
      ledger: 'BILL-501',
      amount: 2450
    },
    {
      date: '2026-07-15',
      vendor: 'ACME CORP WIRE',
      reference: 'ST-002',
      ledger: 'INV-2026-001',
      amount: 14500
    },
    {
      date: '2026-07-14',
      vendor: 'DELHI OFFICE RENT',
      reference: 'ST-003',
      ledger: 'BILL-503',
      amount: 12000
    },
    {
      date: '2026-07-10',
      vendor: 'VERTEX LOGISTICS',
      reference: 'ST-004',
      ledger: 'BILL-502',
      amount: 5800
    }
  ]);

  matchTransaction(item: ReconciliationItem): void {

    console.log('Matched', item);

  }

  openManualEntry(): void {

    this.showManualStatementModal.set(true);

  }

  openAdjustment(): void {

    this.showAdjustmentModal.set(true);

  }

  closeModals(): void {

    this.showManualStatementModal.set(false);

    this.showAdjustmentModal.set(false);

  }

}