import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { OnboardingService } from '../../../../../core/services/onboarding.service';

@Component({
  selector: 'app-onboarding-milestones',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './onboarding-milestones.component.html'
})
export class OnboardingMilestonesComponent {

 constructor(public onboardingService:OnboardingService){}

}