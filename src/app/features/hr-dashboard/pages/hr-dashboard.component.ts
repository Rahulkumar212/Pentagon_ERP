import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { OverviewCardsComponent } from '../components/overview-cards/overview-cards.component';
import { QuickWorkflowsComponent } from '../components/quick-workflows/quick-workflows.component';
import { CorporateFeedComponent } from '../components/corporate-feed/corporate-feed.component';
import { LeaveApprovalsComponent } from '../components/leave-approvals/leave-approvals.component';
import { OnboardingMilestonesComponent } from '../components/onboarding-milestones/onboarding-milestones.component';

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    OverviewCardsComponent,
    QuickWorkflowsComponent,
    CorporateFeedComponent,
    LeaveApprovalsComponent,
    OnboardingMilestonesComponent
  ],
  templateUrl: './hr-dashboard.component.html'
})
export class HrDashboardComponent {

}