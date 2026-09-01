
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalSummaryComponent } from '../components/approval-summary/approval-summary.component';
import { ApprovalFiltersComponent } from '../components/approval-filters/approval-filters.component';
import { ApprovalQueueComponent } from '../components/approval-queue/approval-queue.component';
import { ApprovalHistoryComponent } from '../components/approval-history/approval-history.component';
import { PermissionAccessComponent } from '../components/permission-access/permission-access.component';

@Component({
  selector: 'app-approval-center',
  standalone: true,
  imports: [
    CommonModule,
    ApprovalSummaryComponent,
    ApprovalFiltersComponent,
    ApprovalQueueComponent,
    ApprovalHistoryComponent,
    PermissionAccessComponent
  ],
  templateUrl: './approval-center.component.html'
})
export class ApprovalCenterComponent {

  activeTab: 'queue' | 'history' | 'permissions' = 'queue';

  setActiveTab(
    tab: 'queue' | 'history' | 'permissions'
  ): void {
    this.activeTab = tab;
  }
}

