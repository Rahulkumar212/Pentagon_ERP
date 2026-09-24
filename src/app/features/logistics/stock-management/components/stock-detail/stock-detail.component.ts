import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DEFAULT_STOCK_DETAIL,
  StockDetail,
} from '../../utils/stock-detail.util';

@Component({
  selector: 'app-stock-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-detail.component.html',
})
export class StockDetailComponent {
  @Input() detail: StockDetail = DEFAULT_STOCK_DETAIL;
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  getStatusLabel(status: StockDetail['status']): string {
    switch (status) {
      case 'AVAILABLE':
        return 'Available';

      case 'LOW_STOCK':
        return 'Low Stock';

      case 'OUT_OF_STOCK':
        return 'Out of Stock';

      case 'RESERVED':
        return 'Reserved';

      default:
        return status;
    }
  }

  getStatusClass(status: StockDetail['status']): string {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-green-50 text-green-700';

      case 'LOW_STOCK':
        return 'bg-orange-50 text-orange-700';

      case 'OUT_OF_STOCK':
        return 'bg-red-50 text-red-700';

      case 'RESERVED':
        return 'bg-blue-50 text-blue-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getConditionLabel(condition: StockDetail['condition']): string {
    switch (condition) {
      case 'NEW':
        return 'New';

      case 'GOOD':
        return 'Good';

      case 'DAMAGED':
        return 'Damaged';

      case 'FAULTY':
        return 'Faulty';

      default:
        return condition;
    }
  }

  getConditionClass(condition: StockDetail['condition']): string {
    switch (condition) {
      case 'NEW':
        return 'bg-green-50 text-green-700';

      case 'GOOD':
        return 'bg-blue-50 text-blue-700';

      case 'DAMAGED':
        return 'bg-orange-50 text-orange-700';

      case 'FAULTY':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getMovementStatusClass(
    status: StockDetail['movements'][number]['status']
  ): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-50 text-green-700';

      case 'PENDING':
        return 'bg-orange-50 text-orange-700';

      case 'REJECTED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  onClose(): void {
    this.close.emit();
  }
}