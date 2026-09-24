import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  STOCK_ENTRY_DATA,
  StockEntryItem,
} from '../../utils/stock-entry.util';

@Component({
  selector: 'app-stock-entry',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './stock-entry.component.html',
})
export class StockEntryComponent {
  @Output()
  viewDetails = new EventEmitter<StockEntryItem>();

  @Output()
  createEntry = new EventEmitter<void>();

  entries: StockEntryItem[] = STOCK_ENTRY_DATA;

  search = '';
  status = 'ALL';
  condition = 'ALL';

  get filteredEntries(): StockEntryItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.entries.filter((entry) => {
      const matchesSearch =
        !searchTerm ||
        entry.entryNumber.toLowerCase().includes(searchTerm) ||
        entry.itemName.toLowerCase().includes(searchTerm) ||
        entry.category.toLowerCase().includes(searchTerm) ||
        entry.referenceNumber.toLowerCase().includes(searchTerm) ||
        entry.supplier.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' ||
        entry.status === this.status;

      const matchesCondition =
        this.condition === 'ALL' ||
        entry.condition === this.condition;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCondition
      );
    });
  }

  get totalEntries(): number {
    return this.entries.length;
  }

  get totalUnitsReceived(): number {
    return this.entries.reduce(
      (total, entry) => total + entry.quantity,
      0
    );
  }

  get pendingVerification(): number {
    return this.entries.filter(
      (entry) => entry.status === 'PENDING_VERIFICATION'
    ).length;
  }

  get faultyUnits(): number {
    return this.entries
      .filter((entry) => entry.condition === 'FAULTY')
      .reduce(
        (total, entry) => total + entry.quantity,
        0
      );
  }

  getStatusLabel(status: StockEntryItem['status']): string {
    switch (status) {
      case 'PENDING_VERIFICATION':
        return 'Pending Verification';

      case 'VERIFIED':
        return 'Verified';

      case 'PARTIAL':
        return 'Partially Received';

      case 'REJECTED':
        return 'Rejected';

      default:
        return status;
    }
  }

  getStatusClass(status: StockEntryItem['status']): string {
    switch (status) {
      case 'PENDING_VERIFICATION':
        return 'bg-orange-50 text-orange-700';

      case 'VERIFIED':
        return 'bg-green-50 text-green-700';

      case 'PARTIAL':
        return 'bg-blue-50 text-blue-700';

      case 'REJECTED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getConditionLabel(
    condition: StockEntryItem['condition']
  ): string {
    switch (condition) {
      case 'NEW':
        return 'New';

      case 'GOOD':
        return 'Good';

      case 'DAMAGED':
        return 'Damaged';

      case 'FAULTY':
        return 'Faulty';

      case 'MIXED':
        return 'Mixed';

      default:
        return condition;
    }
  }

  getConditionClass(
    condition: StockEntryItem['condition']
  ): string {
    switch (condition) {
      case 'NEW':
        return 'bg-green-50 text-green-700';

      case 'GOOD':
        return 'bg-blue-50 text-blue-700';

      case 'DAMAGED':
        return 'bg-orange-50 text-orange-700';

      case 'FAULTY':
        return 'bg-red-50 text-red-700';

      case 'MIXED':
        return 'bg-gray-50 text-gray-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onViewDetails(entry: StockEntryItem): void {
    this.viewDetails.emit(entry);
  }

  onCreateEntry(): void {
    this.createEntry.emit();
  }
}