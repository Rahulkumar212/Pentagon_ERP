import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  CallDiscussion
} from '../../../../core/models/client-crm.type';

@Component({
  selector: 'app-call-discussion-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './call-discussion-view.component.html'
})
export class CallDiscussionViewComponent {

  @Input({ required: true })
  discussion!: CallDiscussion;

  @Output()
  close = new EventEmitter<void>();

  onClose(): void {

    this.close.emit();

  }

}