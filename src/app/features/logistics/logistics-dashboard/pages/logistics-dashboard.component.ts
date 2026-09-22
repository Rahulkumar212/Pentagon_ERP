import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { OverviewSummaryComponent } from '../components/overview-summary/overview-summary.component';
import { OrderOverviewComponent } from '../components/order-overview/order-overview.component';
import { ShipmentStatusComponent } from '../components/shipment-status/shipment-status.component';
import { DeliveryPerformanceComponent } from '../components/delivery-performance/delivery-performance.component';
import { PendingActionsComponent } from '../components/pending-actions/pending-actions.component';
import { RecentShipmentsComponent } from '../components/recent-shipments/recent-shipments.component';

@Component({
  selector: 'app-logistics-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    OverviewSummaryComponent,
    OrderOverviewComponent,
    ShipmentStatusComponent,
    DeliveryPerformanceComponent,
    PendingActionsComponent,
    RecentShipmentsComponent,
  ],
  templateUrl: './logistics-dashboard.component.html',
})
export class LogisticsDashboardComponent {}