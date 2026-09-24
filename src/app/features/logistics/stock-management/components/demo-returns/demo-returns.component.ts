import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DEMO_RETURNS_DATA,
  DemoReturnItem,
} from '../../utils/demo-returns.util';

@Component({
  selector: 'app-demo-returns',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo-returns.component.html',
})
export class DemoReturnsComponent {
  @Output() viewDetails = new EventEmitter<DemoReturnItem>();
  @Output() createReturn = new EventEmitter<void>();

  returns: DemoReturnItem[] = DEMO_RETURNS_DATA;

  search = '';
  status = 'ALL';
  condition = 'ALL';

  get filteredReturns(): DemoReturnItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.returns.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.returnNumber.toLowerCase().includes(searchTerm) ||
        item.itemName.toLowerCase().includes(searchTerm) ||
        item.customerName.toLowerCase().includes(searchTerm) ||
        item.siteName.toLowerCase().includes(searchTerm) ||
        item.demoReference.toLowerCase().includes(searchTerm) ||
        item.returnedBy.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' || item.status === this.status;

      const matchesCondition =
        this.condition === 'ALL' || item.condition === this.condition;

      return matchesSearch && matchesStatus && matchesCondition;
    });
  }

  get totalReturns(): number {
    return this.returns.length;
  }

  get totalUnitsReturned(): number {
    return this.returns.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  get pendingInspection(): number {
    return this.returns.filter(
      (item) => item.status === 'PENDING_INSPECTION'
    ).length;
  }

  get goodConditionUnits(): number {
    return this.returns
      .filter((item) => item.condition === 'GOOD')
      .reduce((total, item) => total + item.quantity, 0);
  }

  getStatusLabel(status: DemoReturnItem['status']): string {
    switch (status) {
      case 'RETURN_REQUESTED':
        return 'Return Requested';

      case 'IN_TRANSIT':
        return 'In Transit';

      case 'RECEIVED':
        return 'Received';

      case 'PENDING_INSPECTION':
        return 'Pending Inspection';

      case 'INSPECTED':
        return 'Inspected';

      case 'CLOSED':
        return 'Closed';

      case 'REJECTED':
        return 'Rejected';

      default:
        return status;
    }
  }

  getStatusClass(status: DemoReturnItem['status']): string {
    switch (status) {
      case 'RETURN_REQUESTED':
        return 'bg-orange-50 text-orange-700';

      case 'IN_TRANSIT':
        return 'bg-blue-50 text-blue-700';

      case 'RECEIVED':
        return 'bg-indigo-50 text-indigo-700';

      case 'PENDING_INSPECTION':
        return 'bg-yellow-50 text-yellow-700';

      case 'INSPECTED':
        return 'bg-purple-50 text-purple-700';

      case 'CLOSED':
        return 'bg-green-50 text-green-700';

      case 'REJECTED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getConditionLabel(
    condition: DemoReturnItem['condition']
  ): string {
    switch (condition) {
      case 'GOOD':
        return 'Good';

      case 'DAMAGED':
        return 'Damaged';

      case 'FAULTY':
        return 'Faulty';

      case 'PARTIALLY_DAMAGED':
        return 'Partially Damaged';

      case 'PENDING_CHECK':
        return 'Pending Check';

      default:
        return condition;
    }
  }

  getConditionClass(
    condition: DemoReturnItem['condition']
  ): string {
    switch (condition) {
      case 'GOOD':
        return 'bg-green-50 text-green-700';

      case 'DAMAGED':
        return 'bg-orange-50 text-orange-700';

      case 'FAULTY':
        return 'bg-red-50 text-red-700';

      case 'PARTIALLY_DAMAGED':
        return 'bg-yellow-50 text-yellow-700';

      case 'PENDING_CHECK':
        return 'bg-gray-100 text-gray-600';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onViewDetails(item: DemoReturnItem): void {
    this.viewDetails.emit(item);
  }

  onCreateReturn(): void {
    this.createReturn.emit();
  }

  clearFilters(): void {
    this.search = '';
    this.status = 'ALL';
    this.condition = 'ALL';
  }
}