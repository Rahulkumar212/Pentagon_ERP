import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportSummaryComponent } from '../components/report-summary/report-summary.component';
import { ReportFiltersComponent } from '../components/report-filters/report-filters.component';
import { InventoryReportComponent } from '../components/inventory-report/inventory-report.component';
import { DeliveryReportComponent } from '../components/delivery-report/delivery-report.component';
import { DelayedShipmentReportComponent } from '../components/delayed-shipment-report/delayed-shipment-report.component';
import { StockMovementReportComponent } from '../components/stock-movement-report/stock-movement-report.component';
import { OrderReportComponent } from '../components/order-report/order-report.component';


type ReportTab =
  | 'OVERVIEW'
  | 'INVENTORY'
  | 'DELIVERY'
  | 'DELAYED'
  | 'STOCK_MOVEMENT'
  | 'ORDERS';

interface ReportTabItem {
  id: ReportTab;
  label: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    ReportSummaryComponent,
    ReportFiltersComponent,
    InventoryReportComponent,
    DeliveryReportComponent,
    DelayedShipmentReportComponent,
    StockMovementReportComponent,
    OrderReportComponent,
  ],
  templateUrl: './reports.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
  private readonly cdr = inject(ChangeDetectorRef);

  activeTab: ReportTab = 'OVERVIEW';

  readonly reportTabs: ReportTabItem[] = [
    {
      id: 'OVERVIEW',
      label: 'Overview',
      icon: 'dashboard',
      description: 'Overall logistics report summary',
    },
    {
      id: 'INVENTORY',
      label: 'Inventory',
      icon: 'inventory_2',
      description: 'Warehouse inventory report',
    },
    {
      id: 'DELIVERY',
      label: 'Delivery',
      icon: 'local_shipping',
      description: 'Delivery performance report',
    },
    {
      id: 'DELAYED',
      label: 'Delayed Shipments',
      icon: 'warning',
      description: 'Delayed shipment report',
    },
    {
      id: 'STOCK_MOVEMENT',
      label: 'Stock Movement',
      icon: 'swap_vert',
      description: 'Stock entry and exit report',
    },
    {
      id: 'ORDERS',
      label: 'Orders',
      icon: 'receipt_long',
      description: 'Order activity report',
    },
  ];

  setActiveTab(tab: ReportTab): void {
    this.activeTab = tab;
    this.cdr.markForCheck();
  }

  isActive(tab: ReportTab): boolean {
    return this.activeTab === tab;
  }

  onFiltersChanged(filters: unknown): void {
    console.log('REPORT FILTERS:', filters);
  }

  onExport(): void {
    console.log('EXPORT REPORT:', this.activeTab);

    // Later API/export implementation:
    // this.reportsService.exportReport(this.activeTab, filters)
  }

  get activeTabLabel(): string {
    return (
      this.reportTabs.find((tab) => tab.id === this.activeTab)?.label ??
      'Overview'
    );
  }

  get activeTabDescription(): string {
    return (
      this.reportTabs.find((tab) => tab.id === this.activeTab)?.description ??
      'Overall logistics report summary'
    );
  }
}