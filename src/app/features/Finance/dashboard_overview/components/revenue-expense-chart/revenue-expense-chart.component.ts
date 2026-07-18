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

  color: [
    '#991b1b',
    '#cbd5e1'
  ],

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

  legend: {
    top: 0,
    right: 0,
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
      color: '#334155',
      fontSize: 13
    }
  },

  grid: {
    left: '5%',
    right: '3%',
    top: '18%',
    bottom: '10%',
    containLabel: true
  },

  xAxis: {

    type: 'category',

    data: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul'
    ],

    axisTick: {
      show: false
    },

    axisLine: {
      lineStyle: {
        color: '#e5e7eb'
      }
    },

    axisLabel: {
      color: '#64748b'
    }

  },

  yAxis: {

    type: 'value',

    splitLine: {

      lineStyle: {

        color: '#edf2f7',

        type: 'dashed'

      }

    },

    axisLine: {
      show: false
    },

    axisTick: {
      show: false
    },

    axisLabel: {
      show: false
    }

  },

  series: [
  {
    name: 'Revenue',
    type: 'bar',
    barWidth: 18,

    itemStyle: {
      borderRadius: [4, 4, 0, 0]
    },

    data: [
      180,
      240,
      250,
      280,
      320,
      370,
      55
    ]
  },

  {
    name: 'Expense',
    type: 'bar',
    barWidth: 18,

    itemStyle: {
      borderRadius: [4, 4, 0, 0]
    },

    data: [
      140,
      175,
      190,
      220,
      245,
      280,
      25
    ]
  }
]

};

}