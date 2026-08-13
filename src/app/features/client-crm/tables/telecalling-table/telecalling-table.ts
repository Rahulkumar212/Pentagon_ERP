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

import {
  OrganizationService
} from '../../../../core/services/organization.service';


@Component({
  selector: 'app-telecalling-table',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './telecalling-table.html'
})
export class TelecallingTable implements OnInit {

  // =====================================================
  // STATE
  // =====================================================

  telecallingRecords: Telecalling[] = [];


  // =====================================================
  // SERVICES
  // =====================================================

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.loadTelecalling();

  }


  // =====================================================
  // LOAD TELECALLING
  // =====================================================

  loadTelecalling(): void {

    this.organizationService
      .fetchTelecalling()
      .subscribe({

        // -------------------------------------------------
        // SUCCESS
        // -------------------------------------------------

        next: (response: TelecallingResponse) => {

          this.telecallingRecords =
            response.data ?? [];

          this.cdr.detectChanges();

        },


        // -------------------------------------------------
        // ERROR
        // -------------------------------------------------

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