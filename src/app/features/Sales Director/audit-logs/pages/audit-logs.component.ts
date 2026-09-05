
import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { AuditSummaryComponent } from '../components/audit-summary/audit-summary.component';
import {
  AuditFilterComponent,
  AuditFilterValue
} from '../components/audit-filter/audit-filter.component';

import {
  AuditTableComponent,
  AuditLog as TableAuditLog
} from '../components/audit-table/audit-table.component';

import {
  AuditDetailComponent,
  AuditLog as DetailAuditLog
} from '../components/audit-detail/audit-detail.component';


// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-audit-logs',
  standalone: true,

  imports: [
    CommonModule,
    AuditSummaryComponent,
    AuditFilterComponent,
    AuditTableComponent,
    AuditDetailComponent
  ],

  templateUrl: './audit-logs.component.html'
})
export class AuditLogsComponent implements OnInit {


  // =====================================================
  // AUDIT LOGS
  // =====================================================

  logs: TableAuditLog[] = [];

  filteredLogs: TableAuditLog[] = [];


  // =====================================================
  // SELECTED LOG
  // =====================================================

  selectedLog: DetailAuditLog | null = null;


  // =====================================================
  // SUMMARY COUNTS
  // =====================================================

  totalActivities = 0;
  createdCount = 0;
  updatedCount = 0;
  deletedCount = 0;


  // =====================================================
  // LIFECYCLE
  // =====================================================

  ngOnInit(): void {
    this.loadAuditLogs();
  }


  // =====================================================
  // LOAD AUDIT LOGS
  // =====================================================

  loadAuditLogs(): void {

    // Temporary mock data
    // Backend API connect hone ke baad
    // yahan service call aayegi.

    this.logs = [

      {
        id: 1,
        userId: 101,
        userName: 'Rahul Sharma',
        action: 'UPDATED',
        module: 'Client CRM',
        entityId: 25,
        description: 'Updated client ABC Technologies information.',
        oldValue: 'Status: Prospect',
        newValue: 'Status: Active',
        createdAt: '2026-09-03T10:42:00'
      },

      {
        id: 2,
        userId: 102,
        userName: 'Amit Kumar',
        action: 'CREATED',
        module: 'Sales Order',
        entityId: 1024,
        description: 'Created new sales order #ORD-1024.',
        newValue: 'Order Status: Pending',
        createdAt: '2026-09-03T10:15:00'
      },

      {
        id: 3,
        userId: 103,
        userName: 'Priya Singh',
        action: 'STATUS_CHANGE',
        module: 'Lead',
        entityId: 56,
        description: 'Changed lead status from Negotiation to Won.',
        oldValue: 'Negotiation',
        newValue: 'Won',
        createdAt: '2026-09-03T09:48:00'
      },

      {
        id: 4,
        userId: 104,
        userName: 'Admin',
        action: 'DELETED',
        module: 'Client CRM',
        entityId: 41,
        description: 'Deleted client XYZ Solutions.',
        oldValue: 'Client: XYZ Solutions',
        createdAt: '2026-09-03T09:20:00'
      },

      {
        id: 5,
        userId: 101,
        userName: 'Rahul Sharma',
        action: 'CREATED',
        module: 'Lead',
        entityId: 78,
        description: 'Created a new sales lead for ABC Industries.',
        newValue: 'Lead Status: New',
        createdAt: '2026-09-03T09:05:00'
      },

      {
        id: 6,
        userId: 102,
        userName: 'Amit Kumar',
        action: 'APPROVED',
        module: 'Sales Order',
        entityId: 1021,
        description: 'Approved sales order #ORD-1021.',
        oldValue: 'Pending',
        newValue: 'Approved',
        createdAt: '2026-09-03T08:50:00'
      },

      {
        id: 7,
        userId: 103,
        userName: 'Priya Singh',
        action: 'LOGIN',
        module: 'Authentication',
        description: 'User logged into the system.',
        createdAt: '2026-09-03T08:30:00'
      },

      {
        id: 8,
        userId: 104,
        userName: 'Admin',
        action: 'UPDATED',
        module: 'Employee',
        entityId: 12,
        description: 'Updated employee profile information.',
        oldValue: 'Department: Sales',
        newValue: 'Department: Sales Director',
        createdAt: '2026-09-02T17:45:00'
      }

    ];

    this.filteredLogs = [...this.logs];

    this.calculateSummary();
  }


  // =====================================================
  // CALCULATE SUMMARY
  // =====================================================

  calculateSummary(): void {

    this.totalActivities = this.filteredLogs.length;

    this.createdCount =
      this.filteredLogs.filter(
        log => log.action === 'CREATED'
      ).length;

    this.updatedCount =
      this.filteredLogs.filter(
        log => log.action === 'UPDATED'
      ).length;

    this.deletedCount =
      this.filteredLogs.filter(
        log => log.action === 'DELETED'
      ).length;
  }


  // =====================================================
  // FILTER LOGS
  // =====================================================

  onFilterChange(
    filters: AuditFilterValue
  ): void {

    const search =
      filters.search.toLowerCase();

    this.filteredLogs = this.logs.filter(log => {

      // Search
      const matchesSearch =
        !search ||
        log.userName.toLowerCase().includes(search) ||
        log.module.toLowerCase().includes(search) ||
        log.description.toLowerCase().includes(search);


      // Module
      const matchesModule =
        !filters.module ||
        log.module === filters.module;


      // Action
      const matchesAction =
        !filters.action ||
        log.action === filters.action;


      // User
      const matchesUser =
        !filters.user ||
        log.userName === filters.user;


      // From Date
      const matchesFromDate =
        !filters.fromDate ||
        new Date(log.createdAt) >=
        new Date(`${filters.fromDate}T00:00:00`);


      // To Date
      const matchesToDate =
        !filters.toDate ||
        new Date(log.createdAt) <=
        new Date(`${filters.toDate}T23:59:59`);


      return (
        matchesSearch &&
        matchesModule &&
        matchesAction &&
        matchesUser &&
        matchesFromDate &&
        matchesToDate
      );

    });

    this.calculateSummary();
  }


  // =====================================================
  // RESET FILTER
  // =====================================================

  onFilterReset(): void {

    this.filteredLogs = [...this.logs];

    this.calculateSummary();
  }


  // =====================================================
  // OPEN DETAIL
  // =====================================================

  openAuditDetail(
    log: TableAuditLog
  ): void {

    this.selectedLog = {
      ...log
    };
  }


  // =====================================================
  // CLOSE DETAIL
  // =====================================================

  closeAuditDetail(): void {

    this.selectedLog = null;
  }

}

