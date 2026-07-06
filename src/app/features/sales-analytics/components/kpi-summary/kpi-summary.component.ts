import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SALES_KPI_DATA
} from '../../utils/sales-kpi.data';

@Component({
  selector: 'app-kpi-summary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './kpi-summary.component.html'
})
export class KpiSummaryComponent {

  readonly kpis = SALES_KPI_DATA;

}