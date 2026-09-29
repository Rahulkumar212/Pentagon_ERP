
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SalesOrderItem {
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateSalesOrder {
  customerName: string;
  customerCode: string;
  orderDate: string;
  expectedDelivery: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  paymentStatus: 'PENDING' | 'PARTIAL' | 'PAID';
  reference: string;
  notes: string;
  items: SalesOrderItem[];
}

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './order-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderFormComponent {

  @Output() close = new EventEmitter<void>();

  @Output() submitOrder =
    new EventEmitter<CreateSalesOrder>();

  order: CreateSalesOrder = {
    customerName: '',
    customerCode: '',
    orderDate: this.getToday(),
    expectedDelivery: '',
    priority: 'MEDIUM',
    paymentStatus: 'PENDING',
    reference: '',
    notes: '',
    items: [
      {
        productName: '',
        quantity: 1,
        unitPrice: 0
      }
    ]
  };

  get totalAmount(): number {
    return this.order.items.reduce(
      (total, item) =>
        total + (Number(item.quantity) * Number(item.unitPrice)),
      0
    );
  }

  get totalQuantity(): number {
    return this.order.items.reduce(
      (total, item) =>
        total + Number(item.quantity),
      0
    );
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  addItem(): void {
    this.order.items.push({
      productName: '',
      quantity: 1,
      unitPrice: 0
    });
  }

  removeItem(index: number): void {
    if (this.order.items.length === 1) {
      return;
    }

    this.order.items.splice(index, 1);
  }

  getItemTotal(item: SalesOrderItem): number {
    return Number(item.quantity) * Number(item.unitPrice);
  }

  onSubmit(): void {

    if (!this.isFormValid()) {
      return;
    }

    this.submitOrder.emit({
      ...this.order,
      items: this.order.items.map(item => ({
        ...item,
        quantity: Number(item.quantity),
        unitPrice: Number(item.unitPrice)
      }))
    });
  }

  onClose(): void {
    this.close.emit();
  }

  private isFormValid(): boolean {

    if (!this.order.customerName.trim()) {
      return false;
    }

    if (!this.order.customerCode.trim()) {
      return false;
    }

    if (!this.order.orderDate) {
      return false;
    }

    if (!this.order.expectedDelivery) {
      return false;
    }

    if (!this.order.items.length) {
      return false;
    }

    return this.order.items.every(
      item =>
        item.productName.trim().length > 0 &&
        Number(item.quantity) > 0 &&
        Number(item.unitPrice) >= 0
    );
  }
}

