import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-workflows',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './quick-workflows.component.html'
})
export class QuickWorkflowsComponent {

  constructor(private readonly router: Router) { }
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

    switch (workflow.title) {
      case "Add Employee":
        this.router.navigate([
          "/employee-master"
        ])
        break;

      case "Post Job":
        this.router.navigate([
          "/recruitment"
        ])
        break;

      case "Apply Leave":
        this.router.navigate([
          "/daily-operations"
        ], {
          queryParams: {
            tab: "attendance"
          }
        }
        )
        break;

      case "Allocate Asset":
        this.router.navigate([
          "/daily-operations"
        ],
        {
          queryParams:{
            tab:"assets"
          }
        }
      )
        break;

      default:
        console.log(workflow.title);
        break;
    }


  }

}