import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  signal
} from '@angular/core';

@Component({
  selector: 'app-reports-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reports-header.component.html'
})
export class ReportsHeaderComponent {

  readonly tabs = [

    'Profit & Loss',

    'Balance Sheet',

    'Cash Flow',

    'Tax & GST'

  ];

  selectedTab = signal('Profit & Loss');

  @Output()
  tabChanged = new EventEmitter<string>();

  selectTab(tab: string): void {

    this.selectedTab.set(tab);

    this.tabChanged.emit(tab);

  }

}