import {
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotificationService } from '../../../../../core/services/notification.service';
import {
  CreateNoticeRequest,
  Notice
} from '../../../../../core/models/notice.model';

@Component({
  selector: 'app-create-feed-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-feed-form.component.html'
})
export class CreateFeedFormComponent {

  private readonly notificationService = inject(NotificationService);

  @Output()
  cancel = new EventEmitter<void>();

  @Output()
  published = new EventEmitter<Notice>();

  form: CreateNoticeRequest = {
    title: '',
    text: '',
    type: 'Announcements'
  };

  isLoading = false;

  onPublish(): void {

    if (
      !this.form.title.trim() ||
      !this.form.text.trim()
    ) {
      alert('Please fill all required fields.');
      return;
    }

    this.isLoading = true;

    this.notificationService
      .createNotice(this.form)
      .subscribe({

        next: (notice) => {

          this.isLoading = false;

          this.published.emit(notice);

          this.resetForm();

          this.cancel.emit();

        },

        error: (error) => {

          console.error('Create Notice Error:', error);

          this.isLoading = false;

        }

      });

  }

  onCancel(): void {

    this.cancel.emit();

  }

  private resetForm(): void {

    this.form = {
      title: '',
      text: '',
      type: 'Announcements'
    };

  }

}