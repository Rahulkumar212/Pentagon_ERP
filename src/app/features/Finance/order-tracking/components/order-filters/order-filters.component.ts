import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';


export type PaymentStatus =
  | 'ALL'
  | 'PAID'
  | 'PARTIALLY_PAID'
  | 'UNPAID';


export type DeliveryStage =
  | 'ALL'
  | 'PENDING'
  | 'IN_PRODUCTION'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLED';


export type SortBy =
  | 'NEWEST'
  | 'OLDEST'
  | 'AMOUNT_HIGH'
  | 'AMOUNT_LOW';


export type ViewMode =
  | 'GRID'
  | 'LIST';


export interface OrderFilterState {

  search: string;

  paymentStatus: PaymentStatus;

  deliveryStage: DeliveryStage;

  sortBy: SortBy;

  viewMode: ViewMode;
}


@Component({
  selector: 'app-order-filters',

  standalone: true,

  imports: [
    FormsModule
  ],

  templateUrl: './order-filters.component.html'
})
export class OrderFiltersComponent {


  /* =======================================================
     FILTER STATE
     ======================================================= */

  search = '';

  paymentStatus: PaymentStatus = 'ALL';

  deliveryStage: DeliveryStage = 'ALL';

  sortBy: SortBy = 'NEWEST';

  viewMode: ViewMode = 'GRID';


  /* =======================================================
     OUTPUT
     ======================================================= */

  @Output()
  filterChange =
    new EventEmitter<OrderFilterState>();


  @Output()
  viewModeChange =
    new EventEmitter<ViewMode>();


  /* =======================================================
     FILTER CHANGE
     ======================================================= */

  onFilterChange(): void {

    this.filterChange.emit({
      search: this.search,

      paymentStatus:
        this.paymentStatus,

      deliveryStage:
        this.deliveryStage,

      sortBy:
        this.sortBy,

      viewMode:
        this.viewMode
    });

  }


  /* =======================================================
     PAYMENT STATUS
     ======================================================= */

  setPaymentStatus(
    status: PaymentStatus
  ): void {

    this.paymentStatus = status;

    this.onFilterChange();

  }


  /* =======================================================
     VIEW MODE
     ======================================================= */

  setViewMode(
    mode: ViewMode
  ): void {

    this.viewMode = mode;

    /*
     * Parent ko batayenge ki
     * GRID open karna hai ya LIST.
     */

    this.viewModeChange.emit(mode);

    /*
     * Agar filtering state bhi parent
     * ko ek saath chahiye.
     */

    this.onFilterChange();

  }

}