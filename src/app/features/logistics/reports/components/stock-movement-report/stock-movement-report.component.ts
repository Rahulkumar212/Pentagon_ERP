
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  STOCK_MOVEMENT_REPORT_DATA,
  StockMovementReportItem,
} from '../../utils/stock-movement-report.util';

@Component({
  selector: 'app-stock-movement-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-movement-report.component.html',
})
export class StockMovementReportComponent {
  movements: StockMovementReportItem[] = STOCK_MOVEMENT_REPORT_DATA;

  get totalMovements(): number {
    return this.movements.length;
  }

  get totalEntries(): number {
    return this.movements.filter(
      (item) => item.movementType === 'ENTRY'
    ).length;
  }

  get totalExits(): number {
    return this.movements.filter(
      (item) => item.movementType === 'EXIT'
    ).length;
  }

  get totalEntryQuantity(): number {
    return this.movements
      .filter((item) => item.movementType === 'ENTRY')
      .reduce((total, item) => total + item.quantity, 0);
  }

  get totalExitQuantity(): number {
    return this.movements
      .filter((item) => item.movementType === 'EXIT')
      .reduce((total, item) => total + item.quantity, 0);
  }

  get completedCount(): number {
    return this.movements.filter(
      (item) => item.status === 'COMPLETED'
    ).length;
  }

  get pendingCount(): number {
    return this.movements.filter(
      (item) => item.status === 'PENDING'
    ).length;
  }

  get rejectedCount(): number {
    return this.movements.filter(
      (item) => item.status === 'REJECTED'
    ).length;
  }

  getMovementTypeLabel(
    type: StockMovementReportItem['movementType']
  ): string {
    return type === 'ENTRY' ? 'Stock Entry' : 'Stock Exit';
  }

  getMovementTypeClass(
    type: StockMovementReportItem['movementType']
  ): string {
    return type === 'ENTRY'
      ? 'bg-green-50 text-green-700'
      : 'bg-orange-50 text-orange-700';
  }

  getMovementIcon(
    type: StockMovementReportItem['movementType']
  ): string {
    return type === 'ENTRY' ? 'input' : 'output';
  }

  getStatusLabel(
    status: StockMovementReportItem['status']
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'Completed';

      case 'PENDING':
        return 'Pending';

      case 'REJECTED':
        return 'Rejected';

      default:
        return status;
    }
  }

  getStatusClass(
    status: StockMovementReportItem['status']
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-50 text-green-700';

      case 'PENDING':
        return 'bg-yellow-50 text-yellow-700';

      case 'REJECTED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getReferenceTypeLabel(
    type: StockMovementReportItem['referenceType']
  ): string {
    switch (type) {
      case 'PROCUREMENT':
        return 'Procurement';

      case 'PURCHASE_ORDER':
        return 'Purchase Order';

      case 'SALES_ORDER':
        return 'Sales Order';

      case 'GEM_ORDER':
        return 'GEM Order';

      case 'DEMO':
        return 'Demo';

      case 'OFFICE_USE':
        return 'Office Use';

      case 'REPLACEMENT':
        return 'Replacement';

      case 'DIRECT_RECEIPT':
        return 'Direct Receipt';

      case 'OTHER':
        return 'Other';

      default:
        return type;
    }
  }
}

