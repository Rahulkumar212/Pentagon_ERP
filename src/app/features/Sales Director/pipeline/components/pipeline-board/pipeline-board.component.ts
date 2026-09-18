import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PIPELINE_STAGES,
  PipelineLead,
  PipelineStage
} from '../../utils/pipeline-board.utils';

@Component({
  selector: 'app-pipeline-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipeline-board.component.html'
})
export class PipelineBoardComponent {

  pipelineStages: PipelineStage[] = PIPELINE_STAGES;

  getTotalLeads(): number {
    return this.pipelineStages.reduce(
      (total, stage) => total + stage.leads.length,
      0
    );
  }

  getTotalPipelineValue(): number {
    return this.pipelineStages.reduce(
      (total, stage) =>
        total +
        stage.leads.reduce(
          (stageTotal, lead) => stageTotal + lead.value,
          0
        ),
      0
    );
  }

  getStageValue(stage: PipelineStage): number {
    return stage.leads.reduce(
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
        return 'bg-red-50 text-red-700 border-red-200';

      case 'WARM':
        return 'bg-amber-50 text-amber-700 border-amber-200';

      case 'COLD':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';

      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  }

  getStageClasses(color: string): string {
    switch (color) {
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

  viewLead(lead: PipelineLead): void {
    console.log('View Lead:', lead);
  }

  addLead(stage: PipelineStage): void {
    console.log('Add lead to:', stage.title);
  }

  trackByStage(_: number, stage: PipelineStage): string {
    return stage.key;
  }

  trackByLead(_: number, lead: PipelineLead): number {
    return lead.id;
  }
}