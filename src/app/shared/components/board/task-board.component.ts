import { CommonModule } from '@angular/common';
import { PriorityBadgeComponent } from '../../../shared/components/priority-badge/priority-badge.component';
import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [
    CommonModule,
    PriorityBadgeComponent,
    ProgressBarComponent
  ],
  templateUrl: './task-board.component.html'
})
export class TaskBoardComponent {

  @Input() tasks: any[] = [];

}