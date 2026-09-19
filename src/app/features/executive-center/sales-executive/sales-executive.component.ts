import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';

import {
  ExecutiveCard,
  ExecutiveLead,
  LeadDiscussion
} from './models/sales-executive.type';

import { CustomerDiscussionFormComponent } from './forms/customer-discussion-form.component';
import { DashboardService } from '../../../core/services/executive.service';
import { ExecutiveLayoutComponent } from '../../../layouts/executive-layout/executive-layout.component';
import { TelecallingTable } from "../../client-crm/tables/telecalling-table/telecalling-table";
import { PhysicalMeetingTable} from '../../client-crm/tables/physical-meeting-table/physical-meeting-table';
import { OrganizationService } from '../../../core/services/organization.service';

@Component({
  selector: 'app-sales-executive',
  standalone: true,
  imports: [
    CustomerDiscussionFormComponent,
    ExecutiveLayoutComponent,
    PhysicalMeetingTable,
    TelecallingTable
],
  templateUrl: './sales-executive.component.html'
})
export class SalesExecutiveComponent implements OnInit {

  notifications: any[] = [];
  cards: ExecutiveCard[] = [];
  leads: ExecutiveLead[] = [];

  approvedTelecalling: any[] = [];
rejectedTelecalling: any[] = [];

  private readonly dashboardService = inject(DashboardService);
  private readonly organizationService = inject(OrganizationService);
  private readonly cdr = inject(ChangeDetectorRef);

  selectedLead: ExecutiveLead | null = null;
  showDiscussionForm = false;

  ngOnInit(): void {
  this.loadStats();
  this.loadNotifications();
  this.loadApprovedTelecalling();
  this.loadRejectedTelecalling();
}

  // ==========================
  // LEAD DISCUSSION
  // ==========================

  openLeadForm(lead: ExecutiveLead): void {
    this.selectedLead = lead;
    this.showDiscussionForm = true;
  }

  closeDiscussionForm(): void {
    this.showDiscussionForm = false;
    this.selectedLead = null;
  }

  onDiscussionSaved(formData: LeadDiscussion): void {

    const lead = this.selectedLead;
    if (!lead) return;

    this.dashboardService
      .leadDiscussion(lead.id, formData)
      .subscribe({
        next: () => {

          const index = this.leads.findIndex(l => l.id === lead.id);

          if (index !== -1) {

            const status =
              formData.outcome === 'INTERESTED'
                ? 'INTERESTED'
                : 'IN_PROGRESS';

            this.leads[index] = {
              ...this.leads[index],
              status,
              discussionData: formData
            };

          }

          this.closeDiscussionForm();
        },

        error: (err) => {
          console.error(err);
        }
      });
  }

  // ==========================
  // CONVERT LEAD
  // ==========================

  convertLead(lead: ExecutiveLead): void {

    this.dashboardService
      .convertLead(lead.id)
      .subscribe({

        next: () => {

          const index = this.leads.findIndex(l => l.id === lead.id);

          if (index !== -1) {
            this.leads[index] = {
              ...this.leads[index],
              status: 'CONVERTED'
            };
          }

          this.loadStats();
          this.cdr.detectChanges();
        },

        error: (err) => {
          console.error(err);
        }

      });
  }

  loadApprovedTelecalling(): void {
  this.organizationService.fetchApprovedTelecalling().subscribe({
    next: (response: any) => {
      this.approvedTelecalling = response?.data ?? [];
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error loading approved telecalling:', err);
      this.approvedTelecalling = [];
    }
  });
}


loadRejectedTelecalling(): void {
  this.organizationService.fetchRejectedTelecalling().subscribe({
    next: (response: any) => {
      this.rejectedTelecalling = response?.data ?? [];
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error loading rejected telecalling:', err);
      this.rejectedTelecalling = [];
    }
  });
}

  // ==========================
  // STATS
  // ==========================

  loadStats(): void {

    this.dashboardService.getStats().subscribe({

      next: (res: any) => {

        const stats = res?.data ?? { totalLeads: 0 };

        this.cards = [
          {
            title: 'NEW RAW LEADS',
            value: stats.totalLeads ?? 0,
            description: 'Mailing & Call assignments',
            color: 'text-red-700'
          },
          {
            title: 'ACTIVE OPPORTUNITIES',
            value: 0,
            description: 'Quotations drafting line',
            color: 'text-orange-500'
          },
          {
            title: 'TOTAL PIPELINE VALUE',
            value: '₹0',
            description: 'Target forecast volume',
            color: 'text-red-800'
          },
          {
            title: 'COMPLETED CONVERSIONS',
            value: 0,
            description: 'Lead to Order conversions',
            color: 'text-emerald-600'
          }
        ];

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  // ==========================
  // NOTIFICATIONS
  // ==========================

  loadNotifications(): void {

    this.dashboardService.getNotifications().subscribe({

      next: (response: any) => {
        this.notifications = response.data ?? [];
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Error loading notifications', err);
      }

    });

  }
}