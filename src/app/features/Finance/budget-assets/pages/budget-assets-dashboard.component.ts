import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetAssetsHeaderComponent } from '../components/budget-assets-header/budget-assets-header.component';
import { BudgetSummaryCardsComponent } from '../components/budget-summary-cards/budget-summary-cards.component';
import { AssetsBudgetCenterComponent } from '../components/assets-budget-center/assets-budget-center.component';

import { BudgetTrackingComponent } from '../components/budget-tracking/budget-tracking.component';

@Component({
  selector: 'app-budget-assets-dashboard',
  standalone: true,
  imports: [
    CommonModule,

    BudgetAssetsHeaderComponent,
    BudgetSummaryCardsComponent,
    AssetsBudgetCenterComponent,

    BudgetTrackingComponent
  ],
  templateUrl: './budget-assets-dashboard.component.html'
})
export class BudgetAssetsDashboardComponent {

  activeTab:
    | 'budget'
    | 'taxation'
    | 'assets' = 'assets';

  selectedFinancialYear = 'FY 2026-27';

  onFinancialYearChanged(year: string): void {

    this.selectedFinancialYear = year;

    console.log('Financial Year :', year);

    // API Call if required

  }

  onTabChanged(
    tab: 'budget' | 'taxation' | 'assets'
  ): void {

    this.activeTab = tab;

    console.log('Active Tab :', tab);

  }

}