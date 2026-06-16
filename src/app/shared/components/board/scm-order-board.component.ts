import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { PriorityBadgeComponent } from '../../components/priority-badge/priority-badge.component';

@Component({
  selector: 'app-scm-order-board',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarComponent,
    PriorityBadgeComponent
  ],
  templateUrl: './scm-order-board.component.html'
})
export class ScmOrderBoardComponent {

  @Input()
  orders: any[] = [];

}