import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { EmployeeOnboardService } from '../../../../../core/services/employee-onboard.service';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../../../employee-onboarding/components/employee-list/employee-list.component';

@Component({
  selector: 'app-onboarding-milestones',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeListComponent
  ],
  templateUrl: './onboarding-milestones.component.html'
})
export class OnboardingMilestonesComponent {

 constructor(public onboardingService:EmployeeOnboardService,private readonly router:Router){}

 viewAllOnboarding():void {
  this.router.navigate(["/employee-onboarding"])
 }

}