
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { OrganizationService } from '../../../../../../core/services/organization.service';

import { TelecallingResponse } from '../../../../../../core/models/client-crm/telecalling.type';

@Component({
  selector: 'app-telecalling-history',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './telecalling-history.component.html'
})
export class TelecallingHistoryComponent implements OnInit {

  telecallingRecords: any[] = [];

  selectedRecord: any | null = null;

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.fetchTelecallingHistory();
  }

  fetchTelecallingHistory(): void {
    this.organizationService
      .fetchTelecalling()
      .subscribe({
        next: (response: TelecallingResponse) => {
          console.log(
            'Telecalling History:',
            response
          );

          this.telecallingRecords =
            response?.data ?? [];

          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error(
            'Failed to fetch telecalling history:',
            error
          );

          this.telecallingRecords = [];
        }
      });
  }

  viewRecord(record: any): void {
    this.selectedRecord = record;
  }

  closeView(): void {
    this.selectedRecord = null;
  }

  formatDate(value: unknown): string {
    if (!value) {
      return '-';
    }

    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    }).format(new Date(String(value)));
  }

  formatFieldValue(
    key: string,
    value: unknown
  ): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (
      key.toLowerCase().includes('date') ||
      key === 'createdAt' ||
      key === 'updatedAt'
    ) {
      return this.formatDate(value);
    }

    return String(value);
  }

  getFieldLabel(key: string): string {
    const labels: Record<string, string> = {
      id: 'ID',
      executive_name: 'Executive Name',
      employee_name: 'Employee Name',
      customer_name: 'Customer Name',
      customer_address: 'Customer Address',
      contact_person: 'Contact Person',
      contact_number: 'Contact Number',
      customer_email: 'Customer Email',
      city: 'City',
      call_date: 'Call Date',
      visit_date: 'Activity Date',
      call_type: 'Call Type',
      activity_type: 'Activity Type',
      client_type: 'Client Type',
      lead_priority: 'Lead Priority',
      discussion_summary: 'Discussion Summary',
      current_status: 'Current Status',
      next_followup_date: 'Next Follow-up Date',
      expected_closure_date: 'Expected Closure Date',
      expected_business_value: 'Expected Business Value',
      call_status: 'Call Status',
      connected: 'Connected',
      call_duration: 'Call Duration',
      remarks: 'Remarks',
      reason: 'Reason',
      status: 'Approval Status',
      userId: 'User ID',
      type: 'Type'
    };

    return labels[key] ?? key;
  }

  getVisibleFields(record: any): string[] {
    const excludedFields = [
      'createdAt',
      'updatedAt'
    ];

    return Object.keys(record).filter(key => {
      const value = record[key];

      return (
        !excludedFields.includes(key) &&
        value !== null &&
        value !== undefined
      );
    });
  }

  getDisplayValue(
    record: any,
    key: string
  ): unknown {
    return record[key];
  }
}
