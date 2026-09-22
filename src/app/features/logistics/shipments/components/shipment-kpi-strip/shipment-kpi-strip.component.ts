
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  SHIPMENT_KPI_ITEMS,
  ShipmentKpiItem,
} from '../../utils/shipment-kpi-strip.util';

@Component({
  selector: 'app-shipment-kpi-strip',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shipment-kpi-strip.component.html',
})
export class ShipmentKpiStripComponent {

  readonly kpiItems: ShipmentKpiItem[] =
    SHIPMENT_KPI_ITEMS;

  getValueClass(
    type: ShipmentKpiItem['type']
  ): string {

    switch (type) {

      case 'TOTAL':
        return 'text-gray-900';

      case 'DISPATCHED':
        return 'text-indigo-600';

      case 'TRANSIT':
        return 'text-cyan-600';

      case 'DELIVERY':
        return 'text-purple-600';

      case 'DELIVERED':
        return 'text-green-600';

      case 'DELAYED':
        return 'text-red-600';

      case 'RETURNED':
        return 'text-orange-600';

      default:
        return 'text-gray-900';
    }
  }

  getIconClass(
    type: ShipmentKpiItem['type']
  ): string {

    switch (type) {

      case 'TOTAL':
        return 'bg-gray-100 text-gray-600';

      case 'DISPATCHED':
        return 'bg-indigo-50 text-indigo-600';

      case 'TRANSIT':
        return 'bg-cyan-50 text-cyan-600';

      case 'DELIVERY':
        return 'bg-purple-50 text-purple-600';

      case 'DELIVERED':
        return 'bg-green-50 text-green-600';

      case 'DELAYED':
        return 'bg-red-50 text-red-600';

      case 'RETURNED':
        return 'bg-orange-50 text-orange-600';

      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  getTrendClass(
    trendType: ShipmentKpiItem['trendType']
  ): string {

    switch (trendType) {

      case 'POSITIVE':
        return 'text-green-600';

      case 'WARNING':
        return 'text-red-600';

      case 'NEUTRAL':
        return 'text-gray-500';

      default:
        return 'text-gray-500';
    }
  }
}

