import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

interface AttendanceRecord {

  date: string;

  punchIn: string;

  punchOut: string;

  hours: string;

  status: string;

}

@Component({
  selector: 'app-attendance-history',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './attendance-history.component.html'
})
export class AttendanceHistoryComponent {

  attendanceHistory: AttendanceRecord[] = [

    {
      date: '04 Jul 2026',
      punchIn: '09:02 AM',
      punchOut: '06:14 PM',
      hours: '09h 12m',
      status: 'Present'
    },

    {
      date: '03 Jul 2026',
      punchIn: '09:15 AM',
      punchOut: '06:08 PM',
      hours: '08h 53m',
      status: 'Present'
    },

    {
      date: '02 Jul 2026',
      punchIn: '09:45 AM',
      punchOut: '06:21 PM',
      hours: '08h 36m',
      status: 'Late'
    },

    {
      date: '01 Jul 2026',
      punchIn: '--',
      punchOut: '--',
      hours: '--',
      status: 'Leave'
    },

    {
      date: '30 Jun 2026',
      punchIn: '08:58 AM',
      punchOut: '06:10 PM',
      hours: '09h 12m',
      status: 'Present'
    }

  ];

}