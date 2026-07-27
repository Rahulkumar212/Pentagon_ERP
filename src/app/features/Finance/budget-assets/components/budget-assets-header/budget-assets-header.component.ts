import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-budget-assets-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './budget-assets-header.component.html'
})
export class BudgetAssetsHeaderComponent {

  @Output()
  financialYearChanged =
    new EventEmitter<string>();

  financialYears = [
    'FY 2026-27',
    'FY 2025-26',
    'FY 2024-25'
  ];

  selectedYear =
    this.financialYears[0];

  onYearChange(): void {

    this.financialYearChanged.emit(
      this.selectedYear
    );

  }

}