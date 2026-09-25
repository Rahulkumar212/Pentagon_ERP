
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  INVENTORY_REPORT_DATA,
  InventoryReportItem,
} from '../../utils/inventory-report.util';

@Component({
  selector: 'app-inventory-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-report.component.html',
})
export class InventoryReportComponent {
  inventoryItems: InventoryReportItem[] = INVENTORY_REPORT_DATA;

  get totalQuantity(): number {
    return this.inventoryItems.reduce(
      (total, item) => total + item.totalStock,
      0
    );
  }

  get availableQuantity(): number {
    return this.inventoryItems.reduce(
      (total, item) => total + item.availableStock,
      0
    );
  }

  get lowStockCount(): number {
    return this.inventoryItems.filter(
      (item) => item.status === 'LOW_STOCK'
    ).length;
  }

  get faultyQuantity(): number {
    return this.inventoryItems.reduce(
      (total, item) => total + item.faultyStock,
      0
    );
  }

  get demoQuantity(): number {
    return this.inventoryItems.reduce(
      (total, item) => total + item.demoStock,
      0
    );
  }

  get totalStockValue(): number {
    return this.inventoryItems.reduce(
      (total, item) => total + item.stockValue,
      0
    );
  }

  getStatusLabel(status: InventoryReportItem['status']): string {
    switch (status) {
      case 'HEALTHY':
        return 'Healthy';

      case 'LOW_STOCK':
        return 'Low Stock';

      case 'OUT_OF_STOCK':
        return 'Out of Stock';

      default:
        return status;
    }
  }

  getStatusClass(status: InventoryReportItem['status']): string {
    switch (status) {
      case 'HEALTHY':
        return 'bg-green-50 text-green-700';

      case 'LOW_STOCK':
        return 'bg-orange-50 text-orange-700';

      case 'OUT_OF_STOCK':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getStockProgress(item: InventoryReportItem): number {
    if (!item.totalStock) {
      return 0;
    }

    return Math.min(
      100,
      Math.round((item.availableStock / item.totalStock) * 100)
    );
  }
}

