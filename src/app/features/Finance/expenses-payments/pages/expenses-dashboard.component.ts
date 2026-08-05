import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExpenseClaim } from '../../../../core/models/finance/expense-claim.model';

import { ExpensesHeaderComponent } from '../components/expenses-header/expenses-header.component';
import { ExpensesClaimsTableComponent } from '../components/expenses-claims-table/expenses-claims-table.component';

import { ExpenseClaimModalComponent } from '../forms/expense-claim-modal/expense-claim-modal.component';
import { ApproveExpenseModalComponent } from '../forms/approve-expense-modal/approve-expense-modal.component';
import { ReimbursementModalComponent } from '../forms/reimbursement-modal/reimbursement-modal.component';

@Component({
  selector: 'app-expenses-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ExpensesHeaderComponent,
    ExpensesClaimsTableComponent,
    ExpenseClaimModalComponent,
    ApproveExpenseModalComponent,
    ReimbursementModalComponent
  ],
  templateUrl: './expenses-dashboard.component.html'
})
export class ExpensesDashboardComponent {

  selectedAction: 'Approved' | 'Rejected' = 'Approved';
  
  showExpenseClaimModal = false;

  showApprovalModal = false;

  showReimbursementModal = false;

  selectedClaim: ExpenseClaim | null = null;

  /* ============================================
     Expense Claim
  ============================================ */

  openExpenseClaimModal(): void {

    this.showExpenseClaimModal = true;

  }

  closeExpenseClaimModal(): void {

    this.showExpenseClaimModal = false;

  }

  /* ============================================
     Approval
  ============================================ */

  openApprovalModal(
  claim: ExpenseClaim,
  action: 'Approved' | 'Rejected'
): void {

  this.selectedClaim = claim;

  this.selectedAction = action;

  this.showApprovalModal = true;

}

  closeApprovalModal(): void {

    this.showApprovalModal = false;

    this.selectedClaim = null;

  }

  /* ============================================
     Reimbursement
  ============================================ */

  openReimbursementModal(claim: ExpenseClaim): void {

    this.selectedClaim = claim;

    this.showReimbursementModal = true;

  }

  closeReimbursementModal(): void {

    this.showReimbursementModal = false;

    this.selectedClaim = null;

  }

}