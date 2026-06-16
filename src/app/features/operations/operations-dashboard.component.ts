import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCardsComponent } from '../../shared/components/cards/task-cards.component';
import { OperationTicketBoardComponent } from '../../shared/components/board/operation-ticket-board.component';


@Component({
  selector: 'app-operations-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardsComponent,
    OperationTicketBoardComponent
  ],
  templateUrl: './operations-dashboard.component.html'
})
export class OperationsDashboardComponent {

  cards = [
    {
      title: 'INSTALLATION PROJECTS',
      value: 0,
      description: 'Active engineer coordinates',
      color: 'text-green-600'
    },
    {
      title: 'TRAINING CERTIFICATES',
      value: '0 Scheduled',
      description: 'Completed or pending checklists',
      color: 'text-gray-500'
    },
    {
      title: 'ACTIVE AMC SERVICE TICKETS',
      value: '2 Open',
      description: 'Helpdesk priorities',
      color: 'text-red-500'
    }
  ];

  tickets = [
    {
      ticketId: 'PTF-SER-10002',
      client: 'Life Insurance Corporation (LIC)',
      issue:
        'CCTV connection flickering on display wall channel 4.',
      resolution:
        'Re-crimped CAT6 termination joint. Signal restored.',
      amcStatus: 'OUT OF AMC',
      engineer: 'Simran Gill',
      priority: 'MEDIUM'
    },
    {
      ticketId: 'PTF-SER-10001',
      client: 'National Informatics Centre (NIC)',
      issue:
        'Xeon server node 3 fails to load OS kernel during boot.',
      resolution:
        'Awaiting diagnosis.',
      amcStatus: 'AMC COVERED',
      engineer: 'Karan Johar',
      priority: 'HIGH'
    }
  ];

}