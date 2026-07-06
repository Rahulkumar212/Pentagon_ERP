import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { EXECUTIVE_PERFORMANCE_DATA } from '../../utils/executive-performance.data';

@Component({
  selector: 'app-executive-performance',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  templateUrl: './executive-performance.component.html'
})
export class ExecutivePerformanceComponent {

  executives = EXECUTIVE_PERFORMANCE_DATA;

  // 🔥 Bar + Line Combo Chart
  chartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Performance', 'Conversion']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: this.executives.map(e => e.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Performance',
        type: 'bar',
        data: this.executives.map(e => e.performance),
        itemStyle: {
          color: '#b91c1c'
        },
        barWidth: '35%'
      },
      {
        name: 'Conversion',
        type: 'line',
        data: this.executives.map(e => e.conversion),
        itemStyle: {
          color: '#16a34a'
        },
        smooth: true
      }
    ]
  };

}