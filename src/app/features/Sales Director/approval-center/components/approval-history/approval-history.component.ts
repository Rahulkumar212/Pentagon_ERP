
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalHistoryItem } from '../../utils/approval-history.data';
import { PhysicalMeetingHistoryComponent } from './physical-meeting-history/physical-meeting-history.component';
import { TelecallingHistoryComponent } from './telecalling-history/telecalling-history.component';

type HistoryFilter =
  | 'ALL'
  | 'PHYSICAL_MEETING'
  | 'TELECALLING';

@Component({
  selector: 'app-approval-history',
  standalone: true,
  imports: [
    CommonModule,
    PhysicalMeetingHistoryComponent,
    TelecallingHistoryComponent
  ],
  templateUrl: './approval-history.component.html',
})
export class ApprovalHistoryComponent {
  history: ApprovalHistoryItem[] = [];

  activeFilter: HistoryFilter = 'ALL';

  setFilter(filter: HistoryFilter): void {
    this.activeFilter = filter;
  }
}

