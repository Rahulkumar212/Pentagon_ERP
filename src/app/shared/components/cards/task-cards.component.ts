import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-cards.component.html'
})
export class TaskCardsComponent {

  @Input() cards: any[] = [];

}