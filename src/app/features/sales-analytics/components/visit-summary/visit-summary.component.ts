import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-visit-summary',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective
  ],
  templateUrl: './visit-summary.component.html'
})
export class VisitSummaryComponent {

  chartOption: EChartsOption = {

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },

    legend: {
      bottom: 0,
      textStyle: {
        color: '#6b7280'
      }
    },

    grid: {
      left: 35,
      right: 20,
      top: 30,
      bottom: 60,
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
        'Jun'
      ],

      axisLabel: {
        color: '#6b7280'
      }

    },

    yAxis: {

      type: 'value',

      splitLine: {
        lineStyle: {
          color: '#f3f4f6'
        }
      },

      axisLabel: {
        color: '#6b7280'
      }

    },

    series: [

      {

        name: 'Completed',

        type: 'bar',

        stack: 'Visits',

        barWidth: 28,

        itemStyle: {
          color: '#16a34a',
          borderRadius: [4, 4, 0, 0]
        },

        data: [
          18,
          22,
          26,
          31,
          34,
          38
        ]

      },

      {

        name: 'Planned',

        type: 'bar',

        stack: 'Visits',

        itemStyle: {
          color: '#2563eb'
        },

        data: [
          5,
          4,
          6,
          5,
          7,
          6
        ]

      },

      {

        name: 'Cancelled',

        type: 'bar',

        stack: 'Visits',

        itemStyle: {
          color: '#dc2626'
        },

        data: [
          1,
          2,
          1,
          3,
          2,
          1
        ]

      }

    ]

  };

}