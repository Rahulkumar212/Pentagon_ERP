
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
  STOCK_MOVEMENT_DATA,
} from '../../utils/stock-movement.util';

@Component({
  selector: 'app-movement-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movement-detail.component.html',
})
export class MovementDetailComponent {
  @Input()
  detail: StockMovementItem = STOCK_MOVEMENT_DATA[0];

  @Input()
  isOpen = false;

  @Output()
  close = new EventEmitter<void>();

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

  getMovementTypeIcon(type: MovementType): string {
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

  getReferenceLabel(
    referenceType: StockMovementItem['referenceType']
  ): string {
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

  onClose(): void {
    this.close.emit();
  }
}

