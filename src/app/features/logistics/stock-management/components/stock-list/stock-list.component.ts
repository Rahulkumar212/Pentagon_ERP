import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  STOCK_LIST_DATA,
  StockListItem,
} from '../../utils/stock-list.util';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-list.component.html',
})
export class StockListComponent {

  @Input()
  stocks: StockListItem[] = STOCK_LIST_DATA;

  @Output()
  viewDetails = new EventEmitter<StockListItem>();

  search = '';
  status = 'ALL';
  category = 'ALL';
  condition = 'ALL';

  get filteredStocks(): StockListItem[] {
    const searchTerm = this.search.trim().toLowerCase();

    return this.stocks.filter((stock) => {
      const matchesSearch =
        !searchTerm ||
        stock.stockCode.toLowerCase().includes(searchTerm) ||
        stock.itemName.toLowerCase().includes(searchTerm) ||
        stock.category.toLowerCase().includes(searchTerm) ||
        stock.location.toLowerCase().includes(searchTerm);

      const matchesStatus =
        this.status === 'ALL' || stock.status === this.status;

      const matchesCategory =
        this.category === 'ALL' ||
        stock.categoryCode === this.category;

      const matchesCondition =
        this.condition === 'ALL' ||
        stock.condition === this.condition;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesCondition
      );
    });
  }

  get totalItems(): number {
    return this.stocks.length;
  }

  get totalQuantity(): number {
    return this.stocks.reduce(
      (total, stock) => total + stock.totalQuantity,
      0
    );
  }

  get availableQuantity(): number {
    return this.stocks.reduce(
      (total, stock) => total + stock.availableQuantity,
      0
    );
  }

  get reservedQuantity(): number {
    return this.stocks.reduce(
      (total, stock) => total + stock.reservedQuantity,
      0
    );
  }

  getStatusLabel(status: StockListItem['status']): string {
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

  getStatusClass(status: StockListItem['status']): string {
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

  getConditionLabel(condition: StockListItem['condition']): string {
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

  getConditionClass(condition: StockListItem['condition']): string {
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

  onViewDetails(stock: StockListItem): void {
    console.log('STOCK LIST VIEW:', stock);

    this.viewDetails.emit(stock);

    console.log('EVENT EMITTED');
  }

  clearFilters(): void {
    this.search = '';
    this.status = 'ALL';
    this.category = 'ALL';
    this.condition = 'ALL';
  }
}