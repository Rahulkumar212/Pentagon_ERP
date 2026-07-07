import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-analytics-charts',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  templateUrl: './analytics-charts.component.html'
})
export class AnalyticsChartsComponent {

  attendanceChart = {

    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: 40,
      right: 20,
      top: 40,
      bottom: 30
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
      ]
    },

    yAxis: {
      type: 'value'
    },

    series: [
      {
        data: [
          88,
          92,
          95,
          90,
          96,
          98
        ],
        type: 'line',
        smooth: true,
        areaStyle: {}
      }
    ]

  };

  departmentChart = {

    tooltip: {
      trigger: 'item'
    },

    legend: {
      bottom: 0
    },

    series: [
      {
        type: 'pie',
        radius: [
          '45%',
          '70%'
        ],

        data: [
          {
            value: 35,
            name: 'Engineering'
          },
          {
            value: 25,
            name: 'HR'
          },
          {
            value: 20,
            name: 'Sales'
          },
          {
            value: 20,
            name: 'Finance'
          }
        ]
      }
    ]

  };

}