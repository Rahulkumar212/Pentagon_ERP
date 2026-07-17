import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  NgxEchartsModule
} from 'ngx-echarts';

import {
  EChartsOption
} from 'echarts';

@Component({
  selector: 'app-revenue-expense-chart',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  templateUrl:
    './revenue-expense-chart.component.html'
})
export class RevenueExpenseChartComponent {

   @Input()
  chartData!: EChartsOption;

  chartOptions: EChartsOption = {

    tooltip: {
      trigger: 'axis'
    },

    legend: {
      top: 0
    },

    grid: {
      left: '4%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul'
      ]
    },

    yAxis: {
      type: 'value'
    },

    series: [

      {

        name: 'Revenue',

        type: 'line',

        smooth: true,

        data: [
          120000,
          180000,
          150000,
          220000,
          260000,
          310000,
          340000
        ],

        areaStyle: {}

      },

      {

        name: 'Expense',

        type: 'line',

        smooth: true,

        data: [
          90000,
          120000,
          115000,
          145000,
          170000,
          185000,
          210000
        ],

        areaStyle: {}

      }

    ]

  };

}