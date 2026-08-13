import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  MatTabsModule
} from '@angular/material/tabs';

import {
  TelecallingPayload
} from '../../../core/models/client-crm/telecalling.type';

import {
  SalesVisitPayload
} from '../../../core/models/client-crm/sales-visit.type';

import {
  TelecallingFormComponent
} from './telecalling-form/telecalling-form.component';

import {
  SalesPhysicalMeetingFormComponent
} from './sales-physical-meeting-form/sales-physical-meeting-form.component';


@Component({
  selector: 'app-organization-form',
  standalone: true,
  imports: [
    MatTabsModule,
    TelecallingFormComponent,
    SalesPhysicalMeetingFormComponent
  ],
  templateUrl: './organization-form.component.html'
})
export class OrganizationFormComponent {

  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  save = new EventEmitter<
    TelecallingPayload | SalesVisitPayload
  >();

  @Output()
  cancel = new EventEmitter<void>();

  // =====================================================
  // TAB
  // =====================================================

  selectedTab = 0;

  // =====================================================
  // TAB CHANGE
  // =====================================================

  onTabChange(index: number): void {

    this.selectedTab = index;
  }

  // =====================================================
  // TELECALLING SAVE
  // =====================================================

  onTelecallingSave(
    payload: TelecallingPayload
  ): void {

    this.save.emit(payload);
  }

  // =====================================================
  // SALES VISIT SAVE
  // =====================================================

  onSalesVisitSave(
    payload: SalesVisitPayload
  ): void {

    this.save.emit(payload);
  }

  // =====================================================
  // CANCEL
  // =====================================================

  onCancel(): void {

    this.cancel.emit();
  }
}