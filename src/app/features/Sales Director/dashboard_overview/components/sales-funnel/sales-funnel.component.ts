import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface SalesFunnelItem {
  stage: string;
  count: number;
  value: number;
  percentage: number;
}

@Component({
  selector: 'app-sales-funnel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-funnel.component.html',
})
export class SalesFunnelComponent {

  @Input() funnelData: SalesFunnelItem[] = [];

  formatCurrency(value: number): string {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`;
    }

    return `₹${value.toLocaleString('en-IN')}`;
  }

}