
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  MovementStatus,
  MovementType,
  StockMovementItem,
} from '../../utils/stock-movement.util';

@Component({
  selector: 'app-movement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movement-list.component.html',
})
export class MovementListComponent {
  @Input()
  movements: StockMovementItem[] = [];

  @Output()
  viewDetails = new EventEmitter<StockMovementItem>();

  get totalMovements(): number {
    return this.movements.length;
  }

  get totalEntryQuantity(): number {
    return this.movements
      .filter((movement) => movement.movementType === 'ENTRY')
      .reduce((total, movement) => total + movement.quantity, 0);
  }

  get totalExitQuantity(): number {
    return this.movements
      .filter((movement) => movement.movementType === 'EXIT')
      .reduce((total, movement) => total + movement.quantity, 0);
  }

  get pendingCount(): number {
    return this.movements.filter(
      (movement) => movement.status === 'PENDING'
    ).length;
  }

  getMovementTypeLabel(type: MovementType): string {
    switch (type) {
      case 'ENTRY':
        return 'Stock Entry';

      case 'EXIT':
        return 'Stock Exit';

      default:
        return type;
    }
  }

  getMovementTypeClass(type: MovementType): string {
    switch (type) {
      case 'ENTRY':
        return 'bg-green-50 text-green-700';

      case 'EXIT':
        return 'bg-orange-50 text-orange-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getMovementIcon(type: MovementType): string {
    switch (type) {
      case 'ENTRY':
        return 'arrow_downward';

      case 'EXIT':
        return 'arrow_upward';

      default:
        return 'swap_vert';
    }
  }

  getStatusLabel(status: MovementStatus): string {
    switch (status) {
      case 'PENDING':
        return 'Pending';

      case 'COMPLETED':
        return 'Completed';

      case 'REJECTED':
        return 'Rejected';

      default:
        return status;
    }
  }

  getStatusClass(status: MovementStatus): string {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-50 text-yellow-700';

      case 'COMPLETED':
        return 'bg-green-50 text-green-700';

      case 'REJECTED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getReferenceLabel(referenceType: StockMovementItem['referenceType']): string {
    switch (referenceType) {
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
        return referenceType;
    }
  }

  onViewDetails(movement: StockMovementItem): void {
    this.viewDetails.emit(movement);
  }
}

