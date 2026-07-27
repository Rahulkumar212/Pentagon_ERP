import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { ReportsHeaderComponent } from '../components/reports-header/reports-header.component';
import { StatementReportComponent } from '../components/statement-report/statement-report.component';

import { BalanceSheetComponent } from '../components/balance-sheet/balance-sheet.component';
import { CashFlowComponent } from '../components/cash-flow/cash-flow.component';
import { TaxGstComponent } from '../components/tax-gst/tax-gst.component';

@Component({
  selector: 'app-reports-dashboard',
  standalone: true,
  imports: [
    CommonModule,

    ReportsHeaderComponent,
    StatementReportComponent,

    BalanceSheetComponent,
    CashFlowComponent,
    TaxGstComponent,

  ],
  templateUrl: './reports-dashboard.component.html'
})
export class ReportsDashboardComponent {

  selectedTab = signal('Profit & Loss');

  showExportModal = false;

  showEmailModal = false;

  changeTab(tab: string): void {

    this.selectedTab.set(tab);

  }

  openExportModal(): void {

    this.showExportModal = true;

  }

  closeExportModal(): void {

    this.showExportModal = false;

  }

  openEmailModal(): void {

    this.showEmailModal = true;

  }

  closeEmailModal(): void {

    this.showEmailModal = false;

  }

  exportReport(data: any): void {

    console.log('Export Report', data);

    this.closeExportModal();

  }

  sendReport(data: any): void {

    console.log('Email Report', data);

    this.closeEmailModal();

  }

  printReport(): void {

    console.log('Print Report');

  }

  downloadReport(): void {

    console.log('Download Report');

  }

}