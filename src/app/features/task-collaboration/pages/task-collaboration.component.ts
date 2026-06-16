import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCardsComponent } from '../../../shared/components/cards/task-cards.component';
import { TaskBoardComponent } from '../../../shared/components/board/task-board.component';

@Component({
  selector: 'app-task-collaboration',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardsComponent,
    TaskBoardComponent
  ],
  templateUrl: './task-collaboration.component.html'
})
export class TaskCollaborationComponent {

  cards = [

    {
      title: 'ACTIVE PROJECT TASKS',
      value: 4,
      description: 'Total corporate items logged',
      color: 'text-gray-500'
    },

    {
      title: 'COMPLETED TASKS',
      value: 1,
      description: 'Resolved targets',
      color: 'text-green-600'
    },

    {
      title: 'IN PROGRESS TASKS',
      value: 2,
      description: 'Active checklists',
      color: 'text-orange-500'
    }

  ];

  tasks = [

    {
      id: 1,
      title: 'Reconcile NIC payment receipts',
      description:
        'Check the bank reference for NIC part payment values and adjust invoice ledgers.',

      createdBy: 'Director Finance',
      assignee: 'Finance Exec (FINE001)',

      dueDate: '02/06/2026',

      progress: 100,

      priority: 'HIGH'
    },

    {
      id: 2,

      title: 'Plan NIC engineer installation deployment',

      description:
        'Schedule engineers to proceed with physical rack setup at Delhi NIC HQ.',

      createdBy: 'Director Operations',

      assignee: 'Director Operations (DIR005)',

      dueDate: '05/06/2026',

      progress: 10,

      priority: 'MEDIUM'
    },

    {
      id: 3,

      title: 'Draft commercial proposal terms for Reliance AMC',

      description:
        'Prepare and quote support terms for Reliance workstation support setup.',

      createdBy: 'Director Sales & Marketing',

      assignee: 'Sales Exec (SME001)',

      dueDate: '06/06/2026',

      progress: 40,

      priority: 'HIGH'
    },

    {
      id: 4,

      title: 'Verify GEM tender uploads',

      description:
        'DRDO tender requires bid security certificate and technical catalog compliance logs.',

      createdBy: 'Director GEM',

      assignee: 'GEM Exec (GEM001)',

      dueDate: '08/06/2026',

      progress: 80,

      priority: 'MEDIUM'
    }

  ];

}