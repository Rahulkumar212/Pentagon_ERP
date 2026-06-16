import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Organization } from '../../../core/models/client-crm.type';
import { ClientCrmService } from '../../../core/services/client-crm.service';
import { CreateOrderFormComponent } from '../form/create-order-form.component';

@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [CommonModule, CreateOrderFormComponent],
  templateUrl: './organization-table.component.html',
})
export class OrganizationTableComponent implements OnInit {
  organizations: Organization[] = [];
  private cdr = inject(ChangeDetectorRef);
  // Order Modal
  showCreateOrderModal = false;

  selectedOrganization: Organization | null = null;

  private readonly clientCrmService = inject(ClientCrmService);

  ngOnInit(): void {
    this.loadConvertedLeads();
  }

  loadConvertedLeads(): void {
    this.clientCrmService.getConvertedLeads().subscribe({
      next: (response) => {
        this.organizations = response.data;

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Error loading converted leads', err);
      },
    });
  }

  // ==========================
  // Open Create Order Modal
  // ==========================

  openCreateOrderModal(organization: Organization): void {
    this.selectedOrganization = organization;

    this.showCreateOrderModal = true;
  }
  saveOrder(orderData: any): void {
    if (!this.selectedOrganization) {
      return;
    }

    const payload = {
      clientAccountId: this.selectedOrganization.id,

      purchaseMode: orderData.purchaseMode,

      shippingAddress: orderData.shippingAddress,

      totalAmount: Number(orderData.orderAmount),

      proposal: orderData.proposal,

      // poNumber: '',
    };

    console.log('Payload =>', payload);

    this.clientCrmService.createOrder(payload).subscribe({
      next: (response) => {
        console.log('Order Created', response);

        alert('Order Created Successfully');

        this.closeCreateOrderModal();
      },

      error: (error) => {
        console.error('Order Creation Failed', error);

        alert(error?.error?.message || 'Failed to create order');
      },
    });
  }

  // ==========================
  // Close Modal
  // ==========================

  closeCreateOrderModal(): void {
    this.showCreateOrderModal = false;

    this.selectedOrganization = null;
  }
}
