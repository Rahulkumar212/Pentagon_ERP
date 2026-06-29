import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-quick-workflows',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './quick-workflows.component.html'
})
export class QuickWorkflowsComponent {

  workflows = [

    {
      icon: '➕',
      title: 'Add Employee'
    },

    {
      icon: '📅',
      title: 'Apply Leave'
    },

    {
      icon: '💼',
      title: 'Post Job'
    },

    {
      icon: '🖥️',
      title: 'Allocate Asset'
    }

  ];

  onWorkflowClick(
    workflow: any
  ): void {

    console.log(
      workflow.title
    );

    // TODO:
    // Router navigate
    // Open Modal
    // API Call

  }

}