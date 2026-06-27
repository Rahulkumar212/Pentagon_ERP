import {
  Component,
  ViewChild
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  InstitutionVisitFormComponent
} from '../forms/institution-visit-form.component';

import {
  InstitutionVisitTableComponent
} from '../tables/institution-visit-table.component';

import {
  InstitutionVisit
} from '../../../core/models/institution-visit.type';

@Component({
  selector: 'app-institution-visit-planner',
  standalone: true,
  imports: [
    CommonModule,
    InstitutionVisitFormComponent,
    InstitutionVisitTableComponent
  ],
  templateUrl: './institution-visit-planner.component.html'
})
export class InstitutionVisitPlannerComponent {

  @ViewChild(InstitutionVisitTableComponent)
  visitTable!: InstitutionVisitTableComponent;

  showModal = false;

  selectedVisit: InstitutionVisit | null = null;

  // ==========================
  // Create
  // ==========================

  openModal(): void {

    this.selectedVisit = null;

    this.showModal = true;

  }

  // ==========================
  // Edit
  // ==========================

  editVisit(
    visit: InstitutionVisit
  ): void {

    this.selectedVisit = { ...visit };

    this.showModal = true;

  }

  // ==========================
  // Close
  // ==========================

  closeModal(): void {

    this.showModal = false;

    this.selectedVisit = null;

  }

  // ==========================
  // Save / Update Success
  // ==========================

  saveVisit(): void {

    this.closeModal();

    this.visitTable.loadVisits();

  }

}