
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



import {
  DEFAULT_MOVEMENT_FILTERS,
  MovementFilters,
  MovementReferenceType,
  MovementStatus,
  MovementType,
  StockMovementItem,
  STOCK_MOVEMENT_DATA,
} from '../utils/stock-movement.util';

import { MovementSummaryComponent } from '../components/movement-summary/movement-summary.component';
import { MovementFiltersComponent } from '../components/movement-filters/movement-filters.component';
import { MovementListComponent } from '../components/movement-list/movement-list.component';
import { MovementDetailComponent } from '../components/movement-detail/movement-detail.component';

@Component({
  selector: 'app-stock-movement',
  standalone: true,
  imports: [
    CommonModule,
    MovementSummaryComponent,
    MovementFiltersComponent,
    MovementListComponent,
    MovementDetailComponent,
  ],
  templateUrl: './stock-movement.component.html',
})
export class StockMovementComponent {
  allMovements: StockMovementItem[] = [
    ...STOCK_MOVEMENT_DATA,
  ];

  filteredMovements: StockMovementItem[] = [
    ...STOCK_MOVEMENT_DATA,
  ];

  currentFilters: MovementFilters = {
    ...DEFAULT_MOVEMENT_FILTERS,
  };

  selectedMovement: StockMovementItem | null = null;

  isMovementDetailOpen = false;


  // ============================================================
  // Filters
  // ============================================================

  onFiltersChange(filters: MovementFilters): void {
    this.currentFilters = {
      ...filters,
    };

    this.applyFilters();
  }


  onClearFilters(): void {
    this.currentFilters = {
      ...DEFAULT_MOVEMENT_FILTERS,
    };

    this.filteredMovements = [
      ...this.allMovements,
    ];
  }


  private applyFilters(): void {
    const {
      search,
      movementType,
      status,
      referenceType,
      fromDate,
      toDate,
    } = this.currentFilters;

    const searchValue = search
      .trim()
      .toLowerCase();


    this.filteredMovements = this.allMovements.filter(
      (movement) => {

        // ------------------------------------------------------
        // Search
        // ------------------------------------------------------

        const matchesSearch =
          !searchValue ||
          movement.movementNumber
            .toLowerCase()
            .includes(searchValue) ||
          movement.stockCode
            .toLowerCase()
            .includes(searchValue) ||
          movement.itemName
            .toLowerCase()
            .includes(searchValue) ||
          movement.referenceNumber
            .toLowerCase()
            .includes(searchValue) ||
          movement.performedBy
            .toLowerCase()
            .includes(searchValue);


        // ------------------------------------------------------
        // Movement Type
        // ------------------------------------------------------

        const matchesMovementType =
          movementType === 'ALL' ||
          movement.movementType === movementType;


        // ------------------------------------------------------
        // Status
        // ------------------------------------------------------

        const matchesStatus =
          status === 'ALL' ||
          movement.status === status;


        // ------------------------------------------------------
        // Reference Type
        // ------------------------------------------------------

        const matchesReferenceType =
          referenceType === 'ALL' ||
          movement.referenceType === referenceType;


        // ------------------------------------------------------
        // From Date
        // ------------------------------------------------------

        const matchesFromDate =
          !fromDate ||
          movement.movementDate >= fromDate;


        // ------------------------------------------------------
        // To Date
        // ------------------------------------------------------

        const matchesToDate =
          !toDate ||
          movement.movementDate <= toDate;


        return (
          matchesSearch &&
          matchesMovementType &&
          matchesStatus &&
          matchesReferenceType &&
          matchesFromDate &&
          matchesToDate
        );
      }
    );
  }


  // ============================================================
  // Movement Detail
  // ============================================================

  onViewMovementDetails(
    movement: StockMovementItem
  ): void {
    this.selectedMovement = movement;

    this.isMovementDetailOpen = true;
  }


  onCloseMovementDetail(): void {
    this.isMovementDetailOpen = false;

    this.selectedMovement = null;
  }
}

