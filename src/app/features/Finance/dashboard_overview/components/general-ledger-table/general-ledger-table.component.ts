import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ManualLedgerEntryComponent } from '../../forms/manual-ledger-entry/manual-ledger-entry.component';

import { LedgerTransactionService } from '../../../../../core/services/finance/ledger-transaction.service';
import { LedgerTransaction } from '../../../../../core/models/finance/ledger-transaction.model';

@Component({
  selector: 'app-general-ledger-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ManualLedgerEntryComponent
  ],
  templateUrl: './general-ledger-table.component.html'
})
export class GeneralLedgerTableComponent implements OnInit {

  constructor(
    private readonly ledgerTransactionService: LedgerTransactionService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  showManualEntry = false;

  loading = false;

  activeFilter: 'all' | 'credit' | 'debit' = 'all';

  searchText = '';

  transactions: LedgerTransaction[] = [];

  ngOnInit(): void {

    this.loadTransactions();

  }

  loadTransactions(): void {

    this.loading = true;

    this.ledgerTransactionService
      .getLedgerTransactions()
      .subscribe({

        next: (response: any) => {

          this.transactions = response.data.map((item: any) => ({
            ...item,
            amount: Number(item.amount)
          }));

          console.log('Ledger Transactions', this.transactions);

          this.loading = false;

          // Force UI refresh
          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load ledger transactions',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  openManualEntry(): void {

    this.showManualEntry = true;

  }

  closeManualEntry(): void {

    this.showManualEntry = false;

    this.loadTransactions();

  }

  setFilter(
    filter: 'all' | 'credit' | 'debit'
  ): void {

    this.activeFilter = filter;

  }

  get filteredTransactions(): LedgerTransaction[] {

    let data = [...this.transactions];

    if (this.activeFilter !== 'all') {

      data = data.filter(
        item => item.type === this.activeFilter
      );

    }

    if (this.searchText.trim()) {

      const keyword = this.searchText.toLowerCase();

      data = data.filter(item =>

        item.description.toLowerCase().includes(keyword) ||

        item.category.toLowerCase().includes(keyword) ||

        item.account.toLowerCase().includes(keyword)

      );

    }

    return data;

  }

  trackByTransaction(
    index: number,
    item: LedgerTransaction
  ): number {

    return index;

  }

}