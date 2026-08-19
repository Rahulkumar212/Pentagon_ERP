import {
  CommonModule
} from '@angular/common';

import {
  Component,
  signal
} from '@angular/core';

import {
  NgxEchartsDirective,
  provideEchartsCore
} from 'ngx-echarts';

import * as echarts from 'echarts/core';

import {
  BarChart,
  PieChart
} from 'echarts/charts';

import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';

import {
  CanvasRenderer
} from 'echarts/renderers';

import type {
  EChartsOption
} from 'echarts';


// =====================================================
// REGISTER ECHARTS MODULES
// =====================================================

echarts.use([

  BarChart,

  PieChart,

  GridComponent,

  TooltipComponent,

  LegendComponent,

  CanvasRenderer

]);


// =====================================================
// STATEMENT ITEM
// =====================================================

interface StatementItem {

  name: string;

  amount: number;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-statement-report',

  standalone:
    true,

  imports: [

    CommonModule,

    NgxEchartsDirective

  ],

  providers: [

    provideEchartsCore({

      echarts

    })

  ],

  templateUrl:
    './statement-report.component.html'

})
export class StatementReportComponent {


  // =====================================================
  // REVENUE
  // =====================================================

  readonly revenue =
    signal<StatementItem[]>([

      {

        name:
          'Product Sales & Software Licensing',

        amount:
          58135

      },

      {

        name:
          'Professional Consulting & Implementation',

        amount:
          24915

      }

    ]);


  // =====================================================
  // EXPENSES
  // =====================================================

  readonly expenses =
    signal<StatementItem[]>([

      {

        name:
          'Employee Compensation (Salaries & Benefits)',

        amount:
          745000

      },

      {

        name:
          'Cloud Hosting (AWS)',

        amount:
          2450

      },

      {

        name:
          'Office Space Lease Rentals',

        amount:
          12000

      },

      {

        name:
          'General Administrative Expenses',

        amount:
          3200

      },

      {

        name:
          'Depreciation & Amortization',

        amount:
          599000

      },

      {

        name:
          'Bank Charges',

        amount:
          9650

      },

      {

        name:
          'Marketing & Advertising',

        amount:
          98000

      }

    ]);


  // =====================================================
  // TOTAL REVENUE
  // =====================================================

  get totalRevenue(): number {

    return this.revenue().reduce(

      (
        total: number,
        item: StatementItem
      ): number => {

        return total + item.amount;

      },

      0

    );

  }


  // =====================================================
  // TOTAL EXPENSES
  // =====================================================

  get totalExpenses(): number {

    return this.expenses().reduce(

      (
        total: number,
        item: StatementItem
      ): number => {

        return total + item.amount;

      },

      0

    );

  }


  // =====================================================
  // NET PROFIT / LOSS
  // =====================================================

  get netProfit(): number {

    return (

      this.totalRevenue -

      this.totalExpenses

    );

  }


  // =====================================================
  // PROFIT MARGIN
  // =====================================================

  get profitMargin(): number {

    if (
      this.totalRevenue <= 0
    ) {

      return 0;

    }


    return (

      this.netProfit /

      this.totalRevenue

    ) * 100;

  }


  // =====================================================
  // FORMAT CURRENCY
  // =====================================================

  formatCurrency(
    value: number
  ): string {

    return new Intl.NumberFormat(

      'en-IN',

      {

        style:
          'currency',

        currency:
          'INR',

        maximumFractionDigits:
          0

      }

    ).format(

      Number(value) || 0

    );

  }


  // =====================================================
  // FORMAT COMPACT NUMBER
  // =====================================================

  private formatCompact(
    value: number
  ): string {

    const amount =
      Number(value) || 0;

    const absoluteValue =
      Math.abs(amount);


    // Crore

    if (
      absoluteValue >=
      10000000
    ) {

      return (

        '₹' +

        (
          amount /
          10000000
        ).toFixed(1) +

        'Cr'

      );

    }


    // Lakh

    if (
      absoluteValue >=
      100000
    ) {

      return (

        '₹' +

        (
          amount /
          100000
        ).toFixed(1) +

        'L'

      );

    }


    // Thousand

    if (
      absoluteValue >=
      1000
    ) {

      return (

        '₹' +

        (
          amount /
          1000
        ).toFixed(1) +

        'K'

      );

    }


    return (

      '₹' +

      amount.toFixed(0)

    );

  }


  // =====================================================
// REVENUE VS EXPENSE CHART
// =====================================================

get revenueExpenseChart(): EChartsOption {

  const revenue =
    this.totalRevenue;

  const expenses =
    this.totalExpenses;

  const profit =
    this.netProfit;


  return {

    tooltip: {

      trigger:
        'axis',

      axisPointer: {

        type:
          'shadow'

      },

      formatter: (params) => {

        // ===============================================
        // ECHARTS TOOLTIP PARAMETER
        // ===============================================

        const items =
          Array.isArray(params)
            ? params
            : [params];


        const item =
          items[0];


        if (!item) {

          return '';

        }


        // ===============================================
        // GET VALUE
        // ===============================================

        const value =
          Number(
            item.value ?? 0
          );


        // ===============================================
        // RETURN HTML
        // ===============================================

        return `

          <div
            style="
              font-weight:600;
              margin-bottom:6px;
            "
          >

            ${item.name}

          </div>

          <div>

            ${this.formatCurrency(value)}

          </div>

        `;

      }

    },


    grid: {

      left:
        55,

      right:
        25,

      top:
        40,

      bottom:
        45,

      containLabel:
        true

    },


    xAxis: {

      type:
        'category',

      data: [

        'Revenue',

        'Expenses',

        'Net Profit / Loss'

      ],

      axisTick: {

        show:
          false

      },

      axisLine: {

        lineStyle: {

          color:
            '#e5e7eb'

        }

      },

      axisLabel: {

        color:
          '#64748b',

        fontSize:
          11

      }

    },


    yAxis: {

      type:
        'value',

      axisLabel: {

        color:
          '#64748b',

        fontSize:
          10,

        formatter:
          (value: number) =>
            this.formatCompact(value)

      },

      splitLine: {

        lineStyle: {

          type:
            'dashed',

          color:
            '#e5e7eb'

        }

      }

    },


    series: [

      {

        type:
          'bar',

        barWidth:
          '42%',

        data: [

          {

            value:
              revenue,

            itemStyle: {

              color:
                '#059669'

            }

          },

          {

            value:
              expenses,

            itemStyle: {

              color:
                '#dc2626'

            }

          },

          {

            value:
              profit,

            itemStyle: {

              color:
                profit >= 0
                  ? '#16a34a'
                  : '#b91c1c'

            }

          }

        ],

        label: {

          show:
            true,

          position:
            'top',

          color:
            '#334155',

          fontWeight:
            600,

          formatter:
            (params) =>
              this.formatCompact(
                Number(
                  params.value ?? 0
                )
              )

        },

        itemStyle: {

          borderRadius: [

            6,

            6,

            0,

            0

          ]

        }

      }

    ]

  };

}


  // =====================================================
  // EXPENSE BREAKDOWN CHART
  // =====================================================

  get expenseBreakdownChart(): EChartsOption {

    const expenseData =
      this.expenses().map(

        (
          item: StatementItem
        ) => ({

          name:
            item.name,

          value:
            item.amount

        })

      );


    return {

      tooltip: {

        trigger:
          'item',

        formatter:
          (params: any) => {

            if (!params) {

              return '';

            }


            return `

              <div
                style="
                  font-weight:600;
                  margin-bottom:6px;
                "
              >
                ${params.name}
              </div>

              <div>

                ${this.formatCurrency(
                  Number(params.value)
                )}

                <span
                  style="
                    color:#64748b;
                    margin-left:4px;
                  "
                >
                  (${Number(
                    params.percent
                  ).toFixed(1)}%)
                </span>

              </div>

            `;

          }

      },


      legend: {

        orient:
          'vertical',

        left:
          '0%',

        top:
          'middle',

        type:
          'scroll',

        itemWidth:
          10,

        itemHeight:
          10,

        textStyle: {

          fontSize:
            11,

          color:
            '#475569'

        }

      },


      series: [

        {

          name:
            'Expenses',

          type:
            'pie',

          radius: [

            '52%',

            '75%'

          ],

          center: [

            '68%',

            '50%'

          ],

          avoidLabelOverlap:
            true,

          label: {

            show:
              false

          },

          labelLine: {

            show:
              false

          },

          itemStyle: {

            borderColor:
              '#ffffff',

            borderWidth:
              2

          },

          data:
            expenseData

        }

      ]

    };

  }


  // =====================================================
  // EXPORT EXCEL
  // =====================================================

  exportExcel(): void {

    console.log(
      'Export Excel'
    );

  }


  // =====================================================
  // EXPORT PDF
  // =====================================================

  exportPdf(): void {

    console.log(
      'Export PDF'
    );

  }

}