import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  STOCK_EXIT_DATA,
  StockExitItem,
} from '../../utils/stock-exit.util';

@Component({
  selector: 'app-stock-exit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './stock-exit.component.html',
})
export class StockExitComponent {
  @Output()
  viewDetails = new EventEmitter<StockExitItem>();

  @Output()
  createExit = new EventEmitter<void>();

  exits: StockExitItem[] = STOCK_EXIT_DATA;

  search = '';
  status = 'ALL';
  exitType = 'ALL';

  get filteredExits(): StockExitItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.exits.filter((exit) => {
      const matchesSearch =
        !searchTerm ||
        exit.exitNumber.toLowerCase().includes(searchTerm) ||
        exit.itemName.toLowerCase().includes(searchTerm) ||
        exit.category.toLowerCase().includes(searchTerm) ||
        exit.referenceNumber.toLowerCase().includes(searchTerm) ||
        exit.destination.toLowerCase().includes(searchTerm) ||
        exit.requestedBy.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' ||
        exit.status === this.status;

      const matchesType =
        this.exitType === 'ALL' ||
        exit.exitType === this.exitType;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType
      );
    });
  }

  get totalExits(): number {
    return this.exits.length;
  }

  get totalUnitsExited(): number {
    return this.exits.reduce(
      (total, exit) => total + exit.quantity,
      0
    );
  }

  get pendingExits(): number {
    return this.exits.filter(
      (exit) => exit.status === 'PENDING'
    ).length;
  }

  get completedExits(): number {
    return this.exits.filter(
      (exit) => exit.status === 'COMPLETED'
    ).length;
  }

  getStatusLabel(
    status: StockExitItem['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'Pending';

      case 'APPROVED':
        return 'Approved';

      case 'COMPLETED':
        return 'Completed';

      case 'REJECTED':
        return 'Rejected';

      case 'CANCELLED':
        return 'Cancelled';

      default:
        return status;
    }
  }

  getStatusClass(
    status: StockExitItem['status']
  ): string {
    switch (status) {
      case 'PENDING':
        return 'bg-orange-50 text-orange-700';

      case 'APPROVED':
        return 'bg-blue-50 text-blue-700';

      case 'COMPLETED':
        return 'bg-green-50 text-green-700';

      case 'REJECTED':
        return 'bg-red-50 text-red-700';

      case 'CANCELLED':
        return 'bg-gray-100 text-gray-600';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getExitTypeLabel(
    type: StockExitItem['exitType']
  ): string {
    switch (type) {
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

      case 'INSTALLATION':
        return 'Installation';

      case 'OTHER':
        return 'Other';

      default:
        return type;
    }
  }

  getExitTypeClass(
    type: StockExitItem['exitType']
  ): string {
    switch (type) {
      case 'SALES_ORDER':
        return 'bg-blue-50 text-blue-700';

      case 'GEM_ORDER':
        return 'bg-indigo-50 text-indigo-700';

      case 'DEMO':
        return 'bg-purple-50 text-purple-700';

      case 'OFFICE_USE':
        return 'bg-gray-100 text-gray-700';

      case 'REPLACEMENT':
        return 'bg-orange-50 text-orange-700';

      case 'INSTALLATION':
        return 'bg-cyan-50 text-cyan-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onViewDetails(exit: StockExitItem): void {
    this.viewDetails.emit(exit);
  }

  onCreateExit(): void {
    this.createExit.emit();
  }
}