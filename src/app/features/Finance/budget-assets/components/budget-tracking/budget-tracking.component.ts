import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-budget-tracking',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  templateUrl: './budget-tracking.component.html'
})
export class BudgetTrackingComponent {

  summaryCards = [
    {
      title: 'Total Budget',
      value: '₹12.40 Cr',
      color: 'text-blue-700'
    },
    {
      title: 'Utilized',
      value: '₹8.15 Cr',
      color: 'text-green-700'
    },
    {
      title: 'Remaining',
      value: '₹4.25 Cr',
      color: 'text-orange-700'
    },
    {
      title: 'Departments',
      value: '8',
      color: 'text-purple-700'
    }
  ];

  budgetUtilizationChart: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },

    legend: {
      bottom: 0
    },

    grid: {
      left: 50,
      right: 20,
      top: 40,
      bottom: 60
    },

    xAxis: {
      type: 'category',
      data: [
        'Sales',
        'Finance',
        'HR',
        'SCM',
        'IT',
        'Marketing'
      ]
    },

    yAxis: {
      type: 'value'
    },

    series: [
      {
        name: 'Budget',
        type: 'bar',
        data: [
          250,
          180,
          90,
          220,
          150,
          170
        ]
      },
      {
        name: 'Spent',
        type: 'bar',
        data: [
          210,
          130,
          70,
          180,
          120,
          150
        ]
      }
    ]
  };

  monthlyExpenseChart: EChartsOption = {

    tooltip: {
      trigger: 'axis'
    },

    xAxis: {
      type: 'category',
      data: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },

    yAxis: {
      type: 'value'
    },

    series: [
      {
        type: 'line',
        smooth: true,
        areaStyle: {},
        data: [
          80,
          95,
          110,
          120,
          135,
          142,
          160,
          170,
          182
        ]
      }
    ]
  };

  departmentBudgets = [
    {
      department: 'Sales',
      budget: '₹2.50 Cr',
      spent: '₹2.10 Cr',
      remaining: '₹40 L'
    },
    {
      department: 'Finance',
      budget: '₹1.80 Cr',
      spent: '₹1.30 Cr',
      remaining: '₹50 L'
    },
    {
      department: 'HR',
      budget: '₹90 L',
      spent: '₹70 L',
      remaining: '₹20 L'
    },
    {
      department: 'SCM',
      budget: '₹2.20 Cr',
      spent: '₹1.80 Cr',
      remaining: '₹40 L'
    },
    {
      department: 'IT',
      budget: '₹1.50 Cr',
      spent: '₹1.20 Cr',
      remaining: '₹30 L'
    }
  ];

}