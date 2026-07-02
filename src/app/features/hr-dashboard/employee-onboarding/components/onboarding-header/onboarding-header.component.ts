import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-onboarding-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './onboarding-header.component.html'
})
export class OnboardingHeaderComponent {

  @Output()
prepareChecklist =
  new EventEmitter<void>();

onPrepareChecklist(): void {

  this.prepareChecklist.emit();

}

}