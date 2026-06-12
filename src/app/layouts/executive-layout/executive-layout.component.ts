import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { CalendarWidgetComponent } from '../../shared/components/calendar/calendar-widget.component';
import { NotificationWidgetComponent } from '../../shared/components/notification/notification-widget.component';

@Component({
  selector: 'app-executive-layout',
  standalone: true,
  imports: [
    CommonModule,
    CalendarWidgetComponent,
    NotificationWidgetComponent
  ],
  templateUrl: './executive-layout.component.html'
})
export class ExecutiveLayoutComponent {

  @Input()
  notifications: any[] = [];

}