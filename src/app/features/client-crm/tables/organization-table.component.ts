import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Organization } from '../../../core/models/client-crm.type';
import { ClientCrmService } from '../../../core/services/client-crm.service';
import { CreateOrderFormComponent } from '../form/create-order-form.component';


@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [
    CommonModule,
    CreateOrderFormComponent
  ],
  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent implements OnInit {

  organizations: Organization[] = [];

  // Order Modal
  showCreateOrderModal = false;

  selectedOrganization: Organization | null = null;

  private readonly clientCrmService =
    inject(ClientCrmService);

  ngOnInit(): void {
    this.loadConvertedLeads();
  }

  loadConvertedLeads(): void {

    this.clientCrmService
      .getConvertedLeads()
      .subscribe({

        next: (response) => {

          this.organizations =
            response.data ?? [];

        },

        error: (err) => {

          console.error(
            'Error loading converted leads',
            err
          );

        }

      });

  }

  // ==========================
  // Open Create Order Modal
  // ==========================

  openCreateOrderModal(
    organization: Organization
  ): void {

    this.selectedOrganization = organization;

    this.showCreateOrderModal = true;

  }

  // ==========================
  // Close Modal
  // ==========================

  closeCreateOrderModal(): void {

    this.showCreateOrderModal = false;

    this.selectedOrganization = null;

  }

  // ==========================
  // Save Order
  // ==========================

  saveOrder(orderData: any): void {

    const payload = {

      organizationId: this.selectedOrganization?.id,

      organizationName:
        this.selectedOrganization?.organization_name,

      purchaseMode: orderData.purchaseMode,

      orderAmount: orderData.orderAmount,

      proposal: orderData.proposal

    };

    console.log(payload);

    /*
    this.clientCrmService
      .createOrder(payload)
      .subscribe({
        next: () => {

          this.closeCreateOrderModal();

        }
      });
    */

    this.closeCreateOrderModal();

  }

}