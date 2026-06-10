import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ExecutiveCard,
  ExecutiveLead,
  LeadDiscussion
} from './models/executive-center.type';

import { CustomerDiscussionFormComponent }
  from './forms/customer-discussion-form.component';
import { DashboardService } from '../../core/services/executive.service';
import { OrganizationService } from '../../core/services/organization.service';
import { CalendarWidgetComponent } from '../../shared/components/calendar/calendar-widget.component';
import { NotificationWidgetComponent } from '../../shared/components/notification/notification-widget.component';
import { NOTIFICATIONS } from '../../shared/components/notification/utils/notification.data';

@Component({
  selector: 'app-executive-center',
  standalone: true,
  imports: [
    CommonModule,
    CustomerDiscussionFormComponent,
    CalendarWidgetComponent,
    NotificationWidgetComponent
  ],
  templateUrl:
    './executive-center.component.html'
})
export class ExecutiveCenterComponent
  implements OnInit {
    notifications = [...NOTIFICATIONS];
  trackByTitle(index: number, item: any) {
    return item.title;
  }
  cards: ExecutiveCard[] = [];
  private readonly dashboardService = inject(DashboardService);
  private readonly cdr = inject(ChangeDetectorRef)
  private readonly organizationService = inject(OrganizationService);

  leads: ExecutiveLead[] = [];

  selectedLead: ExecutiveLead | null =
    null;

  showDiscussionForm = false;

  activeOpportunities =
    this.leads.filter(
      l =>
        l.status === 'ASSIGNED' ||
        l.status === 'IN_PROGRESS'
    ).length;

  pipelineValue = 0;

  completedConversions = 0;

  ngOnInit(): void {
    this.loadStats();
    this.loadOrganizations();
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

    if (!this.selectedLead) {
      return;
    }

    const index = this.leads.findIndex(
      l => l.id === this.selectedLead?.id
    );

    if (index !== -1) {

      this.leads[index] = {
        ...this.leads[index],
        status: 'IN_PROGRESS',
        discussionData: formData
      };

      this.pipelineValue += Number(
        formData.amount || 0
      );
    }

    this.loadStats();

    this.closeDiscussionForm();
  }

  convertLead(
    lead: ExecutiveLead
  ): void {

    const index = this.leads.findIndex(
      l => l.id === lead.id
    );

    if (index !== -1) {

      this.leads[index] = {
        ...this.leads[index],
        status: 'CONVERTED'
      };
    }

    this.loadStats();
  }

  loadOrganizations(): void {

    this.organizationService.getOrganizations().subscribe({

      next: (response) => {

        const organizations = response.data ?? [];

        this.leads = organizations.map((item: any): ExecutiveLead => ({
          id: item.id,
          organization: item.organization_name ?? '',
          source: item.priority ?? 'DIRECT',
          contactPerson: item.name_of_poc ?? '',
          phone: item.phoneNumber ?? '',
          email: item.email ?? '',
          attempts: item.attempts ?? 0,
          // status: (item.status ?? 'ASSIGNED') as
          //   'ASSIGNED' | 'IN_PROGRESS' | 'CONVERTED',
          status: 'ASSIGNED',
          discussionData: undefined
        }));

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Error loading organizations', err);
      }

    });

  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (res) => {

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
}