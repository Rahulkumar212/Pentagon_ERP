
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';


// =====================================================
// AUDIT LOG TYPE
// =====================================================

export interface AuditLog {
  id: number;

  userId: number;
  userName: string;

  action:
    | 'CREATED'
    | 'UPDATED'
    | 'DELETED'
    | 'STATUS_CHANGE'
    | 'APPROVED'
    | 'REJECTED'
    | 'LOGIN';

  module: string;

  entityId?: number;

  description: string;

  oldValue?: string;
  newValue?: string;

  createdAt: string;
}


// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-audit-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-table.component.html'
})
export class AuditTableComponent {

  @Input() logs: AuditLog[] = [];

  @Output() logSelected =
    new EventEmitter<AuditLog>();


  // =====================================================
  // SELECT LOG
  // =====================================================

  selectLog(log: AuditLog): void {
    this.logSelected.emit(log);
  }


  // =====================================================
  // ACTION BADGE CLASS
  // =====================================================

  getActionClass(action: string): string {

    switch (action) {

      case 'CREATED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';

      case 'UPDATED':
        return 'bg-blue-50 text-blue-700 border-blue-100';

      case 'DELETED':
        return 'bg-red-50 text-red-700 border-red-100';

      case 'STATUS_CHANGE':
        return 'bg-amber-50 text-amber-700 border-amber-100';

      case 'APPROVED':
        return 'bg-green-50 text-green-700 border-green-100';

      case 'REJECTED':
        return 'bg-rose-50 text-rose-700 border-rose-100';

      case 'LOGIN':
        return 'bg-purple-50 text-purple-700 border-purple-100';

      default:
        return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  }


  // =====================================================
  // FORMAT ACTION
  // =====================================================

  formatAction(action: string): string {

    return action
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase());
  }


  // =====================================================
  // FORMAT DATE
  // =====================================================

  formatDate(date: string): string {

    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }


  // =====================================================
  // FORMAT TIME
  // =====================================================

  formatTime(date: string): string {

    return new Date(date).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }


  // =====================================================
  // TRACK BY
  // =====================================================

  trackByLogId(
    index: number,
    log: AuditLog
  ): number {

    return log.id;
  }
}

