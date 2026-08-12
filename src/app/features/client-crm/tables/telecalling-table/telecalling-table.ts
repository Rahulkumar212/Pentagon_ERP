import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Telecalling,
  TelecallingResponse
} from '../../../../core/models/client-crm/telecalling.type';

import { ClientCrmService } from '../../../../core/services/client-crm.service';

@Component({
  selector: 'app-telecalling-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './telecalling-table.html'
})
export class TelecallingTable implements OnInit {

  telecallingRecords: Telecalling[] = [];

  private readonly clientCrmService =
    inject(ClientCrmService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadTelecalling();
  }

   loadTelecalling(): void {

    this.clientCrmService.getTelecalling().subscribe({

      next: (response: TelecallingResponse) => {

        const data = response.data ?? [];

        this.telecallingRecords = data.filter(
          record => record.visit_type === 'TELECALL'
        );

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error(
          'Failed to load telecalling records:',
          error
        );

        this.telecallingRecords = [];

        this.cdr.detectChanges();
      }

    });
  }
}