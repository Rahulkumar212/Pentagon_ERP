import { NotificationItem } from '../models/notification.type';

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    title: 'New Lead',
    message: 'ABC Industries has been assigned to you.',
    time: '2 min ago'
  },
  {
    id: 2,
    title: 'Call Reminder',
    message: 'Call scheduled with XYZ Pvt Ltd.',
    time: '10 min ago'
  },
  {
    id: 3,
    title: 'Pipeline Update',
    message: 'Lead converted successfully.',
    time: '1 hour ago'
  },
  {
    id: 4,
    title: 'Meeting',
    message: 'Client meeting at 4:00 PM.',
    time: 'Today'
  }
];