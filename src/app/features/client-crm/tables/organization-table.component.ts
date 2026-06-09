import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization } from '../models/organization.model';

@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent {

  @Input()
  organizations: Organization[] = [];

}