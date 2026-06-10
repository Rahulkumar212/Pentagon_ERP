import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NotificationItem {
  id: number;
  title?: string;
  message: string;
  time: string;
  type?: 'success' | 'warning' | 'info' | 'danger';
}

@Component({
  selector: 'app-notification-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-widget.component.html'
})
export class NotificationWidgetComponent {

  @Input()
  notifications: NotificationItem[] = [];

}