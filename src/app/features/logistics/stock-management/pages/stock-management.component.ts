import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { StockSummaryComponent } from '../components/stock-summary/stock-summary.component';
import {
  StockFiltersComponent,
  StockFilters,
} from '../components/stock-filters/stock-filters.component';

import { StockOverviewComponent } from '../components/stock-overview/stock-overview.component';
import { ProcurementComponent } from '../components/procurement/procurement.component';
import { StockEntryComponent } from '../components/stock-entry/stock-entry.component';
import { StockExitComponent } from '../components/stock-exit/stock-exit.component';
import { StockListComponent } from '../components/stock-list/stock-list.component';
import { StockDetailComponent } from '../components/stock-detail/stock-detail.component';

import { DemoReturnsComponent } from '../components/demo-returns/demo-returns.component';
import { DemoUnitsComponent } from '../components/demo-units/demo-units.component';
import { FaultyMaterialsComponent } from '../components/faulty-materials/faulty-materials.component';
import { OfficeUseComponent } from '../components/office-use/office-use.component';

import {
  STOCK_LIST_DATA,
  StockListItem,
} from '../utils/stock-list.util';

import {
  DEFAULT_STOCK_DETAIL,
  StockDetail,
} from '../utils/stock-detail.util';

@Component({
  selector: 'app-stock-management',
  standalone: true,
  imports: [
    CommonModule,

    StockSummaryComponent,
    StockFiltersComponent,
    StockOverviewComponent,

    ProcurementComponent,
    StockEntryComponent,
    StockExitComponent,

    StockListComponent,
    StockDetailComponent,

    DemoReturnsComponent,
    DemoUnitsComponent,
    FaultyMaterialsComponent,
    OfficeUseComponent,
  ],
  templateUrl: './stock-management.component.html',
})
export class StockManagementComponent {
  // =========================================================
  // DATA
  // =========================================================

  allStock: StockListItem[] = [
    ...STOCK_LIST_DATA,
  ];

  filteredStock: StockListItem[] = [
    ...STOCK_LIST_DATA,
  ];

  // =========================================================
  // SELECTED STOCK
  // =========================================================

  selectedStock: StockDetail | null = null;

  isStockDetailOpen = false;

  // =========================================================
  // ACTIVE SECTION
  // =========================================================

  activeSection:
    | 'OVERVIEW'
    | 'PROCUREMENT'
    | 'STOCK_ENTRY'
    | 'STOCK_EXIT'
    | 'DEMO_UNITS'
    | 'DEMO_RETURNS'
    | 'OFFICE_USE'
    | 'FAULTY_MATERIALS'
    | 'STOCK_LIST' = 'OVERVIEW';

  // =========================================================
  // FILTERS
  // =========================================================

  currentFilters: StockFilters = {
    search: '',
    category: 'ALL',
    status: 'ALL',
    condition: 'ALL',
  };

  // =========================================================
  // SECTION CHANGE
  // =========================================================

  onSectionChange(
    section:
      | 'OVERVIEW'
      | 'PROCUREMENT'
      | 'STOCK_ENTRY'
      | 'STOCK_EXIT'
      | 'DEMO_UNITS'
      | 'DEMO_RETURNS'
      | 'OFFICE_USE'
      | 'FAULTY_MATERIALS'
      | 'STOCK_LIST',
  ): void {
    this.activeSection = section;
  }

  // =========================================================
  // FILTER CHANGE
  // =========================================================

  onFiltersChange(filters: StockFilters): void {
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
      category,
      status,
      condition,
    } = this.currentFilters;

    const searchValue = search.trim().toLowerCase();

    this.filteredStock = this.allStock.filter((stock) => {
      // -----------------------------------------------------
      // Search
      // -----------------------------------------------------

      const matchesSearch =
        !searchValue ||
        stock.itemName
          .toLowerCase()
          .includes(searchValue) ||
        stock.category
          .toLowerCase()
          .includes(searchValue);

      // -----------------------------------------------------
      // Category
      // -----------------------------------------------------

      const matchesCategory =
        category === 'ALL' ||
        stock.category === category;

      // -----------------------------------------------------
      // Stock Status
      // -----------------------------------------------------

      const matchesStatus =
        status === 'ALL' ||
        stock.status === status;

      // -----------------------------------------------------
      // Location
      // -----------------------------------------------------

      const matchesLocation =
        condition === 'ALL' ||
        stock.condition === condition;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesLocation
      );
    });
  }

  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  onClearFilters(): void {
    this.currentFilters = {
      search: '',
      category: 'ALL',
      status: 'ALL',
      condition: 'ALL',
    };

    this.filteredStock = [
      ...this.allStock,
    ];
  }

  // =========================================================
  // VIEW STOCK DETAIL
  // =========================================================

  onViewStockDetails(stock: StockListItem): void {
  console.log('VIEW CLICKED:', stock);

  this.selectedStock = this.createStockDetail(stock);

  console.log('SELECTED STOCK:', this.selectedStock);

  this.isStockDetailOpen = true;

  console.log('MODAL OPEN:', this.isStockDetailOpen);
}

  // =========================================================
  // CREATE STOCK DETAIL
  // =========================================================

  private createStockDetail(
    stock: StockListItem,
  ): StockDetail {
    return {
      ...DEFAULT_STOCK_DETAIL,

      id: stock.id,

      itemName: stock.itemName,

      category: stock.category,

      status: stock.status,

      location: stock.location,

      availableQuantity:
        stock.availableQuantity,

      reservedQuantity:
        stock.reservedQuantity,

      unit: stock.unit,

      lastUpdated:
        stock.lastUpdated,
    };
  }

  // =========================================================
  // CLOSE STOCK DETAIL
  // =========================================================

  onCloseStockDetail(): void {
    this.isStockDetailOpen = false;

    this.selectedStock = null;
  }

  // =========================================================
  // STOCK ACTIONS
  // =========================================================

  onStockEntry(): void {
    this.activeSection = 'STOCK_ENTRY';
  }

  onStockExit(): void {
    this.activeSection = 'STOCK_EXIT';
  }

  onProcurement(): void {
    this.activeSection = 'PROCUREMENT';
  }

  onDemoUnit(): void {
    this.activeSection = 'DEMO_UNITS';
  }

  onDemoReturn(): void {
    this.activeSection = 'DEMO_RETURNS';
  }

  onOfficeUse(): void {
    this.activeSection = 'OFFICE_USE';
  }

  onFaultyMaterial(): void {
    this.activeSection = 'FAULTY_MATERIALS';
  }
}