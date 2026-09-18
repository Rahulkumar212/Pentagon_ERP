import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  PipelineLead
} from '../../utils/pipeline-details.utils';

@Component({
  selector: 'app-pipeline-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipeline-details.component.html'
})
export class PipelineDetailsComponent {

  @Input({ required: true })
  lead!: PipelineLead;

  @Input()
  isOpen = false;

  @Output()
  closed = new EventEmitter<void>();

  @Output()
  editClicked = new EventEmitter<PipelineLead>();


  formatCurrency(value: number | null | undefined): string {
    if (value == null) {
      return '-';
    }

    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)}Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L`;
    }

    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}K`;
    }

    return `₹${value}`;
  }


  getPriorityClass(): string {
    switch (this.lead.priority) {

      case 'HOT':
        return 'border-red-200 bg-red-50 text-red-700';

      case 'WARM':
        return 'border-amber-200 bg-amber-50 text-amber-700';

      case 'COLD':
        return 'border-emerald-200 bg-emerald-50 text-emerald-700';

      default:
        return 'border-slate-200 bg-slate-50 text-slate-600';
    }
  }


  getInitials(): string {
    if (!this.lead.owner) {
      return '?';
    }

    const words = this.lead.owner
      .trim()
      .split(' ')
      .filter(Boolean);

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }

    return (
      words[0].charAt(0) +
      words[words.length - 1].charAt(0)
    ).toUpperCase();
  }


  close(): void {
    this.closed.emit();
  }


  edit(): void {
    this.editClicked.emit(this.lead);
  }
}