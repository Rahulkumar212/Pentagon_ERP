import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-sales-funnel',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './sales-funnel.component.html'
})
export class SalesFunnelComponent {

  // 🔥 Pipeline data (same values but used as trend)
  stages = [
    { stage: 'Leads', value: 1200 },
    { stage: 'Qualified', value: 850 },
    { stage: 'Proposal', value: 560 },
    { stage: 'Negotiation', value: 320 },
    { stage: 'Closed', value: 180 }
  ];

  // 🔥 Conversion Drop-off Line Chart
  chartOption = {
    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      data: this.stages.map(s => s.stage),
      axisLine: {
        lineStyle: { color: '#ddd' }
      }
    },

    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: { color: '#ddd' }
      }
    },

    series: [
      {
        name: 'Opportunities',
        type: 'line',
        data: this.stages.map(s => s.value),

        smooth: true,

        symbol: 'circle',
        symbolSize: 8,

        lineStyle: {
          width: 3,
          color: '#b91c1c'
        },

        itemStyle: {
          color: '#b91c1c'
        },

        areaStyle: {
          color: 'rgba(185, 28, 28, 0.08)'
        }
      }
    ]
  };

}