import {
  CommonModule
} from '@angular/common';

import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { JournalEntryService } from '../../../../../core/services/finance/journal-entry.service';
import { JournalEntry } from '../../../../../core/models/finance/journal-entry.model';

@Component({
  selector: 'app-journal-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './journal-table.component.html'
})
export class JournalTableComponent implements OnInit {

  journals: JournalEntry[] = [];

  loading = false;

  constructor(
    private readonly journalEntryService: JournalEntryService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadJournalEntries();

  }

  loadJournalEntries(): void {

    this.loading = true;

    this.journalEntryService
      .getJournalEntries()
      .subscribe({

        next: (response: any) => {

          this.journals = response.data.map((item: any) => ({

            ...item,

            amount: Number(item.amount)

          }));

          console.log('Journal Entries', this.journals);

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load journal entries',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  trackByJournal(
    index: number,
    item: JournalEntry
  ): string {

    return item._id ?? item.voucherNo;

  }

}