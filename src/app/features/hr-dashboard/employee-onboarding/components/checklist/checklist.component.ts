import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

export interface ChecklistItem {

  title: string;

  category: string;

  completed: boolean;

}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent {

  @Input({ required: true })
  checklist: ChecklistItem[] = [];

  @Output()
  toggle =
    new EventEmitter<ChecklistItem>();

  toggleItem(
    item: ChecklistItem
  ): void {

    this.toggle.emit(item);

  }

}