import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

export interface CorporateFeedForm {

  title: string;

  description: string;

  category: string;

}

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

  @Output()
  close =
    new EventEmitter<void>();

  @Output()
  publish =
    new EventEmitter<CorporateFeedForm>();


  form: CorporateFeedForm = {

    title: '',

    description: '',

    category: 'Announcements'

  };


  isValid(): boolean {

    return (

      this.form.title.trim().length > 0 &&

      this.form.description.trim().length > 0

    );

  }


  private resetForm(): void {

    this.form = {

      title: '',

      description: '',

      category: 'Announcements'

    };

  }


  onCancel(): void {

    this.resetForm();

    this.close.emit();

  }


  onPublish(): void {

    if (!this.isValid()) {

      return;

    }

    this.publish.emit({

      ...this.form

    });

    this.resetForm();

    this.close.emit();

  }

}