import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-organization-summary',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective
  ],
  templateUrl: './organization-summary.component.html'
})
export class OrganizationSummaryComponent {

  chartOption: EChartsOption = {

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },

    grid: {
      left: 130,
      right: 30,
      top: 20,
      bottom: 20
    },

    xAxis: {

      type: 'value',

      splitLine: {

        lineStyle: {

          color: '#f1f5f9'

        }

      },

      axisLabel: {

        color: '#6b7280'

      }

    },

    yAxis: {

      type: 'category',

      data: [

        'Schools',
        'Colleges',
        'Universities',
        'Institutes',
        'Corporate'

      ],

      axisLabel: {

        color: '#374151',

        fontWeight: 600

      }

    },

    series: [

      {

        type: 'bar',

        data: [

          128,
          96,
          64,
          48,
          32

        ],

        barWidth: 18,

        itemStyle: {

          borderRadius: [
            0,
            10,
            10,
            0
          ],

          color: '#991b1b'

        },

        label: {

          show: true,

          position: 'right',

          color: '#111827',

          fontWeight: 600

        }

      }

    ]

  };

}