import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {
  REPORT_DETAIL_DATA,
  REPORT_DETAIL_SUMMARY,
  ReportDetailItem,
  ReportDetailRecord,
  ReportDetailStatus,
  ReportDetailType,
} from '../../utils/report-detail.util';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-detail.component.html',
})
export class ReportDetailComponent {
  @Input() selectedReport?: ReportDetailRecord;

  reports: ReportDetailRecord[] = REPORT_DETAIL_DATA;

  summary: ReportDetailItem[] = REPORT_DETAIL_SUMMARY;

  get report(): ReportDetailRecord {
    return this.selectedReport ?? this.reports[0];
  }

  getReportTypeLabel(type: ReportDetailType): string {
    switch (type) {
      case 'INVENTORY':
        return 'Inventory';

      case 'DELIVERY':
        return 'Delivery';

      case 'DELAYED_SHIPMENT':
        return 'Delayed Shipment';

      case 'STOCK_MOVEMENT':
        return 'Stock Movement';

      case 'ORDER':
        return 'Order';

      default:
        return type;
    }
  }

  getReportTypeClass(type: ReportDetailType): string {
    switch (type) {
      case 'INVENTORY':
        return 'bg-blue-50 text-blue-700';

      case 'DELIVERY':
        return 'bg-green-50 text-green-700';

      case 'DELAYED_SHIPMENT':
        return 'bg-orange-50 text-orange-700';

      case 'STOCK_MOVEMENT':
        return 'bg-purple-50 text-purple-700';

      case 'ORDER':
        return 'bg-indigo-50 text-indigo-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getStatusLabel(status: ReportDetailStatus): string {
    switch (status) {
      case 'COMPLETED':
        return 'Completed';

      case 'IN_PROGRESS':
        return 'In Progress';

      case 'PENDING':
        return 'Pending';

      case 'DELAYED':
        return 'Delayed';

      case 'CANCELLED':
        return 'Cancelled';

      default:
        return status;
    }
  }

  getStatusClass(status: ReportDetailStatus): string {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-50 text-green-700';

      case 'IN_PROGRESS':
        return 'bg-blue-50 text-blue-700';

      case 'PENDING':
        return 'bg-yellow-50 text-yellow-700';

      case 'DELAYED':
        return 'bg-orange-50 text-orange-700';

      case 'CANCELLED':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  }

  getReportIcon(type: ReportDetailType): string {
    switch (type) {
      case 'INVENTORY':
        return 'inventory_2';

      case 'DELIVERY':
        return 'local_shipping';

      case 'DELAYED_SHIPMENT':
        return 'schedule';

      case 'STOCK_MOVEMENT':
        return 'swap_vert';

      case 'ORDER':
        return 'receipt_long';

      default:
        return 'description';
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }

  onDownloadReport(): void {
    console.log('DOWNLOAD REPORT:', this.report);
  }

  onPrintReport(): void {
    window.print();
  }

  onCloseDetail(): void {
    console.log('CLOSE REPORT DETAIL');
  }
}