
import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface OrderSummaryItem {
  label: string;
  value: number;
  icon: string;
  description?: string;
}

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSummaryComponent {

  @Input() summary: OrderSummaryItem[] = [];

}

