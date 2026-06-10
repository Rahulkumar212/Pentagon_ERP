import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Organization } from '../../../core/models/client-crm.type';

@Component({
  selector: 'app-organization-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-table.component.html'
})
export class OrganizationTableComponent implements OnChanges {

  @Input() organizations: Organization[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['organizations']) {

      console.log(
        'Updated Organizations:',
        changes['organizations'].currentValue
      );

      console.log(
        'Length:',
        this.organizations?.length
      );
    }
  }
}