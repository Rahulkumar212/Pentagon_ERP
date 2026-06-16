import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { PriorityBadgeComponent } from '../priority-badge/priority-badge.component';

@Component({
  selector: 'app-operation-ticket-board',
  standalone: true,
  imports: [
    CommonModule,
    PriorityBadgeComponent
  ],
  templateUrl: './operation-ticket-board.component.html'
})
export class OperationTicketBoardComponent {

  @Input()
  tickets: any[] = [];

}