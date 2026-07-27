import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal, computed } from '@angular/core';

interface ExpenseClaim {

  id: string;

  employee: string;

  category: string;

  description: string;

  date: string;

  status: 'APPROVED' | 'PENDING' | 'REJECTED';

  amount: number;

  workflow: string;

}

@Component({
  selector: 'app-expenses-claims-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './expenses-claims-table.component.html'
})
export class ExpensesClaimsTableComponent {

  @Output()
  approve = new EventEmitter<ExpenseClaim>();

  @Output()
  reject = new EventEmitter<ExpenseClaim>();

  @Output()
  viewPayslip = new EventEmitter<ExpenseClaim>();

  readonly selectedTab = signal<
    'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'
  >('ALL');

  readonly claims = signal<ExpenseClaim[]>([

    {
      id: 'EXP-801',
      employee: 'Aarav Sharma',
      category: 'Travel',
      description: 'Client onboarding flight & cab in Bangalore',
      date: '2026-07-10',
      status: 'APPROVED',
      amount: 14200,
      workflow: 'Completed'
    },

    {
      id: 'EXP-802',
      employee: 'Kabir Mehta',
      category: 'Software',
      description: 'Docker Desktop annual personal license',
      date: '2026-07-09',
      status: 'APPROVED',
      amount: 3600,
      workflow: 'Completed'
    },

    {
      id: 'EXP-803',
      employee: 'Vihaan Patel',
      category: 'Meals',
      description: 'Project success celebration dinner',
      date: '2026-07-11',
      status: 'REJECTED',
      amount: 8800,
      workflow: 'Completed'
    },

    {
      id: 'EXP-804',
      employee: 'Meera Deshmukh',
      category: 'Office',
      description: 'Ergonomic keyboard & mouse purchase',
      date: '2026-07-05',
      status: 'APPROVED',
      amount: 4500,
      workflow: 'Completed'
    },

    {
      id: 'EXP-805',
      employee: 'Ananya Iyer',
      category: 'Other',
      description: 'CFO Summit registration tickets',
      date: '2026-07-13',
      status: 'PENDING',
      amount: 15000,
      workflow: 'Waiting Approval'
    }

  ]);

  readonly filteredClaims = computed(() => {

    if (this.selectedTab() === 'ALL') {

      return this.claims();

    }

    return this.claims().filter(

      claim => claim.status === this.selectedTab()

    );

  });

  changeTab(
    tab: 'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'
  ): void {

    this.selectedTab.set(tab);

  }

  approveClaim(
    claim: ExpenseClaim
  ): void {

    this.approve.emit(claim);

  }

  rejectClaim(
    claim: ExpenseClaim
  ): void {

    this.reject.emit(claim);

  }

}