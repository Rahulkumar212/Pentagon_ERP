import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface AuditFilterValue {
  search: string;
  module: string;
  action: string;
  user: string;
  fromDate: string;
  toDate: string;
}

@Component({
  selector: 'app-audit-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './audit-filter.component.html'
})
export class AuditFilterComponent {

  @Output() filterChange =
    new EventEmitter<AuditFilterValue>();

  @Output() reset =
    new EventEmitter<void>();

  search = '';
  selectedModule = '';
  selectedAction = '';
  selectedUser = '';
  fromDate = '';
  toDate = '';

  modules = [
    'Client CRM',
    'Sales Order',
    'Lead',
    'Employee',
    'Organization'
  ];

  actions = [
    'CREATED',
    'UPDATED',
    'DELETED',
    'STATUS_CHANGE',
    'APPROVED',
    'REJECTED',
    'LOGIN'
  ];

  users = [
    'Rahul Sharma',
    'Amit Kumar',
    'Priya Singh',
    'Admin'
  ];

  applyFilters(): void {
    this.filterChange.emit({
      search: this.search.trim(),
      module: this.selectedModule,
      action: this.selectedAction,
      user: this.selectedUser,
      fromDate: this.fromDate,
      toDate: this.toDate
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  clearFilters(): void {
    this.search = '';
    this.selectedModule = '';
    this.selectedAction = '';
    this.selectedUser = '';
    this.fromDate = '';
    this.toDate = '';

    this.reset.emit();

    this.applyFilters();
  }
}