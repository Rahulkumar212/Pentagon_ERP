import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  OrganizationFormComponent
} from './form/organization-form.component';

import {
  OrganizationTableComponent
} from './tables/organization-table.component';

import {
  SalesVisitPayload
} from '../../core/models/client-crm.type';

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

  openOrganizationModal(): void {

    this.showOrganizationModal = true;
  }

  closeOrganizationModal(): void {

    this.showOrganizationModal = false;
  }

  saveOrganization(
  salesVisit: SalesVisitPayload
): void {

  console.log(salesVisit);

  this.closeOrganizationModal();
}
}