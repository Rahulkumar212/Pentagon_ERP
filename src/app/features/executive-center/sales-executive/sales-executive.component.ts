import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ExecutiveCard,
  ExecutiveLead,
  LeadDiscussion
} from './models/sales-executive.type';

import { CustomerDiscussionFormComponent }
  from './forms/customer-discussion-form.component';
import { DashboardService } from '../../../core/services/executive.service';
import { OrganizationService } from '../../../core/services/organization.service';
import { ExecutiveLayoutComponent } from '../../../layouts/executive-layout/executive-layout.component';

@Component({
  selector: 'app-sales-executive',
  standalone: true,
  imports: [
    CommonModule,
    CustomerDiscussionFormComponent,
    ExecutiveLayoutComponent
  ],
  templateUrl:
    './sales-executive.component.html'
})
export class SalesExecutiveComponent
  implements OnInit {
  notifications: any[] = [];
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
    this.loadNotifications();
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

  onDiscussionSaved(formData: LeadDiscussion): void {

    const lead = this.selectedLead;

    if (!lead) {
      return;
    }

    this.dashboardService
      .leadDiscussion(lead.id, formData)
      .subscribe({

        next: () => {

          const index = this.leads.findIndex(
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

        error: err => {

          console.error(err);

        }

      });

  }

  convertLead(lead: ExecutiveLead): void {

  this.dashboardService
    .convertLead(lead.id)
    .subscribe({

      next: () => {

        const index = this.leads.findIndex(
          l => l.id === lead.id
        );

        if (index !== -1) {

          this.leads[index] = {

            ...this.leads[index],

            status: 'CONVERTED'

          };

        }

        // Executive table refresh
        this.loadOrganizations();

        // Stats refresh
        this.loadStats();

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(err);

      }

    });

}

  loadOrganizations(): void {

    this.organizationService.getOrganizations().subscribe({

      next: (response) => {

        const organizations = response.data ?? [];

        this.leads = organizations.map((item: any): ExecutiveLead => {

          let status = 'RAW';

          switch (item.status) {

            case 'Interested':
              status = 'INTERESTED';
              break;

            case 'Follow Up Required':
            case 'No Answer':
            case 'Busy':
            case 'Wrong Number':
            case 'Not Interested':
              status = 'IN_PROGRESS';
              break;

            case 'Converted':
              status = 'CONVERTED';
              break;

            case 'RAW':
              status = 'RAW';
              break;

            default:
              status = item.status ?? 'RAW';

          }

          return {

            id: item.id,
            organization: item.organization_name ?? '',
            source: item.priority ?? '',
            contactPerson: item.name_of_poc ?? '',
            phone: item.phoneNumber ?? '',
            email: item.email ?? '',
            attempts: item.attemptsCount ?? 0,

            status: status as
              | 'RAW'
              | 'IN_PROGRESS'
              | 'INTERESTED'
              | 'CONVERTED',

            discussionData: undefined

          };

        });

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(err);

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

  loadNotifications(): void {

    this.dashboardService
      .getNotifications()
      .subscribe({

        next: (response) => {

          console.log('Notifications Response:', response);

          this.notifications = response.data ?? [];

          this.cdr.detectChanges();
        },

        error: (err) => {
          console.error('Error loading notifications', err);
        }

      });

  }
}