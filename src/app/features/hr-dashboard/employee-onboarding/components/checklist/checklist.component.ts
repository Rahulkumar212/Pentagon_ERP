import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { TaskChecklist } from '../../../../../core/models/employee-onboard.type';



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
 checklist: TaskChecklist[] = [];

  @Output()
  toggle =
    new EventEmitter<TaskChecklist>();

  toggleItem(
    item: TaskChecklist
  ): void {

    this.toggle.emit(item);

  }

}