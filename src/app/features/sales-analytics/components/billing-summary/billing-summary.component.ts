import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';

import {
  BILLING_SUMMARY_DATA,
  BillingSummary
} from '../../utils/billing-summary.data';

@Component({
  selector: 'app-billing-summary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './billing-summary.component.html'
})
export class BillingSummaryComponent implements AfterViewInit {

  @ViewChild('billingChart', { static: true })
  chartRef!: ElementRef<HTMLDivElement>;

  billings: BillingSummary[] = BILLING_SUMMARY_DATA;

  ngAfterViewInit(): void {
    this.loadChart();
  }

  private loadChart(): void {

    const paid = this.billings.filter(x => x.status === 'Paid').length;

    const pending = this.billings.filter(x => x.status === 'Pending').length;

    const overdue = this.billings.filter(x => x.status === 'Overdue').length;

    const chart = echarts.init(this.chartRef.nativeElement);

    chart.setOption({

      tooltip: {
        trigger: 'item'
      },

      legend: {
        bottom: 0,
        icon: 'circle'
      },

      series: [

        {
          type: 'pie',

          radius: ['55%', '78%'],

          avoidLabelOverlap: true,

          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 3
          },

          label: {
            formatter: '{b}\n{c}'
          },

          data: [

            {
              value: paid,
              name: 'Paid',
              itemStyle: {
                color: '#16a34a'
              }
            },

            {
              value: pending,
              name: 'Pending',
              itemStyle: {
                color: '#f59e0b'
              }
            },

            {
              value: overdue,
              name: 'Overdue',
              itemStyle: {
                color: '#dc2626'
              }
            }

          ]

        }

      ]

    });

    window.addEventListener('resize', () => chart.resize());

  }

}