import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  OFFICE_USE_DATA,
  OfficeUseItem,
  OfficeUsePurpose,
  OfficeUseStatus,
} from '../../utils/office-use.util';

@Component({
  selector: 'app-office-use',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './office-use.component.html',
})
export class OfficeUseComponent {
  @Output() viewDetails = new EventEmitter<OfficeUseItem>();
  @Output() createRequest = new EventEmitter<void>();

  officeUseItems: OfficeUseItem[] = OFFICE_USE_DATA;

  search = '';
  status = 'ALL';
  department = 'ALL';
  purpose = 'ALL';

  get filteredItems(): OfficeUseItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.officeUseItems.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.issueNumber.toLowerCase().includes(searchTerm) ||
        item.itemName.toLowerCase().includes(searchTerm) ||
        item.department.toLowerCase().includes(searchTerm) ||
        item.employeeName.toLowerCase().includes(searchTerm) ||
        item.referenceNumber.toLowerCase().includes(searchTerm) ||
        item.requestedBy.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' ||
        item.status === this.status;

      const matchesDepartment =
        this.department === 'ALL' ||
        item.department === this.department;

      const matchesPurpose =
        this.purpose === 'ALL' ||
        item.purpose === this.purpose;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDepartment &&
        matchesPurpose
      );
    });
  }

  get totalRequests(): number {
    return this.officeUseItems.length;
  }

  get totalUnitsIssued(): number {
    return this.officeUseItems
      .filter(
        (item) =>
          item.status === 'ISSUED' ||
          item.status === 'RETURNED'
      )
      .reduce(
        (total, item) => total + item.quantity,
        0
      );
  }

  get pendingRequests(): number {
    return this.officeUseItems.filter(
      (item) => item.status === 'PENDING'
    ).length;
  }

  get activeIssues(): number {
    return this.officeUseItems.filter(
      (item) => item.status === 'ISSUED'
    ).length;
  }

  get returnedItems(): number {
    return this.officeUseItems.filter(
      (item) => item.status === 'RETURNED'
    ).length;
  }

  getStatusLabel(status: OfficeUseStatus): string {
    switch (status) {
      case 'PENDING':
        return 'Pending';

      case 'APPROVED':
        return 'Approved';

      case 'ISSUED':
        return 'Issued';

      case 'RETURNED':
        return 'Returned';

      case 'CANCELLED':
        return 'Cancelled';

      default:
        return status;
    }
  }

  getStatusClass(status: OfficeUseStatus): string {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-50 text-yellow-700';

      case 'APPROVED':
        return 'bg-blue-50 text-blue-700';

      case 'ISSUED':
        return 'bg-purple-50 text-purple-700';

      case 'RETURNED':
        return 'bg-green-50 text-green-700';

      case 'CANCELLED':
        return 'bg-gray-100 text-gray-600';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getPurposeLabel(
    purpose: OfficeUsePurpose
  ): string {
    switch (purpose) {
      case 'IT_USE':
        return 'IT Use';

      case 'ADMIN_USE':
        return 'Admin Use';

      case 'OPERATIONS':
        return 'Operations';

      case 'TRAINING':
        return 'Training';

      case 'HR_USE':
        return 'HR Use';

      case 'MAINTENANCE':
        return 'Maintenance';

      case 'INTERNAL_PROJECT':
        return 'Internal Project';

      case 'OTHER':
        return 'Other';

      default:
        return purpose;
    }
  }

  getPurposeClass(
    purpose: OfficeUsePurpose
  ): string {
    switch (purpose) {
      case 'IT_USE':
        return 'bg-blue-50 text-blue-700';

      case 'ADMIN_USE':
        return 'bg-gray-100 text-gray-700';

      case 'OPERATIONS':
        return 'bg-orange-50 text-orange-700';

      case 'TRAINING':
        return 'bg-purple-50 text-purple-700';

      case 'HR_USE':
        return 'bg-pink-50 text-pink-700';

      case 'MAINTENANCE':
        return 'bg-cyan-50 text-cyan-700';

      case 'INTERNAL_PROJECT':
        return 'bg-indigo-50 text-indigo-700';

      case 'OTHER':
        return 'bg-gray-50 text-gray-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onViewDetails(item: OfficeUseItem): void {
    this.viewDetails.emit(item);
  }

  onCreateRequest(): void {
    this.createRequest.emit();
  }

  clearFilters(): void {
    this.search = '';
    this.status = 'ALL';
    this.department = 'ALL';
    this.purpose = 'ALL';
  }
}