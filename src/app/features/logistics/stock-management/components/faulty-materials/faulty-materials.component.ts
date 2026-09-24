import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  FAULTY_MATERIALS_DATA,
  FaultyMaterialCondition,
  FaultyMaterialItem,
  FaultyMaterialStatus,
} from '../../utils/faulty-materials.util';

@Component({
  selector: 'app-faulty-materials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faulty-materials.component.html',
})
export class FaultyMaterialsComponent {
  @Output() viewDetails = new EventEmitter<FaultyMaterialItem>();
  @Output() createFault = new EventEmitter<void>();

  materials: FaultyMaterialItem[] = FAULTY_MATERIALS_DATA;

  search = '';
  status = 'ALL';
  condition = 'ALL';
  source = 'ALL';

  get filteredMaterials(): FaultyMaterialItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.materials.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.faultNumber.toLowerCase().includes(searchTerm) ||
        item.itemName.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.referenceNumber.toLowerCase().includes(searchTerm) ||
        item.reportedBy.toLowerCase().includes(searchTerm) ||
        item.issueDescription.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' || item.status === this.status;

      const matchesCondition =
        this.condition === 'ALL' || item.condition === this.condition;

      const matchesSource =
        this.source === 'ALL' || item.source === this.source;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCondition &&
        matchesSource
      );
    });
  }

  get totalRecords(): number {
    return this.materials.length;
  }

  get totalFaultyUnits(): number {
    return this.materials.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  get pendingInspection(): number {
    return this.materials.filter(
      (item) => item.status === 'PENDING_INSPECTION'
    ).length;
  }

  get underRepair(): number {
    return this.materials.filter(
      (item) => item.status === 'UNDER_REPAIR'
    ).length;
  }

  get nonRepairable(): number {
    return this.materials
      .filter(
        (item) =>
          item.status === 'NON_REPAIRABLE' ||
          item.status === 'SCRAPPED'
      )
      .reduce((total, item) => total + item.quantity, 0);
  }

  getStatusLabel(status: FaultyMaterialStatus): string {
    switch (status) {
      case 'PENDING_INSPECTION':
        return 'Pending Inspection';

      case 'UNDER_REPAIR':
        return 'Under Repair';

      case 'REPAIRABLE':
        return 'Repairable';

      case 'NON_REPAIRABLE':
        return 'Non-Repairable';

      case 'REPLACEMENT_PENDING':
        return 'Replacement Pending';

      case 'SCRAPPED':
        return 'Scrapped';

      case 'RETURNED_TO_STOCK':
        return 'Returned to Stock';

      default:
        return status;
    }
  }

  getStatusClass(status: FaultyMaterialStatus): string {
    switch (status) {
      case 'PENDING_INSPECTION':
        return 'bg-yellow-50 text-yellow-700';

      case 'UNDER_REPAIR':
        return 'bg-blue-50 text-blue-700';

      case 'REPAIRABLE':
        return 'bg-cyan-50 text-cyan-700';

      case 'NON_REPAIRABLE':
        return 'bg-red-50 text-red-700';

      case 'REPLACEMENT_PENDING':
        return 'bg-orange-50 text-orange-700';

      case 'SCRAPPED':
        return 'bg-gray-100 text-gray-700';

      case 'RETURNED_TO_STOCK':
        return 'bg-green-50 text-green-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getConditionLabel(condition: FaultyMaterialCondition): string {
    switch (condition) {
      case 'DAMAGED':
        return 'Damaged';

      case 'FAULTY':
        return 'Faulty';

      case 'BROKEN':
        return 'Broken';

      case 'DEFECTIVE':
        return 'Defective';

      case 'MISSING_PARTS':
        return 'Missing Parts';

      default:
        return condition;
    }
  }

  getConditionClass(condition: FaultyMaterialCondition): string {
    switch (condition) {
      case 'DAMAGED':
        return 'bg-orange-50 text-orange-700';

      case 'FAULTY':
        return 'bg-red-50 text-red-700';

      case 'BROKEN':
        return 'bg-red-100 text-red-800';

      case 'DEFECTIVE':
        return 'bg-purple-50 text-purple-700';

      case 'MISSING_PARTS':
        return 'bg-yellow-50 text-yellow-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getSourceLabel(source: string): string {
    switch (source) {
      case 'STOCK_ENTRY':
        return 'Stock Entry';

      case 'DEMO_RETURN':
        return 'Demo Return';

      case 'STOCK_EXIT_RETURN':
        return 'Stock Exit Return';

      case 'INTERNAL_USE':
        return 'Internal Use';

      case 'QUALITY_CHECK':
        return 'Quality Check';

      default:
        return source;
    }
  }

  getSourceClass(source: string): string {
    switch (source) {
      case 'STOCK_ENTRY':
        return 'bg-blue-50 text-blue-700';

      case 'DEMO_RETURN':
        return 'bg-purple-50 text-purple-700';

      case 'STOCK_EXIT_RETURN':
        return 'bg-indigo-50 text-indigo-700';

      case 'INTERNAL_USE':
        return 'bg-gray-100 text-gray-700';

      case 'QUALITY_CHECK':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onViewDetails(item: FaultyMaterialItem): void {
    this.viewDetails.emit(item);
  }

  onCreateFault(): void {
    this.createFault.emit();
  }

  clearFilters(): void {
    this.search = '';
    this.status = 'ALL';
    this.condition = 'ALL';
    this.source = 'ALL';
  }
}