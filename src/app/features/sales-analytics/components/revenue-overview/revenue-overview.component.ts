import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-revenue-overview',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective
  ],
  templateUrl: './revenue-overview.component.html'
})
export class RevenueOverviewComponent {

  chartOption: EChartsOption = {

    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: 20,
      right: 20,
      top: 25,
      bottom: 20,
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
        'Jun'

      ],

      axisLine: {
        lineStyle: {
          color: '#d1d5db'
        }
      },

      axisLabel: {
        color: '#6b7280'
      }

    },

    yAxis: {

      type: 'value',

      axisLine: {
        show: false
      },

      splitLine: {

        lineStyle: {

          color: '#f1f5f9'

        }

      },

      axisLabel: {

        formatter: '₹{value}L',

        color: '#6b7280'

      }

    },

    series: [

      {

        name: 'Revenue',

        type: 'line',

        smooth: true,

        symbol: 'circle',

        symbolSize: 8,

        data: [

          28,
          32,
          35,
          40,
          46,
          52

        ],

        lineStyle: {

          width: 4,

          color: '#991b1b'

        },

        areaStyle: {

          color: {

            type: 'linear',

            x: 0,

            y: 0,

            x2: 0,

            y2: 1,

            colorStops: [

              {
                offset: 0,
                color: 'rgba(153,27,27,.35)'
              },

              {
                offset: 1,
                color: 'rgba(153,27,27,.03)'
              }

            ]

          }

        }

      }

    ]

  };

}