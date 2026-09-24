import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  PROCUREMENT_DATA,
  ProcurementItem,
} from '../../utils/procurement.util';

@Component({
  selector: 'app-procurement',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './procurement.component.html',
})
export class ProcurementComponent {
  @Output()
  viewDetails = new EventEmitter<ProcurementItem>();

  @Output()
  createRequest = new EventEmitter<void>();

  selectedItem: ProcurementItem | null = null;
isDetailOpen = false;

  procurementItems: ProcurementItem[] = PROCUREMENT_DATA;

  search = '';
  status = 'ALL';
  priority = 'ALL';

  get filteredItems(): ProcurementItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.procurementItems.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.requestNumber.toLowerCase().includes(searchTerm) ||
        item.itemName.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.supplier.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' ||
        item.status === this.status;

      const matchesPriority =
        this.priority === 'ALL' ||
        item.priority === this.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }

  get totalRequests(): number {
    return this.procurementItems.length;
  }

  get pendingRequests(): number {
    return this.procurementItems.filter(
      (item) =>
        item.status === 'PENDING' ||
        item.status === 'IN_PROGRESS'
    ).length;
  }

  get approvedRequests(): number {
    return this.procurementItems.filter(
      (item) => item.status === 'APPROVED'
    ).length;
  }

  get highPriorityRequests(): number {
    return this.procurementItems.filter(
      (item) => item.priority === 'HIGH'
    ).length;
  }

  getStatusLabel(status: ProcurementItem['status']): string {
    switch (status) {
      case 'PENDING':
        return 'Pending';

      case 'IN_PROGRESS':
        return 'In Progress';

      case 'APPROVED':
        return 'Approved';

      case 'ORDERED':
        return 'Ordered';

      case 'RECEIVED':
        return 'Received';

      case 'CANCELLED':
        return 'Cancelled';

      default:
        return status;
    }
  }

  getStatusClass(status: ProcurementItem['status']): string {
    switch (status) {
      case 'PENDING':
        return 'bg-orange-50 text-orange-700';

      case 'IN_PROGRESS':
        return 'bg-blue-50 text-blue-700';

      case 'APPROVED':
        return 'bg-green-50 text-green-700';

      case 'ORDERED':
        return 'bg-indigo-50 text-indigo-700';

      case 'RECEIVED':
        return 'bg-emerald-50 text-emerald-700';

      case 'CANCELLED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getPriorityClass(priority: ProcurementItem['priority']): string {
    switch (priority) {
      case 'HIGH':
        return 'bg-red-50 text-red-700';

      case 'MEDIUM':
        return 'bg-orange-50 text-orange-700';

      case 'LOW':
        return 'bg-green-50 text-green-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getPriorityLabel(priority: ProcurementItem['priority']): string {
    switch (priority) {
      case 'HIGH':
        return 'High';

      case 'MEDIUM':
        return 'Medium';

      case 'LOW':
        return 'Low';

      default:
        return priority;
    }
  }

  onViewDetails(item: ProcurementItem): void {
  this.selectedItem = item;
  this.isDetailOpen = true;

  this.viewDetails.emit(item);
}

onCloseDetails(): void {
  this.isDetailOpen = false;
  this.selectedItem = null;
}


  onCreateRequest(): void {
    this.createRequest.emit();
  }
}