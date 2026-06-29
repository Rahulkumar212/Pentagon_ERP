import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-onboarding-milestones',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './onboarding-milestones.component.html'
})
export class OnboardingMilestonesComponent {

  onboardingEmployees = [

    {
      name: 'Rahul Sharma',
      designation: 'Frontend Developer',
      department: 'Engineering',
      progress: 92,
      status: 'Almost Complete',
      avatar: 'R'
    },

    {
      name: 'Priya Iyer',
      designation: 'HR Executive',
      department: 'Human Resources',
      progress: 70,
      status: 'Documents Pending',
      avatar: 'P'
    },

    {
      name: 'Aman Verma',
      designation: 'Sales Executive',
      department: 'Sales',
      progress: 45,
      status: 'Training Pending',
      avatar: 'A'
    },

    {
      name: 'Sneha Kapoor',
      designation: 'UI Designer',
      department: 'Design',
      progress: 25,
      status: 'Joining Formalities',
      avatar: 'S'
    }

  ];

}