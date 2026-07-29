import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { JournalEntryService } from '../../../../../core/services/finance/journal-entry.service';
import { LedgerEntry } from '../../../../../core/models/finance/journal-entry.model';

@Component({
  selector: 'app-ledger-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ledger-table.component.html'
})
export class LedgerTableComponent implements OnInit {

  loading = false;

  ledgerEntries: LedgerEntry[] = [];

  constructor(
    private readonly journalEntryService: JournalEntryService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadLedgerEntries();

  }

  loadLedgerEntries(): void {

    this.loading = true;

    this.journalEntryService
      .getGeneralLedger()
      .subscribe({

        next: (response: any) => {

          this.ledgerEntries = response.data.map(
            (item: any): LedgerEntry => ({

              date: item.date,

              reference: item.reference,

              account: item.account,

              description: item.description,

              debit: Number(item.debit),

              credit: Number(item.credit),

              balance: Number(item.balance)

            })
          );

          console.log(
            'Ledger Entries',
            this.ledgerEntries
          );

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load ledger entries',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  trackByLedger(
    index: number,
    item: LedgerEntry
  ): string {

    return `${item.reference}-${item.account}-${index}`;

  }

}