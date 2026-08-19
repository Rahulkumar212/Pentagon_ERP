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
// BALANCE ITEM
// =====================================================

interface BalanceItem {

  title: string;

  amount: number;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-balance-sheet',

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
    './balance-sheet.component.html'

})
export class BalanceSheetComponent {


  // =====================================================
  // ASSETS
  // =====================================================

  readonly assets =
    signal<BalanceItem[]>([

      {

        title:
          'Cash & Bank',

        amount:
          4850000

      },

      {

        title:
          'Accounts Receivable',

        amount:
          1620000

      },

      {

        title:
          'Inventory',

        amount:
          2380000

      },

      {

        title:
          'Fixed Assets',

        amount:
          12450000

      }

    ]);


  // =====================================================
  // LIABILITIES
  // =====================================================

  readonly liabilities =
    signal<BalanceItem[]>([

      {

        title:
          'Accounts Payable',

        amount:
          1740000

      },

      {

        title:
          'Bank Loan',

        amount:
          5200000

      },

      {

        title:
          'GST Payable',

        amount:
          640000

      }

    ]);


  // =====================================================
  // EQUITY
  // =====================================================

  readonly equity =
    signal<BalanceItem[]>([

      {

        title:
          'Share Capital',

        amount:
          8000000

      },

      {

        title:
          'Retained Earnings',

        amount:
          5720000

      }

    ]);


  // =====================================================
  // TOTAL ASSETS
  // =====================================================

  readonly totalAssets = computed(() => {

    return this.assets().reduce(

      (
        total: number,
        item: BalanceItem
      ): number => {

        return total + item.amount;

      },

      0

    );

  });


  // =====================================================
  // TOTAL LIABILITIES
  // =====================================================

  readonly totalLiabilities = computed(() => {

    return this.liabilities().reduce(

      (
        total: number,
        item: BalanceItem
      ): number => {

        return total + item.amount;

      },

      0

    );

  });


  // =====================================================
  // TOTAL EQUITY
  // =====================================================

  readonly totalEquity = computed(() => {

    return this.equity().reduce(

      (
        total: number,
        item: BalanceItem
      ): number => {

        return total + item.amount;

      },

      0

    );

  });


  // =====================================================
  // LIABILITIES + EQUITY
  // =====================================================

  readonly liabilitiesAndEquity = computed(() => {

    return (

      this.totalLiabilities() +

      this.totalEquity()

    );

  });


  // =====================================================
  // BALANCE DIFFERENCE
  // =====================================================

  readonly balanceDifference = computed(() => {

    return (

      this.totalAssets() -

      this.liabilitiesAndEquity()

    );

  });


  // =====================================================
  // BALANCE STATUS
  // =====================================================

  readonly isBalanced = computed(() => {

    return (

      Math.abs(
        this.balanceDifference()
      ) < 0.01

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
  // BALANCE SHEET COMPARISON CHART
  // =====================================================

  get balanceComparisonChart(): EChartsOption {

    const assets =
      this.totalAssets();

    const liabilities =
      this.totalLiabilities();

    const equity =
      this.totalEquity();


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

              ${this.formatCurrency(
                Number(item.value ?? 0)
              )}

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

          'Total Assets',

          'Liabilities',

          'Equity'

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
                assets,

              itemStyle: {

                color:
                  '#16a34a'

              }

            },

            {

              value:
                liabilities,

              itemStyle: {

                color:
                  '#dc2626'

              }

            },

            {

              value:
                equity,

              itemStyle: {

                color:
                  '#2563eb'

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
  // ASSETS BREAKDOWN CHART
  // =====================================================

  get assetsBreakdownChart(): EChartsOption {

    const data =
      this.assets().map(

        (
          item: BalanceItem
        ) => ({

          name:
            item.title,

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
                  Number(params.value ?? 0)
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
            'Assets',

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
  // LIABILITIES + EQUITY CHART
  // =====================================================

  get liabilitiesEquityChart(): EChartsOption {

    const data = [

      ...this.liabilities().map(

        (
          item: BalanceItem
        ) => ({

          name:
            item.title,

          value:
            item.amount

        })

      ),

      ...this.equity().map(

        (
          item: BalanceItem
        ) => ({

          name:
            item.title,

          value:
            item.amount

        })

      )

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
                  Number(params.value ?? 0)
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
            'Liabilities & Equity',

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

}