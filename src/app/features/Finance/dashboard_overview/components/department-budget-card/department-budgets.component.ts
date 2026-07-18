import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DepartmentBudget {
  department: string;
  spent: number;
  limit: number;
}

@Component({
  selector: 'app-department-budgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-budgets.component.html'
})
export class DepartmentBudgetsComponent {

  budgets: DepartmentBudget[] = [
    {
      department: 'Engineering',
      spent: 395000,
      limit: 500000
    },
    {
      department: 'Marketing',
      spent: 210000,
      limit: 250000
    },
    {
      department: 'Finance',
      spent: 88000,
      limit: 120000
    },
    {
      department: 'Operations',
      spent: 340000,
      limit: 300000
    }
  ];

  getPercentage(item: DepartmentBudget): number {
    return Math.min((item.spent / item.limit) * 100, 100);
  }

  isExceeded(item: DepartmentBudget): boolean {
    return item.spent > item.limit;
  }

  getExceededAmount(item: DepartmentBudget): number {
    return item.spent - item.limit;
  }

  totalCompliance(): number {
    const totalSpent = this.budgets.reduce((a, b) => a + b.spent, 0);
    const totalLimit = this.budgets.reduce((a, b) => a + b.limit, 0);

    return Math.round((totalSpent / totalLimit) * 100);
  }

}