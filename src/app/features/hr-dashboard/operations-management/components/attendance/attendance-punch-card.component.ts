import {
  Component,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-attendance-punch-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './attendance-punch-card.component.html'
})
export class AttendancePunchCardComponent {

  punchedIn =
    signal(false);

  punchTime = '';

  punch(): void {

    const now = new Date();

    this.punchTime =
      now.toLocaleTimeString(
        [],
        {
          hour: '2-digit',
          minute: '2-digit'
        }
      );

    this.punchedIn.set(
      !this.punchedIn()
    );

  }

}