import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { JournalEntryService } from '../../../../../core/services/finance/journal-entry.service';
import { TrialBalance } from '../../../../../core/models/finance/journal-entry.model';

@Component({
  selector: 'app-trial-balance-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './trial-balance-table.component.html'
})
export class TrialBalanceTableComponent implements OnInit {

  loading = false;

  trialBalance: TrialBalance[] = [];

  constructor(
    private readonly journalEntryService: JournalEntryService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadTrialBalance();

  }

  loadTrialBalance(): void {

    this.loading = true;

    this.journalEntryService
      .getTrialBalance()
      .subscribe({

        next: (response: any) => {

          this.trialBalance = response.data ?? [];

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load trial balance',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  get totalDebit(): number {

    return this.trialBalance.reduce(

      (sum, item) => sum + item.debit,

      0

    );

  }

  get totalCredit(): number {

    return this.trialBalance.reduce(

      (sum, item) => sum + item.credit,

      0

    );

  }

  trackByAccount(
    index: number,
    item: TrialBalance
  ): string {

    return item.accountCode;

  }

}