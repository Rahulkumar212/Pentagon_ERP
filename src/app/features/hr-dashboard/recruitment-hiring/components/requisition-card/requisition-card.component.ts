import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

export interface JobRequisition {

  id: string;

  title: string;

  department: string;

  employmentType: string;

  description: string;

  status: 'OPEN' | 'CLOSED' | 'DRAFT';

  candidates: number;

  postedDate: string;

}

@Component({
  selector: 'app-requisition-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './requisition-card.component.html'
})
export class RequisitionCardComponent {

  @Input({ required: true })
  job!: JobRequisition;

  @Output()
  viewCandidates =
    new EventEmitter<JobRequisition>();

  openCandidates(): void {

    this.viewCandidates.emit(
      this.job
    );

  }

}