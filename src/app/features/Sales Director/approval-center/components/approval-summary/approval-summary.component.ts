
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ApprovalSummaryItem {
  title: string;
  value: number;
  description: string;
  icon: string;
  type: 'pending' | 'high-priority' | 'approved' | 'rejected';
}

@Component({
  selector: 'app-approval-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval-summary.component.html',
})
export class ApprovalSummaryComponent {

  @Input() summary: ApprovalSummaryItem[] = [];

}

