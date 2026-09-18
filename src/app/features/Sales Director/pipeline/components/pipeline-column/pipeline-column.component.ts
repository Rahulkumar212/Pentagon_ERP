import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  PipelineLead,
  PipelineStage
} from '../../utils/pipeline-column.utils';

@Component({
  selector: 'app-pipeline-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipeline-column.component.html'
})
export class PipelineColumnComponent {

  @Input({ required: true })
  stage!: PipelineStage;

  @Output()
  leadClicked = new EventEmitter<PipelineLead>();

  @Output()
  addLeadClicked = new EventEmitter<PipelineStage>();


  getStageValue(): number {
    return this.stage.leads.reduce(
      (total, lead) => total + lead.value,
      0
    );
  }


  formatCurrency(value: number): string {
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


  getPriorityClass(priority: string): string {
    switch (priority) {

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


  getStageColor(): string {
    switch (this.stage.color) {

      case 'blue':
        return 'bg-blue-500';

      case 'purple':
        return 'bg-purple-500';

      case 'orange':
        return 'bg-orange-500';

      case 'yellow':
        return 'bg-yellow-500';

      case 'pink':
        return 'bg-pink-500';

      case 'green':
        return 'bg-emerald-500';

      default:
        return 'bg-slate-500';
    }
  }


  onLeadClick(lead: PipelineLead): void {
    this.leadClicked.emit(lead);
  }


  onAddLead(): void {
    this.addLeadClicked.emit(this.stage);
  }


  trackByLead(
    _: number,
    lead: PipelineLead
  ): number {
    return lead.id;
  }
}