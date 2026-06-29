import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-corporate-feed',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './corporate-feed.component.html'
})
export class CorporateFeedComponent {

  selectedTab = 'All';

  tabs = [

    'All',

    'Announcements',

    'Birthdays',

    'Recognitions'

  ];

  feeds = [

    {

      category: 'Birthdays & Anniversaries',

      type: 'Birthdays',

      title: 'Happy Birthday, Priya Iyer!',

      description:
        'Wishing Priya a fantastic birthday and a wonderful year ahead. Join us for the celebration at 4:00 PM in the cafeteria.',

      author: 'Sneha Roy',

      date: '2026-06-29'

    },

    {

      category: 'Announcements & News',

      type: 'Announcements',

      title: 'New Flexi-Hour Policy',

      description:
        'Employees can now choose flexible office timings from 10:00 AM to 4:00 PM as per the latest HR policy.',

      author: 'Amit Singhal',

      date: '2026-06-29'

    },

    {

      category: 'Employee Recognition',

      type: 'Recognitions',

      title: 'Employee of the Month',

      description:
        'Congratulations to Rahul Sharma for exceptional performance and dedication during this month.',

      author: 'HR Department',

      date: '2026-06-28'

    }

  ];

  get filteredFeeds() {

    if (this.selectedTab === 'All') {

      return this.feeds;

    }

    return this.feeds.filter(

      x => x.type === this.selectedTab

    );

  }

}