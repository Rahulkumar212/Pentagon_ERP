import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface RevenuePerformanceItem {
  month: string;
  actual: number;
  target: number;
}

@Component({
  selector: 'app-revenue-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue-performance.component.html',
})
export class RevenuePerformanceComponent {

  @Input() data: RevenuePerformanceItem[] = [];

  get maxValue(): number {
    if (!this.data.length) {
      return 0;
    }

    return Math.max(
      ...this.data.flatMap(item => [
        item.actual,
        item.target,
      ])
    );
  }

  get totalActual(): number {
    return this.data.reduce(
      (total, item) => total + item.actual,
      0
    );
  }

  get totalTarget(): number {
    return this.data.reduce(
      (total, item) => total + item.target,
      0
    );
  }

  get achievementPercentage(): number {
    if (this.totalTarget === 0) {
      return 0;
    }

    return Math.round(
      (this.totalActual / this.totalTarget) * 100
    );
  }

  getBarHeight(value: number): number {
    if (this.maxValue === 0) {
      return 0;
    }

    return Math.round(
      (value / this.maxValue) * 100
    );
  }

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