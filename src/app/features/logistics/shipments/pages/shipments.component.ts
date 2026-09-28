
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ShipmentKpiStripComponent } from '../components/shipment-kpi-strip/shipment-kpi-strip.component';
import { ShipmentTrackingBoardComponent } from '../components/shipment-tracking-board/shipment-tracking-board.component';
import { ShipmentFiltersComponent } from '../components/shipment-filters/shipment-filters.component';
import { ShipmentListComponent } from '../components/shipment-list/shipment-list.component';
import { ShipmentTimelineComponent } from '../components/shipment-timeline/shipment-timeline.component';
import { ShipmentDetailComponent } from '../components/shipment-detail/shipment-detail.component';

import { ShipmentTrackingItem } from '../utils/shipment-tracking-board.util';
import { ShipmentFilter } from '../utils/shipment-filters.util';
import {
  SHIPMENT_LIST_DATA,
  ShipmentListItem,
} from '../utils/shipment-list.util';
import {
  SHIPMENT_TIMELINE_DATA,
  ShipmentTimelineEvent,
} from '../utils/shipment-timeline.util';

import {
  NewShipmentFormComponent,
  NewShipmentFormData,
} from '../forms/new-shipment-form/new-shipment-form.component';

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
    ShipmentDetailComponent,

    NewShipmentFormComponent,
  ],
  templateUrl: './shipments.component.html',
})
export class ShipmentsComponent {

  // =========================================================
  // NEW SHIPMENT
  // =========================================================

  isNewShipmentOpen = false;

  openNewShipment(): void {
    this.isNewShipmentOpen = true;
  }

  closeNewShipment(): void {
    this.isNewShipmentOpen = false;
  }

  onCreateShipment(shipment: NewShipmentFormData): void {
    console.log('New shipment:', shipment);

    this.closeNewShipment();
  }


  // =========================================================
  // SHIPMENT DATA
  // =========================================================

  readonly allShipments: ShipmentListItem[] = [
    ...SHIPMENT_LIST_DATA,
  ];

  filteredShipments: ShipmentListItem[] = [
    ...this.allShipments,
  ];


  // =========================================================
  // SHIPMENT DETAIL / TRACKING
  // =========================================================

  selectedShipment: ShipmentTrackingItem | null = null;

  isTrackingOpen = false;

  selectedShipmentNumber = '';

  timelineEvents: ShipmentTimelineEvent[] = [
    ...SHIPMENT_TIMELINE_DATA,
  ];


  // =========================================================
  // VIEW SHIPMENT FROM TRACKING BOARD
  // =========================================================

  onViewShipment(
    shipment: ShipmentTrackingItem
  ): void {

    console.log('Tracking board shipment:', shipment);

    this.selectedShipment = shipment;
    this.selectedShipmentNumber = shipment.shipmentNumber;
    this.isTrackingOpen = true;
  }


  // =========================================================
  // CLOSE SHIPMENT DETAIL
  // =========================================================

  onCloseTracking(): void {

    this.selectedShipment = null;
    this.selectedShipmentNumber = '';

    this.isTrackingOpen = false;
  }


  // =========================================================
  // FILTERS
  // =========================================================

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


          const matchesStatus =
            filters.status === 'ALL' ||
            shipment.status === filters.status;


          const matchesCarrier =
            filters.carrier === 'ALL' ||
            shipment.carrier === filters.carrier;


          const matchesDestination =
            filters.destination === 'ALL' ||
            shipment.destination === filters.destination;


          const matchesFromDate =
            !filters.fromDate ||
            shipment.dispatchDate >= filters.fromDate;


          const matchesToDate =
            !filters.toDate ||
            shipment.dispatchDate <= filters.toDate;


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


  // =========================================================
  // RESET FILTERS
  // =========================================================

  onResetFilters(): void {

    this.filteredShipments = [
      ...this.allShipments,
    ];
  }


  // =========================================================
  // VIEW SHIPMENT FROM LIST
  // =========================================================

  onViewShipmentFromList(
    shipment: ShipmentListItem
  ): void {

    console.log('Shipment list item:', shipment);

    /*
     * List item and tracking-board item are different types.
     * We only need the shipment number here to show timeline.
     */

    this.selectedShipmentNumber =
      shipment.shipmentNumber;

    this.timelineEvents = [
      ...SHIPMENT_TIMELINE_DATA,
    ];
  }
}

