import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DispatchSummaryComponent } from '../components/dispatch-summary/dispatch-summary.component';

import { DispatchFiltersComponent } from '../components/dispatch-filters/dispatch-filters.component';
import {
  DispatchFilter,
} from '../utils/dispatch-filters.util';

import { DispatchQueueComponent } from '../components/dispatch-queue/dispatch-queue.component';
import {
  DISPATCH_QUEUE_DATA,
  DispatchQueueItem,
} from '../utils/dispatch-queue.util';

import { DispatchPreparationComponent } from '../components/dispatch-preparation/dispatch-preparation.component';
import {
  DEFAULT_DISPATCH_PREPARATION,
  DispatchPreparation,
} from '../utils/dispatch-preparation.util';

import { DispatchDetailComponent } from '../components/dispatch-detail/dispatch-detail.component';
import {
  DEFAULT_DISPATCH_DETAIL,
  DispatchDetail,
} from '../utils/dispatch-detail.util';

@Component({
  selector: 'app-dispatch',
  standalone: true,
  imports: [
    CommonModule,
    DispatchSummaryComponent,
    DispatchFiltersComponent,
    DispatchQueueComponent,
    DispatchPreparationComponent,
    DispatchDetailComponent,
  ],
  templateUrl: './dispatch.component.html',
})
export class DispatchComponent {
  // --------------------------------------------------
  // DATA
  // --------------------------------------------------

  readonly allOrders: DispatchQueueItem[] = [
    ...DISPATCH_QUEUE_DATA,
  ];

  filteredOrders: DispatchQueueItem[] = [
    ...this.allOrders,
  ];

  // --------------------------------------------------
  // DETAIL
  // --------------------------------------------------

  selectedDispatch: DispatchDetail | null = null;

  isDispatchDetailOpen = false;

  // --------------------------------------------------
  // PREPARATION
  // --------------------------------------------------

  selectedPreparation: DispatchPreparation | null = null;

  isPreparationOpen = false;

  // --------------------------------------------------
  // FILTERS
  // --------------------------------------------------

  onFilterChange(filters: DispatchFilter): void {
    const search = filters.search
      .trim()
      .toLowerCase();

    this.filteredOrders = this.allOrders.filter(
      (order) => {
        const matchesSearch =
          !search ||
          order.orderNumber
            .toLowerCase()
            .includes(search) ||
          order.customerName
            .toLowerCase()
            .includes(search) ||
          order.customerCode
            .toLowerCase()
            .includes(search) ||
          order.destination
            .toLowerCase()
            .includes(search) ||
          order.carrier
            .toLowerCase()
            .includes(search);

        const matchesStatus =
          filters.status === 'ALL' ||
          order.status === filters.status;

        const matchesSource =
          filters.source === 'ALL' ||
          order.source === filters.source;

        const matchesPriority =
          filters.priority === 'ALL' ||
          order.priority === filters.priority;

        const matchesCarrier =
          filters.carrier === 'ALL' ||
          order.carrier === filters.carrier;

        const matchesDate =
          !filters.dispatchDate ||
          order.expectedDispatchDate ===
            filters.dispatchDate;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesSource &&
          matchesPriority &&
          matchesCarrier &&
          matchesDate
        );
      },
    );
  }

  onResetFilters(): void {
    this.filteredOrders = [
      ...this.allOrders,
    ];
  }

  // --------------------------------------------------
  // QUEUE -> DETAIL
  // --------------------------------------------------

  onViewOrder(order: DispatchQueueItem): void {
    this.selectedDispatch =
      this.createDispatchDetail(order);

    this.isDispatchDetailOpen = true;
  }

  // --------------------------------------------------
  // QUEUE -> PREPARATION
  // --------------------------------------------------

  onProcessOrder(order: DispatchQueueItem): void {
    this.selectedPreparation =
      this.createDispatchPreparation(order);

    this.isPreparationOpen = true;
  }

  // --------------------------------------------------
  // DETAIL
  // --------------------------------------------------

  onCloseDispatchDetail(): void {
    this.selectedDispatch = null;
    this.isDispatchDetailOpen = false;
  }

  onProcessDispatch(
    detail: DispatchDetail,
  ): void {
    const queueOrder =
      this.allOrders.find(
        (order) =>
          order.orderNumber ===
          detail.orderNumber,
      );

    if (!queueOrder) {
      return;
    }

    this.selectedPreparation =
      this.createDispatchPreparation(queueOrder);

    this.isPreparationOpen = true;

    this.isDispatchDetailOpen = false;
  }

  onMarkDispatchReady(
    detail: DispatchDetail,
  ): void {
    this.updateOrderStatus(
      detail.orderNumber,
      'READY_TO_DISPATCH',
    );

    this.isDispatchDetailOpen = false;
  }

  onConfirmDispatch(
    detail: DispatchDetail,
  ): void {
    this.updateOrderStatus(
      detail.orderNumber,
      'DISPATCHED',
    );

    this.isDispatchDetailOpen = false;
  }

  // --------------------------------------------------
  // PREPARATION
  // --------------------------------------------------

  onClosePreparation(): void {
    this.selectedPreparation = null;
    this.isPreparationOpen = false;
  }

  onSavePreparation(
    preparation: DispatchPreparation,
  ): void {
    this.selectedPreparation = {
      ...preparation,
    };
  }

  onReadyForDispatch(
    preparation: DispatchPreparation,
  ): void {
    this.updateOrderStatus(
      preparation.orderNumber,
      'READY_TO_DISPATCH',
    );

    this.isPreparationOpen = false;
    this.selectedPreparation = null;
  }

  onPreparationConfirmDispatch(
    preparation: DispatchPreparation,
  ): void {
    this.updateOrderStatus(
      preparation.orderNumber,
      'DISPATCHED',
    );

    this.isPreparationOpen = false;
    this.selectedPreparation = null;
  }

  // --------------------------------------------------
  // HELPERS
  // --------------------------------------------------

  private updateOrderStatus(
    orderNumber: string,
    status: DispatchQueueItem['status'],
  ): void {
    const index =
      this.allOrders.findIndex(
        (order) =>
          order.orderNumber === orderNumber,
      );

    if (index === -1) {
      return;
    }

    this.allOrders[index] = {
      ...this.allOrders[index],
      status,
    };

    this.filteredOrders =
      [...this.allOrders];
  }

  private createDispatchPreparation(
    order: DispatchQueueItem,
  ): DispatchPreparation {
    return {
      ...DEFAULT_DISPATCH_PREPARATION,

      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerCode: order.customerCode,

      source: order.source,

      destination: order.destination,

      carrier: order.carrier,

      warehouse: order.warehouse,

      expectedDispatchDate:
        order.expectedDispatchDate,

      totalItems: order.totalItems,

      totalUnits: order.totalUnits,

      paymentStatus:
        order.paymentStatus,

      notes: order.notes,

      items:
        DEFAULT_DISPATCH_PREPARATION.items.map(
          (item) => ({
            ...item,
          }),
        ),

      checklist:
        DEFAULT_DISPATCH_PREPARATION.checklist.map(
          (item) => ({
            ...item,
          }),
        ),
    };
  }

  private createDispatchDetail(
    order: DispatchQueueItem,
  ): DispatchDetail {
    return {
      ...DEFAULT_DISPATCH_DETAIL,

      id: order.id,

      orderNumber: order.orderNumber,

      customerName: order.customerName,

      customerCode: order.customerCode,

      source: order.source,

      status: order.status,

      priority: order.priority,

      destination: order.destination,

      carrier: order.carrier,

      warehouse: order.warehouse,

      expectedDispatchDate:
        order.expectedDispatchDate,

      totalItems: order.totalItems,

      totalUnits: order.totalUnits,

      paymentStatus:
        order.paymentStatus,

      orderDate: order.createdDate,

      notes: order.notes,

      items:
        DEFAULT_DISPATCH_DETAIL.items.map(
          (item) => ({
            ...item,
          }),
        ),

      activities:
        DEFAULT_DISPATCH_DETAIL.activities.map(
          (activity) => ({
            ...activity,
          }),
        ),
    };
  }
}