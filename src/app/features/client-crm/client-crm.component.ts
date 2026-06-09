import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationFormComponent } from './form/organization-form.component';
import { OrganizationTableComponent } from './tables/organization-table.component';

import { Organization } from './models/organization.model';

@Component({
  selector: 'app-client-crm',
  standalone: true,
  imports: [
    CommonModule,
    OrganizationFormComponent,
    OrganizationTableComponent
  ],
  templateUrl: './client-crm.component.html'
})
export class ClientCrmComponent {

  showOrganizationModal = false;

  organizations: Organization[] = [];

  openOrganizationModal(): void {
    this.showOrganizationModal = true;
  }

  closeOrganizationModal(): void {
    this.showOrganizationModal = false;
  }

  saveOrganization(organization: Organization): void {

    console.log('Organization Saved:', organization);

    // add new record on top
    this.organizations = [
      organization,
      ...this.organizations
    ];

    // close modal
    this.closeOrganizationModal();
  }
}