
import {
  Component,
  inject,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  ExecutiveCard,
  ExecutiveLead,
  LeadDiscussion
} from './models/sales-executive.type';

import {
  CustomerDiscussionFormComponent
} from './forms/customer-discussion-form.component';

import {
  DashboardService
} from '../../../core/services/executive.service';

import {
  ExecutiveLayoutComponent
} from '../../../layouts/executive-layout/executive-layout.component';

import {
  TelecallingTable
} from '../../client-crm/tables/telecalling-table/telecalling-table';

import {
  PhysicalMeetingTable
} from '../../client-crm/tables/physical-meeting-table/physical-meeting-table';

import {
  OrganizationService
} from '../../../core/services/organization.service';

import {
  Telecalling
} from '../../../core/models/client-crm/telecalling.type';

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

  approvedTelecalling: Telecalling[] = [];

  rejectedTelecalling: Telecalling[] = [];

  private readonly dashboardService =
    inject(DashboardService);

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  selectedLead: ExecutiveLead | null = null;

  showDiscussionForm = false;

  ngOnInit(): void {
    this.loadStats();
    this.loadNotifications();
    this.loadTelecalling();
  }

  openLeadForm(
    lead: ExecutiveLead
  ): void {
    this.selectedLead = lead;
    this.showDiscussionForm = true;
  }

  closeDiscussionForm(): void {
    this.showDiscussionForm = false;
    this.selectedLead = null;
  }

  onDiscussionSaved(
    formData: LeadDiscussion
  ): void {

    const lead = this.selectedLead;

    if (!lead) {
      return;
    }

    this.dashboardService
      .leadDiscussion(
        lead.id,
        formData
      )
      .subscribe({

        next: () => {

          const index =
            this.leads.findIndex(
              l => l.id === lead.id
            );

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

  convertLead(
    lead: ExecutiveLead
  ): void {

    this.dashboardService
      .convertLead(lead.id)
      .subscribe({

        next: () => {

          const index =
            this.leads.findIndex(
              l => l.id === lead.id
            );

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

  loadTelecalling(): void {

    this.organizationService
      .fetchTelecalling()
      .subscribe({

        next: (response) => {

          const telecalling =
            response?.data ?? [];

          this.approvedTelecalling =
            telecalling.filter(
              (item: Telecalling) =>
                item.status === 'APPROVED'
            );

          this.rejectedTelecalling =
            telecalling.filter(
              (item: Telecalling) =>
                item.status === 'REJECTED'
            );

          this.cdr.detectChanges();
        },

        error: (err) => {

          console.error(
            'Error loading telecalling:',
            err
          );

          this.approvedTelecalling = [];

          this.rejectedTelecalling = [];
        }

      });
  }

  loadStats(): void {

    this.dashboardService
      .getStats()
      .subscribe({

        next: (res: any) => {

          const stats =
            res?.data ?? {
              totalLeads: 0
            };

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

  loadNotifications(): void {

    this.dashboardService
      .getNotifications()
      .subscribe({

        next: (response: any) => {

          this.notifications =
            response.data ?? [];

          this.cdr.detectChanges();
        },

        error: (err) => {

          console.error(
            'Error loading notifications',
            err
          );
        }

      });
  }
}

