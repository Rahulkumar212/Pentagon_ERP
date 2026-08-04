import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  signal,
  OnInit,
} from '@angular/core';

import { ExpenseClaimService } from '../../../../../core/services/finance/expense-claim.service';
import { ExpenseClaim } from '../../../../../core/models/finance/expense-claim.model';

@Component({
  selector: 'app-expenses-claims-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses-claims-table.component.html',
})
export class ExpensesClaimsTableComponent implements OnInit {
  @Output() approve = new EventEmitter<ExpenseClaim>();
  @Output() reject = new EventEmitter<ExpenseClaim>();
  @Output() viewPayslip = new EventEmitter<ExpenseClaim>();

  private readonly expenseClaimService = inject(ExpenseClaimService);

  readonly selectedTab = signal<
    'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'
  >('ALL');

  readonly claims = signal<ExpenseClaim[]>([]);

  readonly loading = signal(false);

  readonly filteredClaims = computed(() => {
    if (this.selectedTab() === 'ALL') {
      return this.claims();
    }

    return this.claims().filter(
      (claim) =>
        claim.status.toUpperCase() === this.selectedTab()
    );
  });

  ngOnInit(): void {
    this.getAllExpenseClaims();
  }

  getAllExpenseClaims(): void {
    this.loading.set(true);

    this.expenseClaimService.fetchAllExpenseClaims().subscribe({
      next: (response) => {
        this.claims.set(response.data);
        this.loading.set(false);
      },

      error: (error) => {
        console.error('Failed to fetch expense claims', error);
        this.loading.set(false);
      },
    });
  }

  changeTab(
    tab: 'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'
  ): void {
    this.selectedTab.set(tab);
  }

  approveClaim(claim: ExpenseClaim): void {
    this.approve.emit(claim);
  }

  rejectClaim(claim: ExpenseClaim): void {
    this.reject.emit(claim);
  }
}