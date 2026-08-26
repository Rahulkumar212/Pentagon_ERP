import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface CriticalAttentionItem {
  title: string;
  description: string;
  category: 'deal' | 'target' | 'customer' | 'collection';
  priority: 'high' | 'medium';
  value?: number;
  actionLabel: string;
}

@Component({
  selector: 'app-critical-attention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './critical-attention.component.html',
})
export class CriticalAttentionComponent {

  @Input() attentionData: CriticalAttentionItem[] = [];

  formatCurrency(value: number): string {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`;
    }

    return `₹${value.toLocaleString('en-IN')}`;
  }

  getPriorityLabel(
    priority: CriticalAttentionItem['priority']
  ): string {
    return priority === 'high'
      ? 'High Priority'
      : 'Attention';
  }

  getCategoryLabel(
    category: CriticalAttentionItem['category']
  ): string {
    switch (category) {
      case 'deal':
        return 'Deal Risk';

      case 'target':
        return 'Target Risk';

      case 'customer':
        return 'Customer';

      case 'collection':
        return 'Collection';

      default:
        return 'Attention';
    }
  }

}