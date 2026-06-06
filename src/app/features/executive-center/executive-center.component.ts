import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EXECUTIVE_CARDS,
  EXECUTIVE_LEADS,
  EXECUTIVE_TODAY_TASKS,
  EXECUTIVE_RECENT_ACTIVITIES
} from './utils/executive-center-data';

@Component({
  selector: 'app-executive-center',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './executive-center.component.html',
})
export class ExecutiveCenterComponent {

  cards = EXECUTIVE_CARDS;

  leads = EXECUTIVE_LEADS;
}