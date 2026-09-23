import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ShipmentKpiStripComponent } from '../components/shipment-kpi-strip/shipment-kpi-strip.component';

import { ShipmentTrackingBoardComponent } from '../components/shipment-tracking-board/shipment-tracking-board.component';

import { ShipmentFiltersComponent } from '../components/shipment-filters/shipment-filters.component';

import { ShipmentListComponent } from '../components/shipment-list/shipment-list.component';

import { ShipmentTimelineComponent } from '../components/shipment-timeline/shipment-timeline.component';

import {
  ShipmentTrackingItem,
} from '../utils/shipment-tracking-board.util';

import {
  ShipmentFilter,
} from '../utils/shipment-filters.util';

import {
  SHIPMENT_LIST_DATA,
  ShipmentListItem,
} from '../utils/shipment-list.util';

import {
  SHIPMENT_TIMELINE_DATA,
  ShipmentTimelineEvent,
} from '../utils/shipment-timeline.util';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [
    CommonModule,

    ShipmentKpiStripComponent,

    ShipmentTrackingBoardComponent,

    ShipmentFiltersComponent,

    ShipmentListComponent,

    ShipmentTimelineComponent,
  ],
  templateUrl: './shipments.component.html',
})
export class ShipmentsComponent {

  // ============================================================
  // TRACKING BOARD
  // ============================================================

  selectedShipment: ShipmentTrackingItem | null = null;

  isTrackingOpen = false;


  // ============================================================
  // SHIPMENT LIST
  // ============================================================

  readonly allShipments: ShipmentListItem[] = [
    ...SHIPMENT_LIST_DATA,
  ];

  filteredShipments: ShipmentListItem[] = [
    ...this.allShipments,
  ];


  // ============================================================
  // TIMELINE
  // ============================================================

  timelineEvents: ShipmentTimelineEvent[] = [
    ...SHIPMENT_TIMELINE_DATA,
  ];

  selectedShipmentNumber = '';


  // ============================================================
  // OPEN SHIPMENT TRACKING
  // ============================================================

  onViewShipment(
    shipment: ShipmentTrackingItem
  ): void {

    this.selectedShipment = shipment;

    this.selectedShipmentNumber =
      shipment.shipmentNumber;

    this.isTrackingOpen = true;
  }


  // ============================================================
  // CLOSE TRACKING
  // ============================================================

  onCloseTracking(): void {

    this.selectedShipment = null;

    this.selectedShipmentNumber = '';

    this.isTrackingOpen = false;
  }


  // ============================================================
  // FILTER SHIPMENTS
  // ============================================================

  onFilterChange(
    filters: ShipmentFilter
  ): void {

    const search =
      filters.search
        .trim()
        .toLowerCase();

    this.filteredShipments =
      this.allShipments.filter(
        (shipment) => {

          // ------------------------------------------------------
          // SEARCH
          // ------------------------------------------------------

          const matchesSearch =
            !search ||
            shipment.shipmentNumber
              .toLowerCase()
              .includes(search) ||

            shipment.orderNumber
              .toLowerCase()
              .includes(search) ||

            shipment.customerName
              .toLowerCase()
              .includes(search) ||

            shipment.trackingNumber
              .toLowerCase()
              .includes(search) ||

            shipment.carrier
              .toLowerCase()
              .includes(search);


          // ------------------------------------------------------
          // STATUS
          // ------------------------------------------------------

          const matchesStatus =
            filters.status === 'ALL' ||
            shipment.status === filters.status;


          // ------------------------------------------------------
          // CARRIER
          // ------------------------------------------------------

          const matchesCarrier =
            filters.carrier === 'ALL' ||
            shipment.carrier === filters.carrier;


          // ------------------------------------------------------
          // DESTINATION
          // ------------------------------------------------------

          const matchesDestination =
            filters.destination === 'ALL' ||
            shipment.destination === filters.destination;


          // ------------------------------------------------------
          // FROM DATE
          // ------------------------------------------------------

          const matchesFromDate =
            !filters.fromDate ||
            shipment.dispatchDate >=
              filters.fromDate;


          // ------------------------------------------------------
          // TO DATE
          // ------------------------------------------------------

          const matchesToDate =
            !filters.toDate ||
            shipment.dispatchDate <=
              filters.toDate;


          return (
            matchesSearch &&
            matchesStatus &&
            matchesCarrier &&
            matchesDestination &&
            matchesFromDate &&
            matchesToDate
          );
        }
      );
  }


  // ============================================================
  // RESET FILTERS
  // ============================================================

  onResetFilters(): void {

    this.filteredShipments = [
      ...this.allShipments,
    ];
  }


  // ============================================================
  // VIEW SHIPMENT FROM LIST
  // ============================================================

  onViewShipmentFromList(
    shipment: ShipmentListItem
  ): void {

    this.selectedShipmentNumber =
      shipment.shipmentNumber;

    this.timelineEvents = [
      ...SHIPMENT_TIMELINE_DATA,
    ];
  }
}