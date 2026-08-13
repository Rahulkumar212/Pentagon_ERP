import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-bank-balance-chart',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  templateUrl: './bank-balance-chart.component.html'
})
export class BankBalanceChartComponent {

  bankBalanceChart: EChartsOption = {

    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: 45,
      right: 20,
      top: 40,
      bottom: 35
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
      ],

      axisLine: {
        lineStyle: {
          color: '#CBD5E1'
        }
      },

      axisLabel: {
        color: '#64748B'
      }

    },

    yAxis: {

      type: 'value',

      name: '₹ Cr',

      axisLabel: {
        color: '#64748B'
      },

      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }

    },

    series: [

      {

        name: 'Bank Balance',

        type: 'line',

        smooth: true,

        symbol: 'circle',

        symbolSize: 8,

        lineStyle: {
          width: 4,
          color: '#991B1B'
        },

        itemStyle: {
          color: '#991B1B'
        },

        areaStyle: {
          color: 'rgba(153,27,27,.15)'
        },

        data: [
          8.2,
          9.1,
          8.6,
          10.4,
          11.8,
          12.1,
          12.84
        ]

      }

    ]

  };

}