import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface SalesKpi {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  trend: 'up' | 'down' | 'neutral';
  icon: 'revenue' | 'target' | 'pipeline' | 'conversion';
}

@Component({
  selector: 'app-kpi-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-cards.component.html',
})
export class KpiCardsComponent {

  @Input() kpis: SalesKpi[] = [];

}