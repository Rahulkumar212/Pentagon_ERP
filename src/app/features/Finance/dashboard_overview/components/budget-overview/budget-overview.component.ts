import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
    BUDGET_OVERVIEW,
    BudgetOverview
} from '../../utils/budget-overview.data';

@Component({
  selector: 'app-budget-overview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './budget-overview.component.html'
})
export class BudgetOverviewComponent {

     @Input()
  budgets: BudgetOverview[] = [];


}