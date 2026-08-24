import {
  Component,
  EventEmitter,
  Output
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
} from '../../core/models/client-crm/sales-visit.type';

import {
  TelecallingPayload
} from '../../core/models/client-crm/telecalling.type';

import {
  TelecallingTable
} from './tables/telecalling-table/telecalling-table';


@Component({
  selector: 'app-client-crm',
  standalone: true,

  imports: [
    CommonModule,
    OrganizationFormComponent,
    OrganizationTableComponent,
    TelecallingTable
  ],

  templateUrl: './client-crm.component.html'
})
export class ClientCrmComponent {

  showOrganizationModal = false;

  @Output()
save = new EventEmitter<
  TelecallingPayload | SalesVisitPayload
>();


  // =====================================================
  // OPEN ORGANIZATION FORM
  // =====================================================

  openOrganizationModal(): void {
    this.showOrganizationModal = true;
  }


  // =====================================================
  // CLOSE ORGANIZATION FORM
  // =====================================================

  closeOrganizationModal(): void {
    this.showOrganizationModal = false;
  }


  // =====================================================
  // SAVE ORGANIZATION
  // =====================================================

  saveOrganization(
    payload: TelecallingPayload | SalesVisitPayload
  ): void {

    console.log(
      'Organization saved:',
      payload
    );


    // ============================================
    // TELECALLING
    // ============================================

    if (payload.visit_type === 'TELECALL') {

      console.log(
        'Telecalling payload:',
        payload
      );

      this.showOrganizationModal = false;

      return;
    }


    // ============================================
    // SALES PHYSICAL VISIT
    // ============================================

    if (payload.visit_type === 'PHYSICAL_MEETING') {

      console.log(
        'Sales Visit payload:',
        payload
      );

      this.showOrganizationModal = false;

      return;
    }
  }
}