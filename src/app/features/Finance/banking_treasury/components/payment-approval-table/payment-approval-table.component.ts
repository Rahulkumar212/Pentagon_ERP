import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { PaymentApprovalFormComponent } from '../../forms/payment-approval-form/payment-approval-form.component';

 export interface PaymentApproval {

  id: number;

  vendor: string;

  paymentType: string;

  invoiceNo: string;

  dueDate: string;

  amount: number;

  priority: 'High' | 'Medium' | 'Low';

  status: 'Pending' | 'Approved' | 'Rejected';

}

@Component({
  selector: 'app-payment-approval-table',
  standalone: true,
  imports: [
    CommonModule,
    PaymentApprovalFormComponent
  ],
  templateUrl: './payment-approval-table.component.html'
})
export class PaymentApprovalTableComponent {

  payments = signal<PaymentApproval[]>([
    {
      id: 1,
      vendor: 'Dell Technologies',
      paymentType: 'IT Equipment',
      invoiceNo: 'INV-2026-451',
      dueDate: '08 Aug 2026',
      amount: 845000,
      priority: 'High',
      status: 'Pending'
    },
    {
      id: 2,
      vendor: 'ABC Logistics',
      paymentType: 'Transportation',
      invoiceNo: 'INV-2026-322',
      dueDate: '10 Aug 2026',
      amount: 275000,
      priority: 'Medium',
      status: 'Pending'
    },
    {
      id: 3,
      vendor: 'Microsoft India',
      paymentType: 'Software License',
      invoiceNo: 'INV-2026-812',
      dueDate: '15 Aug 2026',
      amount: 640000,
      priority: 'High',
      status: 'Approved'
    },
    {
      id: 4,
      vendor: 'Office Solutions',
      paymentType: 'Office Supplies',
      invoiceNo: 'INV-2026-148',
      dueDate: '18 Aug 2026',
      amount: 98000,
      priority: 'Low',
      status: 'Rejected'
    }
  ]);

  showPaymentApprovalModal = signal(false);

  selectedPayment = signal<PaymentApproval | null>(null);

  openCreatePayment(): void {
    this.selectedPayment.set(null);
    this.showPaymentApprovalModal.set(true);
  }

  editPayment(payment: PaymentApproval): void {
    this.selectedPayment.set(payment);
    this.showPaymentApprovalModal.set(true);
  }

  closeModal(): void {
    this.showPaymentApprovalModal.set(false);
    this.selectedPayment.set(null);
  }

  approve(payment: PaymentApproval): void {
    console.log('Approve', payment);
  }

  reject(payment: PaymentApproval): void {
    console.log('Reject', payment);
  }

  view(payment: PaymentApproval): void {
    console.log(payment);
  }
}