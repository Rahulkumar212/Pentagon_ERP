import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DEMO_UNITS_DATA,
  DemoUnitItem,
} from '../../utils/demo-units.util';

@Component({
  selector: 'app-demo-units',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo-units.component.html',
})
export class DemoUnitsComponent {
  @Output() viewDetails = new EventEmitter<DemoUnitItem>();
  @Output() issueDemo = new EventEmitter<void>();

  demoUnits: DemoUnitItem[] = DEMO_UNITS_DATA;

  search = '';
  status = 'ALL';
  demoType = 'ALL';

  get filteredDemoUnits(): DemoUnitItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.demoUnits.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.demoNumber.toLowerCase().includes(searchTerm) ||
        item.itemName.toLowerCase().includes(searchTerm) ||
        item.customerName.toLowerCase().includes(searchTerm) ||
        item.siteName.toLowerCase().includes(searchTerm) ||
        item.referenceNumber.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' || item.status === this.status;

      const matchesDemoType =
        this.demoType === 'ALL' || item.demoType === this.demoType;

      return matchesSearch && matchesStatus && matchesDemoType;
    });
  }

  get totalDemoRecords(): number {
    return this.demoUnits.length;
  }

  get totalDemoUnits(): number {
    return this.demoUnits.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  get activeDemos(): number {
    return this.demoUnits.filter(
      (item) => item.status === 'ISSUED'
    ).length;
  }

  get availableUnits(): number {
    return this.demoUnits
      .filter((item) => item.status === 'AVAILABLE')
      .reduce((total, item) => total + item.quantity, 0);
  }

  getStatusLabel(status: DemoUnitItem['status']): string {
    switch (status) {
      case 'AVAILABLE':
        return 'Available';

      case 'RESERVED':
        return 'Reserved';

      case 'ISSUED':
        return 'Issued';

      case 'RETURN_REQUESTED':
        return 'Return Requested';

      case 'RETURNED':
        return 'Returned';

      case 'OVERDUE':
        return 'Overdue';

      case 'DAMAGED':
        return 'Damaged';

      default:
        return status;
    }
  }

  getStatusClass(status: DemoUnitItem['status']): string {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-green-50 text-green-700';

      case 'RESERVED':
        return 'bg-blue-50 text-blue-700';

      case 'ISSUED':
        return 'bg-purple-50 text-purple-700';

      case 'RETURN_REQUESTED':
        return 'bg-orange-50 text-orange-700';

      case 'RETURNED':
        return 'bg-indigo-50 text-indigo-700';

      case 'OVERDUE':
        return 'bg-red-50 text-red-700';

      case 'DAMAGED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getDemoTypeLabel(type: DemoUnitItem['demoType']): string {
    switch (type) {
      case 'CUSTOMER_DEMO':
        return 'Customer Demo';

      case 'SITE_DEMO':
        return 'Site Demo';

      case 'EXHIBITION':
        return 'Exhibition';

      case 'TRIAL':
        return 'Trial';

      case 'INTERNAL_DEMO':
        return 'Internal Demo';

      default:
        return type;
    }
  }

  getDemoTypeClass(type: DemoUnitItem['demoType']): string {
    switch (type) {
      case 'CUSTOMER_DEMO':
        return 'bg-blue-50 text-blue-700';

      case 'SITE_DEMO':
        return 'bg-purple-50 text-purple-700';

      case 'EXHIBITION':
        return 'bg-orange-50 text-orange-700';

      case 'TRIAL':
        return 'bg-cyan-50 text-cyan-700';

      case 'INTERNAL_DEMO':
        return 'bg-gray-100 text-gray-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onViewDetails(item: DemoUnitItem): void {
    this.viewDetails.emit(item);
  }

  onIssueDemo(): void {
    this.issueDemo.emit();
  }

  clearFilters(): void {
    this.search = '';
    this.status = 'ALL';
    this.demoType = 'ALL';
  }
}