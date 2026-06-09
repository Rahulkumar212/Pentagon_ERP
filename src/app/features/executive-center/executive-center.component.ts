import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EXECUTIVE_CARDS,
  EXECUTIVE_LEADS
} from './utils/executive-center-data';

import {
  ExecutiveCard,
  ExecutiveLead,
  LeadDiscussion
} from './models/executive-center.type';

import { CustomerDiscussionFormComponent }
from './forms/customer-discussion-form.component';

@Component({
  selector: 'app-executive-center',
  standalone: true,
  imports: [
    CommonModule,
    CustomerDiscussionFormComponent
  ],
  templateUrl:
    './executive-center.component.html'
})
export class ExecutiveCenterComponent
  implements OnInit {

  cards: ExecutiveCard[] = [];

  leads: ExecutiveLead[] = [
    ...EXECUTIVE_LEADS
  ];

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
    this.updateCards();
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

  this.updateCards();

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

  this.updateCards();
}

 private updateCards(): void {

  this.activeOpportunities =
    this.leads.filter(
      lead =>
        lead.status === 'ASSIGNED' ||
        lead.status === 'IN_PROGRESS'
    ).length;

  this.completedConversions =
    this.leads.filter(
      lead =>
        lead.status === 'CONVERTED'
    ).length;

  this.cards = [

    {
      title: 'NEW RAW LEADS',
      value: this.leads.filter(
        lead =>
          lead.status === 'ASSIGNED'
      ).length,
      description: 'Mailing & Call assignments',
      color: 'text-red-700'
    },

    {
      title: 'ACTIVE OPPORTUNITIES',
      value: this.activeOpportunities,
      description: 'Quotations drafting line',
      color: 'text-orange-500'
    },

    {
      title: 'TOTAL PIPELINE VALUE',
      value: `₹${this.pipelineValue.toLocaleString('en-IN')}`,
      description: 'Target forecast volume',
      color: 'text-red-800'
    },

    {
      title: 'COMPLETED CONVERSIONS',
      value: this.completedConversions,
      description: 'Lead to Order conversions',
      color: 'text-emerald-600'
    }

  ];
}
}