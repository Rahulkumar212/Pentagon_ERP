import {
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Organization } from '../../../core/models/client-crm.type';
import { ClientCrmService } from '../../../core/services/client-crm.service';

@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent
  implements OnInit {

    
  organizations: Organization[] = [];

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

          console.log(
            'Organizations:',
            this.organizations
          );
           console.log(this.organizations.length);

        },

        error: (err) => {

          console.error(
            'Error loading converted leads',
            err
          );

        }

      });

  }

}