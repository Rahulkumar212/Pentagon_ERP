import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ChartAccountService } from '../../../../../core/services/finance/chart-account.service';
import { ChartAccount } from '../../../../../core/models/finance/chart-account.model';

@Component({
  selector: 'app-chart-of-accounts-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chart-of-accounts-table.component.html'
})
export class ChartOfAccountsComponent implements OnInit {

  accounts: ChartAccount[] = [];

  loading = false;

  deletingId: number | null = null;

  constructor(
    private readonly chartAccountService: ChartAccountService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadChartAccounts();

  }

  // ==========================================
  // Load Accounts
  // ==========================================

  loadChartAccounts(): void {

    this.loading = true;

    this.chartAccountService
      .getChartAccounts()
      .subscribe({

        next: (response: any) => {

          this.accounts = response.data ?? [];

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load chart accounts',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  // ==========================================
  // Delete Account
  // ==========================================

  deleteAccount(account: ChartAccount): void {

    const confirmed = confirm(
      `Delete "${account.accountName}" ?`
    );

    if (!confirmed) {
      return;
    }

    this.deletingId = account.id;

    this.chartAccountService
      .deleteChartAccount(account.id.toString())
      .subscribe({

        next: () => {

          console.log('Deleted');

          this.accounts =
            this.accounts.filter(
              item => item.id !== account.id
            );

          this.deletingId = null;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(error);

          this.deletingId = null;

        }

      });

  }

  // ==========================================
  // Track By
  // ==========================================

  trackByAccount(
    index: number,
    item: ChartAccount
  ): number {

    return item.id;

  }

}