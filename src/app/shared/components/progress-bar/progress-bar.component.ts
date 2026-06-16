import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {

  @Input({ required: true })
  progress = 0;

  get progressClass(): string {

    if (this.progress >= 80) {
      return 'bg-green-600';
    }

    if (this.progress >= 50) {
      return 'bg-yellow-500';
    }

    if (this.progress >= 20) {
      return 'bg-orange-500';
    }

    return 'bg-red-600';
  }

}