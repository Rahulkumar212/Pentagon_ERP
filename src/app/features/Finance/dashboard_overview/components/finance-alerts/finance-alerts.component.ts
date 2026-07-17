import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { FINANCE_ALERTS } from '../../utils/finance-alerts.data';

export interface FinanceAlert {

  id: number;

  title: string;

  message: string;

  priority:
    | 'HIGH'
    | 'MEDIUM'
    | 'LOW';

  time: string;

}

@Component({
  selector: 'app-finance-alerts',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl:
    './finance-alerts.component.html'
})
export class FinanceAlertsComponent {

@Input()
alerts: FinanceAlert[] = [];

  readonly finance_alerts = FINANCE_ALERTS;

}