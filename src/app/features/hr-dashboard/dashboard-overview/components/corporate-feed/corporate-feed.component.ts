import {
  Component,
  OnInit,
  ChangeDetectorRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFeedFormComponent } from '../../forms/create-feed-form/create-feed-form.component';
import { NotificationService } from '../../../../../core/services/notification.service';

import {
  CorporateFeed,
  Notice
} from '../../../../../core/models/notice.model';

@Component({
  selector: 'app-corporate-feed',
  standalone: true,
  imports: [
    CommonModule,
    CreateFeedFormComponent
  ],
  templateUrl: './corporate-feed.component.html'
})
export class CorporateFeedComponent implements OnInit {

  private readonly notificationService = inject(NotificationService);
  private readonly cdr = inject(ChangeDetectorRef);

  tabs = [
    'All',
    'Announcements',
    'Birthday',
    'Recognition',
    'Events'
  ];

  selectedTab = 'All';

  showCreateForm = false;

  feeds: CorporateFeed[] = [];

  ngOnInit(): void {
    this.loadNotices();
  }

  private loadNotices(): void {

    this.notificationService.getNotices().subscribe({

      next: (response) => {

        this.feeds = [...response.data.map((notice: Notice) => ({

          title: notice.title,

          text: notice.text,

          category: notice.type,

          author: 'HR Team',

          date: notice.createdAt
            ? new Date(notice.createdAt).toLocaleDateString()
            : 'Today'

        }))];

        // Force UI refresh
        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error(error);

      }

    });

  }

  get filteredFeeds(): CorporateFeed[] {

    if (
      !this.selectedTab ||
      this.selectedTab === 'All'
    ) {

      return this.feeds;

    }

    return this.feeds.filter(feed =>
      feed.category.trim().toLowerCase() ===
      this.selectedTab.trim().toLowerCase()
    );

  }

  openCreateForm(): void {

    this.showCreateForm = true;

  }

  closeCreateForm(): void {

    this.showCreateForm = false;

  }

  onNoticeCreated(notice: Notice): void {

    this.closeCreateForm();

    // Reload latest data
    this.loadNotices();

  }

}