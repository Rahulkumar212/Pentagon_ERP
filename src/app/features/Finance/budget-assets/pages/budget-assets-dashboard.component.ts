import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BudgetAssetsHeaderComponent } from '../components/budget-assets-header/budget-assets-header.component';
import { BudgetSummaryCardsComponent } from '../components/budget-summary-cards/budget-summary-cards.component';
import { AssetsBudgetCenterComponent } from '../components/assets-budget-center/assets-budget-center.component';

@Component({
  selector: 'app-budget-assets-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BudgetAssetsHeaderComponent,
    BudgetSummaryCardsComponent,
    AssetsBudgetCenterComponent
  ],
  templateUrl: './budget-assets-dashboard.component.html'
})
export class BudgetAssetsDashboardComponent {

  selectedFinancialYear = 'FY 2026-27';

  onFinancialYearChanged(
    year: string
  ): void {

    this.selectedFinancialYear = year;

    console.log(
      'Selected Financial Year :',
      year
    );

  }

}