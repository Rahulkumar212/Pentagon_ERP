import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateFeedForm, CreateFeedFormComponent } from '../../forms/create-feed-form/create-feed-form.component';

interface CorporateFeed {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-corporate-feed',
  standalone: true,
  imports: [CommonModule,CreateFeedFormComponent],
  templateUrl: './corporate-feed.component.html'
})
export class CorporateFeedComponent {

  tabs = [
    'All',
    'Announcements',
    'Birthday',
    'Recognition',
    'Events'
  ];

  selectedTab = 'All';

  feeds: CorporateFeed[] = [

    {
      category: 'Announcements',
      title: 'New Attendance Policy Released',
      description:
        'Employees are requested to review the revised attendance and leave policy effective from next month.',
      author: 'HR Department',
      date: 'Today'
    },
    {
      category: 'Birthday',
      title: 'Happy Birthday - Priya Sharma 🎂',
      description:
        'Wishing Priya Sharma from the HR Department a wonderful birthday filled with happiness and success.',
      author: 'HR Department',
      date: 'Today'
    },

    {
      category: 'Birthday',
      title: 'Happy Birthday - Amit Verma 🎉',
      description:
        'Join us in wishing Amit Verma from the Engineering Team a very Happy Birthday!',
      author: 'Corporate Office',
      date: '02 Jul'
    },

    {
      category: 'Recognition',
      title: 'Employee of the Month',
      description:
        'Congratulations to Rahul Sharma for exceptional performance in Sales & Marketing this month.',
      author: 'Management',
      date: 'Yesterday'
    },

    {
      category: 'Events',
      title: 'Quarterly Town Hall Meeting',
      description:
        'Join the CEO and leadership team this Friday at 4:00 PM in the Conference Hall for quarterly updates.',
      author: 'Corporate Office',
      date: '28 Jun'
    },

    {
      category: 'Events',
      title: 'Annual Sports Day',
      description:
        'Sports Day will be held on 5th July. Cricket, Football, Badminton and Indoor Games registrations are now open.',
      author: 'HR Team',
      date: '05 Jul'
    },

    {
      category: 'Announcements',
      title: 'New Employee Joining',
      description:
        'Please welcome our new team members joining the Engineering and HR departments.',
      author: 'HR Team',
      date: '24 Jun'
    },

    {
      category: 'Recognition',
      title: 'Project Excellence Award',
      description:
        'The ERP Development Team has received the Project Excellence Award for timely delivery.',
      author: 'Leadership Team',
      date: '20 Jun'
    }

  ];

  get filteredFeeds(): CorporateFeed[] {

    if (this.selectedTab === 'All') {
      return this.feeds;
    }

    return this.feeds.filter(
      feed => feed.category === this.selectedTab
    );

  }

  showCreateForm = false;

  openCreateForm(): void {

    this.showCreateForm = true;

  }

  closeCreateForm(): void {

    this.showCreateForm = false;

  }

  publishFeed(
  data: CorporateFeedForm
): void {

  this.feeds.unshift({

    title: data.title,

    description: data.description,

    category: data.category,

    author: 'HR Team',

    date: new Date().toLocaleDateString()

  });

  this.closeCreateForm();

}

}