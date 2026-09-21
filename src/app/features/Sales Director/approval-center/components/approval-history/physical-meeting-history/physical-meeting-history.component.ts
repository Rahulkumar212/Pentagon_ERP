
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { OrganizationService } from '../../../../../../core/services/organization.service';

import {
  SalesVisit,
  SalesVisitResponse
} from '../../../../../../core/models/client-crm/sales-visit.type';

@Component({
  selector: 'app-physical-meeting-history',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './physical-meeting-history.component.html'
})
export class PhysicalMeetingHistoryComponent implements OnInit {

  physicalMeetingRecords: SalesVisit[] = [];

  selectedRecord: SalesVisit | null = null;

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.fetchSalesVisits();
  }

  fetchSalesVisits(): void {
    this.organizationService
      .fetchSalesVisits()
      .subscribe({
        next: (response: SalesVisitResponse) => {
          this.physicalMeetingRecords =
            response?.data ?? [];

          this.cdr.detectChanges();
        },
        error: () => {
          this.physicalMeetingRecords = [];
        }
      });
  }

  viewRecord(record: SalesVisit): void {
    this.selectedRecord = record;
  }

  closeView(): void {
    this.selectedRecord = null;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  }

  formatDate(value: string | null | undefined): string {
    if (!value) {
      return '-';
    }

    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    }).format(new Date(value));
  }

  getFieldLabel(key: string): string {
    const labels: Record<string, string> = {
      id: 'ID',
      executive_name: 'Executive Name',
      visit_date: 'Visit Date',
      visit_type: 'Visit Type',
      customer_name: 'Customer Name',
      customer_address: 'Customer Address',
      contact_person: 'Contact Person',
      contact_number: 'Contact Number',
      customer_email: 'Customer Email',
      city: 'City',
      product_description: 'Product Description',
      quantity: 'Quantity',
      remarks: 'Remarks',
      reporting_location: 'Reporting Location',
      activity_type: 'Activity Type',
      client_type: 'Client Type',
      lead_priority: 'Lead Priority',
      discussion_summary: 'Discussion Summary',
      current_status: 'Current Status',
      expected_business_value: 'Expected Business Value',
      proposal_sent: 'Proposal Sent',
      order_closed: 'Order Closed',
      order_lost_reason: 'Order Lost Reason',
      total_calls_made: 'Total Calls Made',
      connected_calls: 'Connected Calls',
      meetings_scheduled: 'Meetings Scheduled',
      new_leads_generated: 'New Leads Generated',
      expected_closure_date: 'Expected Closure Date',
      next_followup_date: 'Next Follow-up Date',
      management_support_required: 'Management Support Required',
      additional_remarks: 'Additional Remarks',
      meeting_photo: 'Meeting Photo',
      reason: 'Reason',
      closure_date: 'Closure Date',
      basic_amount: 'Basic Amount',
      status: 'Approval Status',
      userId: 'User ID',
      type: 'Type'
    };

    return labels[key] ?? key;
  }

  formatFieldValue(
    key: string,
    value: unknown
  ): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (
      key === 'visit_date' ||
      key === 'expected_closure_date' ||
      key === 'next_followup_date' ||
      key === 'closure_date'
    ) {
      return this.formatDate(String(value));
    }

    if (
      key === 'expected_business_value' ||
      key === 'basic_amount'
    ) {
      return this.formatCurrency(Number(value));
    }

    return String(value);
  }

  getVisibleFields(record: SalesVisit): string[] {
    const excludedFields = [
      'createdAt',
      'updatedAt'
    ];

    const recordObject =
      record as unknown as Record<string, unknown>;

    return Object.keys(recordObject).filter(key => {
      const value = recordObject[key];

      return (
        !excludedFields.includes(key) &&
        value !== null &&
        value !== undefined
      );
    });
  }

  getFieldValue(
    record: SalesVisit,
    key: string
  ): unknown {
    const recordObject =
      record as unknown as Record<string, unknown>;

    return recordObject[key];
  }
}

