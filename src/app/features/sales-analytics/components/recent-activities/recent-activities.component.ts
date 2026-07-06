import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import {
  RECENT_ACTIVITIES,
  RecentActivity
} from '../../utils/recent-activities.data';

@Component({
  selector: 'app-recent-activities',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  templateUrl: './recent-activities.component.html'
})
export class RecentActivitiesComponent {

  activities: RecentActivity[] = RECENT_ACTIVITIES;

  // 🔥 Convert timeline → category chart data
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
      type: 'value'
    },

    yAxis: {
      type: 'category',
      data: this.activities.map(a => a.title),
      axisLabel: {
        interval: 0,
        width: 150,
        overflow: 'truncate'
      }
    },

    series: [
      {
        name: 'Activity Score',
        type: 'bar',
        data: this.activities.map((_, i) => this.activities.length - i),

        itemStyle: {
          color: '#b91c1c'
        },

        barWidth: '40%'
      }
    ]
  };

}