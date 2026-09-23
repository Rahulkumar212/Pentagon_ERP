import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TrackingSummaryComponent } from '../components/tracking-summary/tracking-summary.component';

import {
  TrackingFiltersComponent,
  TrackingFilters,
} from '../components/tracking-filters/tracking-filters.component';

import { ActiveDeliveriesComponent } from '../components/active-deliveries/active-deliveries.component';

import { DeliveryListComponent } from '../components/delivery-list/delivery-list.component';

import { DeliveryDetailComponent } from '../components/delivery-detail/delivery-detail.component';

import { DeliveryTimelineComponent } from '../components/delivery-timeline/delivery-timeline.component';


// =========================================================
// UTILS
// =========================================================

import {
  ACTIVE_DELIVERIES_DATA,
  ActiveDelivery,
} from '../utils/active-deliveries.util';

import {
  DELIVERY_LIST_DATA,
  DeliveryListItem,
} from '../utils/delivery-list.util';

import {
  DEFAULT_DELIVERY_DETAIL,
  DeliveryDetail,
} from '../utils/delivery-detail.util';

import {
  DELIVERY_TIMELINE_DATA,
  DeliveryTimelineItem,
} from '../utils/delivery-timeline.util';


@Component({
  selector: 'app-delivery-tracking',
  standalone: true,

  imports: [
    CommonModule,
    TrackingSummaryComponent,
    TrackingFiltersComponent,
    ActiveDeliveriesComponent,
    DeliveryListComponent,
    DeliveryDetailComponent,
    DeliveryTimelineComponent,
  ],

  templateUrl: './delivery-tracking.component.html',
})
export class DeliveryTrackingComponent {

  // =========================================================
  // DATA
  // =========================================================

  allDeliveries: DeliveryListItem[] = [
    ...DELIVERY_LIST_DATA,
  ];

  filteredDeliveries: DeliveryListItem[] = [
    ...DELIVERY_LIST_DATA,
  ];

  activeDeliveries: ActiveDelivery[] = [
    ...ACTIVE_DELIVERIES_DATA,
  ];

  timeline: DeliveryTimelineItem[] = [
    ...DELIVERY_TIMELINE_DATA,
  ];


  // =========================================================
  // SELECTED DELIVERY
  // =========================================================

  selectedDelivery: DeliveryDetail | null = null;

  isDeliveryDetailOpen = false;

  isTimelineOpen = false;


  // =========================================================
  // PAGE STATE
  // =========================================================

  showFilters = true;


  // =========================================================
  // FILTERS
  // =========================================================

  currentFilters: TrackingFilters = {
    search: '',
    status: 'ALL',
    carrier: 'All Carriers',
    priority: 'ALL',
    fromDate: '',
    toDate: '',
  };


  // =========================================================
  // FILTER HANDLER
  // =========================================================

  onFiltersChange(
    filters: TrackingFilters,
  ): void {

    this.currentFilters = {
      ...filters,
    };

    this.applyFilters();
  }


  // =========================================================
  // APPLY FILTERS
  // =========================================================

  private applyFilters(): void {

    const {
      search,
      status,
      carrier,
      priority,
      fromDate,
      toDate,
    } = this.currentFilters;

    const searchValue =
      search.trim().toLowerCase();


    this.filteredDeliveries =
      this.allDeliveries.filter(
        (delivery) => {

          // -----------------------------------------------
          // Search
          // -----------------------------------------------

          const matchesSearch =
            !searchValue ||
            delivery.orderNumber
              .toLowerCase()
              .includes(searchValue) ||

            delivery.trackingNumber
              .toLowerCase()
              .includes(searchValue) ||

            delivery.customerName
              .toLowerCase()
              .includes(searchValue) ||

            delivery.customerCode
              .toLowerCase()
              .includes(searchValue) ||

            delivery.destination
              .toLowerCase()
              .includes(searchValue);


          // -----------------------------------------------
          // Status
          // -----------------------------------------------

          const matchesStatus =
            status === 'ALL' ||
            delivery.status === status;


          // -----------------------------------------------
          // Carrier
          // -----------------------------------------------

          const matchesCarrier =
            carrier === 'All Carriers' ||
            delivery.carrier === carrier;


          // -----------------------------------------------
          // Priority
          // -----------------------------------------------

          const matchesPriority =
            priority === 'ALL' ||
            delivery.priority === priority;


          // -----------------------------------------------
          // From Date
          // -----------------------------------------------

          const matchesFromDate =
            !fromDate ||
            delivery.expectedDeliveryDate >= fromDate;


          // -----------------------------------------------
          // To Date
          // -----------------------------------------------

          const matchesToDate =
            !toDate ||
            delivery.expectedDeliveryDate <= toDate;


          // -----------------------------------------------
          // Final Result
          // -----------------------------------------------

          return (
            matchesSearch &&
            matchesStatus &&
            matchesCarrier &&
            matchesPriority &&
            matchesFromDate &&
            matchesToDate
          );
        },
      );
  }


  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  onClearFilters(): void {

    this.currentFilters = {
      search: '',
      status: 'ALL',
      carrier: 'All Carriers',
      priority: 'ALL',
      fromDate: '',
      toDate: '',
    };


    this.filteredDeliveries = [
      ...this.allDeliveries,
    ];
  }


  // =========================================================
  // VIEW DELIVERY DETAIL
  // =========================================================

  onViewDeliveryDetails(
    delivery: DeliveryListItem,
  ): void {

    this.selectedDelivery =
      this.createDeliveryDetail(
        delivery,
      );

    this.isDeliveryDetailOpen = true;
  }


  // =========================================================
  // ACTIVE DELIVERY → DETAIL
  // =========================================================

  onViewActiveDelivery(
    delivery: ActiveDelivery,
  ): void {

    const listDelivery =
      this.allDeliveries.find(
        (item) =>
          item.id === delivery.id,
      );


    if (listDelivery) {

      this.onViewDeliveryDetails(
        listDelivery,
      );

      return;
    }


    this.selectedDelivery =
      this.createDeliveryDetailFromActive(
        delivery,
      );

    this.isDeliveryDetailOpen = true;
  }


  // =========================================================
  // TRACK FROM DELIVERY LIST
  // =========================================================

  onTrackDelivery(
    delivery: DeliveryListItem,
  ): void {

    this.openTimeline(
      delivery,
    );
  }


  // =========================================================
  // TRACK FROM ACTIVE DELIVERIES
  // =========================================================

  onTrackActiveDelivery(
    delivery: ActiveDelivery,
  ): void {

    this.openTimelineFromActive(
      delivery,
    );
  }


  // =========================================================
  // TRACK FROM DETAIL
  // =========================================================

  onTrackDeliveryDetail(
    detail: DeliveryDetail,
  ): void {

    this.selectedDelivery = detail;

    this.isDeliveryDetailOpen = false;

    this.isTimelineOpen = true;
  }


  // =========================================================
  // OPEN TIMELINE
  // =========================================================

  private openTimeline(
    delivery: DeliveryListItem,
  ): void {

    this.selectedDelivery =
      this.createDeliveryDetail(
        delivery,
      );

    this.isDeliveryDetailOpen = false;

    this.isTimelineOpen = true;
  }


  // =========================================================
  // OPEN TIMELINE FROM ACTIVE DELIVERY
  // =========================================================

  private openTimelineFromActive(
    delivery: ActiveDelivery,
  ): void {

    const listDelivery =
      this.allDeliveries.find(
        (item) =>
          item.id === delivery.id,
      );


    if (listDelivery) {

      this.openTimeline(
        listDelivery,
      );

      return;
    }


    this.isTimelineOpen = true;
  }


  // =========================================================
  // CLOSE DETAIL
  // =========================================================

  onCloseDeliveryDetail(): void {

    this.isDeliveryDetailOpen = false;

    this.selectedDelivery = null;
  }


  // =========================================================
  // CLOSE TIMELINE
  // =========================================================

  onCloseTimeline(): void {

    this.isTimelineOpen = false;
  }


  // =========================================================
  // CONTACT DRIVER
  // =========================================================

  onContactDeliveryDriver(
    detail: DeliveryDetail,
  ): void {

    if (!detail.driverContact) {
      return;
    }


    window.location.href =
      `tel:${detail.driverContact}`;
  }


  // =========================================================
  // CREATE DETAIL FROM DELIVERY LIST
  // =========================================================

  private createDeliveryDetail(
    delivery: DeliveryListItem,
  ): DeliveryDetail {

    return {

      ...DEFAULT_DELIVERY_DETAIL,

      id: delivery.id,

      orderNumber:
        delivery.orderNumber,

      trackingNumber:
        delivery.trackingNumber,

      customerName:
        delivery.customerName,

      customerCode:
        delivery.customerCode,

      source:
        delivery.source,

      status:
        delivery.status,

      priority:
        delivery.priority,

      destination:
        delivery.destination,

      carrier:
        delivery.carrier,

      expectedDeliveryDate:
        delivery.expectedDeliveryDate,

      dispatchDate:
        delivery.dispatchDate,

      totalItems:
        delivery.totalItems,

      totalUnits:
        delivery.totalUnits,
    };
  }


  // =========================================================
  // CREATE DETAIL FROM ACTIVE DELIVERY
  // =========================================================

  private createDeliveryDetailFromActive(
    delivery: ActiveDelivery,
  ): DeliveryDetail {

    return {

      ...DEFAULT_DELIVERY_DETAIL,

      id: delivery.id,

      orderNumber:
        delivery.orderNumber,

      trackingNumber:
        delivery.trackingNumber,

      customerName:
        delivery.customerName,

      destination:
        delivery.destination,

      carrier:
        delivery.carrier,

      status:
        delivery.status,

      priority:
        delivery.priority,

      currentLocation:
        delivery.currentLocation,

      expectedDeliveryDate:
        this.convertDisplayDateToIso(
          delivery.expectedDelivery,
        ),

      driverName:
        delivery.driverName,

      driverContact:
        delivery.driverContact,
    };
  }


  // =========================================================
  // DATE HELPER
  // =========================================================

  private convertDisplayDateToIso(
    value: string,
  ): string {

    const date = new Date(value);


    if (Number.isNaN(
      date.getTime(),
    )) {

      return value;
    }


    return date
      .toISOString()
      .split('T')[0];
  }
}