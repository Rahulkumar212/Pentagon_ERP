
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';

import {
  ORDER_OVERVIEW_DATA,
  OrderOverviewData,
} from '../../utils/order-overview.util';

@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsModule,
  ],
  templateUrl: './order-overview.component.html',
})
export class OrderOverviewComponent {

  readonly overviewData: OrderOverviewData[] =
    ORDER_OVERVIEW_DATA;

  readonly totalOrders = this.overviewData.reduce(
    (total, item) => total + item.orders,
    0
  );

  readonly totalShipments = this.overviewData.reduce(
    (total, item) => total + item.shipments,
    0
  );

  readonly averageOrders = Math.round(
    this.totalOrders / this.overviewData.length
  );

  readonly chartOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: '#111827',
      borderWidth: 0,
      textStyle: {
        color: '#ffffff',
      },
      formatter: (params: any) => {
        const items = Array.isArray(params) ? params : [params];

        let html = `
          <div style="font-weight:600;margin-bottom:6px;">
            ${items[0]?.axisValue ?? ''}
          </div>
        `;

        items.forEach((item: any) => {
          html += `
            <div style="display:flex;align-items:center;gap:8px;margin:4px 0;">
              <span
                style="
                  display:inline-block;
                  width:8px;
                  height:8px;
                  border-radius:50%;
                  background:${item.color};
                "
              ></span>

              <span>${item.seriesName}</span>

              <strong style="margin-left:auto;padding-left:12px;">
                ${item.value}
              </strong>
            </div>
          `;
        });

        return html;
      },
    },

    legend: {
      show: false,
    },

    grid: {
      top: 25,
      right: 15,
      bottom: 35,
      left: 45,
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      data: this.overviewData.map((item) => item.month),
      axisLine: {
        lineStyle: {
          color: '#e5e7eb',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#6b7280',
        fontSize: 12,
      },
    },

    yAxis: {
      type: 'value',
      min: 0,
      splitNumber: 4,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#9ca3af',
        fontSize: 11,
      },
      splitLine: {
        lineStyle: {
          color: '#f3f4f6',
          type: 'dashed',
        },
      },
    },

    series: [
      {
        name: 'Orders',
        type: 'bar',
        data: this.overviewData.map((item) => item.orders),
        barMaxWidth: 22,
        barGap: '25%',
        itemStyle: {
          color: '#ef4444',
          borderRadius: [5, 5, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: '#dc2626',
          },
        },
      },

      {
        name: 'Shipments',
        type: 'bar',
        data: this.overviewData.map((item) => item.shipments),
        barMaxWidth: 22,
        itemStyle: {
          color: '#d1d5db',
          borderRadius: [5, 5, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: '#9ca3af',
          },
        },
      },
    ],
  };
}

