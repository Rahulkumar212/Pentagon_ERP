import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-header.component.html'
})
export class ReportsHeaderComponent {

  @Input()
  activeTab = 'analytics';

  @Output()
  tabChanged = new EventEmitter<string>();

  tabs = [
    {
      id: 'analytics',
      label: 'HR Analytics'
    },
    {
      id: 'leave',
      label: 'Leave Reports'
    },
    {
      id: 'payroll',
      label: 'Payroll Summary'
    },
      {
    id: 'sales',
    label: 'Sales Reports'
  }
  ];

  changeTab(tab: string): void {

    this.activeTab = tab;

    this.tabChanged.emit(tab);

  }

}