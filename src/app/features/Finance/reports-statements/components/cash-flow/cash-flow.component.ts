
import { CommonModule } from '@angular/common';

import {
  Component,
  computed,
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
// CASH FLOW ITEM
// =====================================================

interface CashFlowItem {

  title: string;

  amount: number;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-cash-flow',

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
    './cash-flow.component.html'

})
export class CashFlowComponent {


  // =====================================================
  // OPERATING ACTIVITIES
  // =====================================================

  readonly operatingActivities =
    signal<CashFlowItem[]>([

      {

        title:
          'Cash Received from Customers',

        amount:
          1850000

      },

      {

        title:
          'Employee & Salary Payments',

        amount:
          -745000

      },

      {

        title:
          'Cloud & Infrastructure',

        amount:
          -125000

      },

      {

        title:
          'Office & Administrative',

        amount:
          -85000

      },

      {

        title:
          'Taxes & Other Payments',

        amount:
          -95000

      }

    ]);


  // =====================================================
  // INVESTING ACTIVITIES
  // =====================================================

  readonly investingActivities =
    signal<CashFlowItem[]>([

      {

        title:
          'Purchase of Fixed Assets',

        amount:
          -680000

      },

      {

        title:
          'Purchase of Equipment',

        amount:
          -125000

      },

      {

        title:
          'Sale of Investments',

        amount:
          85000

      }

    ]);


  // =====================================================
  // FINANCING ACTIVITIES
  // =====================================================

  readonly financingActivities =
    signal<CashFlowItem[]>([

      {

        title:
          'Bank Loan Received',

        amount:
          1200000

      },

      {

        title:
          'Loan Repayment',

        amount:
          -350000

      },

      {

        title:
          'Dividend Paid',

        amount:
          -125000

      }

    ]);


  // =====================================================
  // OPENING CASH
  // =====================================================

  readonly openingCash =
    signal<number>(2450000);


  // =====================================================
  // OPERATING TOTAL
  // =====================================================

  readonly operatingTotal =
    computed(() => {

      return this.operatingActivities().reduce(

        (
          total: number,
          item: CashFlowItem
        ): number => {

          return total + item.amount;

        },

        0

      );

    });


  // =====================================================
  // INVESTING TOTAL
  // =====================================================

  readonly investingTotal =
    computed(() => {

      return this.investingActivities().reduce(

        (
          total: number,
          item: CashFlowItem
        ): number => {

          return total + item.amount;

        },

        0

      );

    });


  // =====================================================
  // FINANCING TOTAL
  // =====================================================

  readonly financingTotal =
    computed(() => {

      return this.financingActivities().reduce(

        (
          total: number,
          item: CashFlowItem
        ): number => {

          return total + item.amount;

        },

        0

      );

    });


  // =====================================================
  // NET CASH FLOW
  // =====================================================

  readonly netCashFlow =
    computed(() => {

      return (

        this.operatingTotal() +

        this.investingTotal() +

        this.financingTotal()

      );

    });


  // =====================================================
  // CLOSING CASH
  // =====================================================

  readonly closingCash =
    computed(() => {

      return (

        this.openingCash() +

        this.netCashFlow()

      );

    });


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
  // FORMAT COMPACT
  // =====================================================

  private formatCompact(
    value: number
  ): string {

    const amount =
      Number(value) || 0;

    const absoluteValue =
      Math.abs(amount);


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
  // CASH FLOW ACTIVITY CHART
  // =====================================================

  get cashFlowActivityChart(): EChartsOption {

    const operating =
      this.operatingTotal();

    const investing =
      this.investingTotal();

    const financing =
      this.financingTotal();


    return {

      tooltip: {

        trigger:
          'axis',

        axisPointer: {

          type:
            'shadow'

        },

        formatter: (params) => {

          const items =
            Array.isArray(params)
              ? params
              : [params];

          const item =
            items[0];

          if (!item) {

            return '';

          }

          const value =
            Number(
              item.value ?? 0
            );


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
          35,

        bottom:
          45,

        containLabel:
          true

      },


      xAxis: {

        type:
          'category',

        data: [

          'Operating',

          'Investing',

          'Financing'

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
                operating,

              itemStyle: {

                color:
                  operating >= 0
                    ? '#16a34a'
                    : '#dc2626'

              }

            },

            {

              value:
                investing,

              itemStyle: {

                color:
                  investing >= 0
                    ? '#d97706'
                    : '#dc2626'

              }

            },

            {

              value:
                financing,

              itemStyle: {

                color:
                  financing >= 0
                    ? '#2563eb'
                    : '#dc2626'

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
  // CASH FLOW COMPOSITION CHART
  // =====================================================

  get cashFlowCompositionChart(): EChartsOption {

    const data = [

      {

        name:
          'Operating',

        value:
          Math.abs(
            this.operatingTotal()
          )

      },

      {

        name:
          'Investing',

        value:
          Math.abs(
            this.investingTotal()
          )

      },

      {

        name:
          'Financing',

        value:
          Math.abs(
            this.financingTotal()
          )

      }

    ];


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
                  Number(
                    params.value ?? 0
                  )
                )}

                <span
                  style="
                    color:#64748b;
                    margin-left:4px;
                  "
                >

                  (${Number(
                    params.percent ?? 0
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
            'Cash Flow',

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

          data

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