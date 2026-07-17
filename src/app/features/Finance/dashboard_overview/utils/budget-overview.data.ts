export interface BudgetOverview {

  category: string;

  budget: number;

  spent: number;

  percentage: number;

}

export const BUDGET_OVERVIEW: BudgetOverview[] = [

  {
    category: 'Marketing',
    budget: 500000,
    spent: 425000,
    percentage: 85
  },

  {
    category: 'Human Resources',
    budget: 300000,
    spent: 210000,
    percentage: 70
  },

  {
    category: 'Information Technology',
    budget: 800000,
    spent: 520000,
    percentage: 65
  },

  {
    category: 'Operations',
    budget: 650000,
    spent: 585000,
    percentage: 90
  },

  {
    category: 'Sales',
    budget: 450000,
    spent: 270000,
    percentage: 60
  },

  {
    category: 'Administration',
    budget: 250000,
    spent: 112500,
    percentage: 45
  }

];