import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audit-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-summary.component.html'
})
export class AuditSummaryComponent {

  @Input() totalActivities = 0;
  @Input() createdCount = 0;
  @Input() updatedCount = 0;
  @Input() deletedCount = 0;

}