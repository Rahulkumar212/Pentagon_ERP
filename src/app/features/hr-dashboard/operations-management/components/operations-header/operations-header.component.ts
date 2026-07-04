import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-operations-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './operations-header.component.html'
})
export class OperationsHeaderComponent {

  @Input()
  activeTab = 'attendance';

  @Output()
  tabChanged =
    new EventEmitter<string>();

  changeTab(
    tab: string
  ): void {

    this.tabChanged.emit(tab);

  }

}