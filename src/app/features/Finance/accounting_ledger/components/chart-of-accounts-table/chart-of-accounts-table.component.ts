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

  constructor(
    private readonly chartAccountService: ChartAccountService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadChartAccounts();

  }

  loadChartAccounts(): void {

    this.loading = true;

    this.chartAccountService
      .getChartAccounts()
      .subscribe({

        next: (response: any) => {

          // Backend Response:
          // {
          //   success: true,
          //   data: [...]
          // }

          this.accounts = response.data;

          console.log(
            'Chart Accounts',
            this.accounts
          );

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

  trackByAccount(
    index: number,
    item: ChartAccount
  ): string {

    return item._id ?? item.code;

  }

}