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
// REGISTER ECHARTS
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
// TYPES
// =====================================================

interface TaxItem {

  title: string;

  amount: number;

}

interface FilingItem {

  name: string;

  dueDate: string;

  status: 'Filed' | 'Pending';

}


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-tax-gst',

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
    './tax-gst.component.html'

})
export class TaxGstComponent {


  // =====================================================
  // GST SUMMARY
  // =====================================================

  readonly gstSummary =
    signal<TaxItem[]>([

      {

        title:
          'GST Collected (Output GST)',

        amount:
          1865000

      },

      {

        title:
          'GST Paid (Input GST)',

        amount:
          1210000

      }

    ]);


  // =====================================================
  // TAX SUMMARY
  // =====================================================

  readonly taxSummary =
    signal<TaxItem[]>([

      {

        title:
          'TDS Deducted',

        amount:
          245000

      },

      {

        title:
          'Advance Tax Paid',

        amount:
          410000

      },

      {

        title:
          'Professional Tax',

        amount:
          85000

      }

    ]);


  // =====================================================
  // FILING STATUS
  // =====================================================

  readonly filingStatus =
    signal<FilingItem[]>([

      {

        name:
          'GSTR-1',

        dueDate:
          '10 Aug 2026',

        status:
          'Filed'

      },

      {

        name:
          'GSTR-3B',

        dueDate:
          '20 Aug 2026',

        status:
          'Pending'

      },

      {

        name:
          'TDS Return',

        dueDate:
          '31 Jul 2026',

        status:
          'Filed'

      }

    ]);


  // =====================================================
  // GST PAYABLE
  // =====================================================

  readonly gstPayable =
    computed(() => {

      const gst =
        this.gstSummary();

      return (

        (gst[0]?.amount ?? 0) -

        (gst[1]?.amount ?? 0)

      );

    });


  // =====================================================
  // TOTAL TAXES
  // =====================================================

  readonly totalTaxes =
    computed(() =>

      this.taxSummary()
        .reduce(

          (
            total,
            item
          ) =>
            total + item.amount,

          0

        )

    );


  // =====================================================
  // FILED COUNT
  // =====================================================

  readonly filedCount =
    computed(() =>

      this.filingStatus()
        .filter(
          item =>
            item.status === 'Filed'
        )
        .length

    );


  // =====================================================
  // PENDING COUNT
  // =====================================================

  readonly pendingCount =
    computed(() =>

      this.filingStatus()
        .filter(
          item =>
            item.status === 'Pending'
        )
        .length

    );


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
  // COMPACT CURRENCY
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
  // GST CHART
  // =====================================================

  get gstChart(): EChartsOption {

    const gst =
      this.gstSummary();

    const outputGst =
      gst[0]?.amount ?? 0;

    const inputGst =
      gst[1]?.amount ?? 0;

    const payable =
      this.gstPayable();


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
          20,

        top:
          35,

        bottom:
          40,

        containLabel:
          true

      },


      xAxis: {

        type:
          'category',

        data: [

          'Output GST',

          'Input GST',

          'GST Payable'

        ],

        axisTick: {

          show:
            false

        },

        axisLabel: {

          color:
            '#64748b',

          fontSize:
            10

        },

        axisLine: {

          lineStyle: {

            color:
              '#e5e7eb'

          }

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
            '45%',

          data: [

            {

              value:
                outputGst,

              itemStyle: {

                color:
                  '#059669'

              }

            },

            {

              value:
                inputGst,

              itemStyle: {

                color:
                  '#2563eb'

              }

            },

            {

              value:
                payable,

              itemStyle: {

                color:
                  payable > 0
                    ? '#dc2626'
                    : '#16a34a'

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
  // TAX CHART
  // =====================================================

  get taxChart(): EChartsOption {

    const data =
      this.taxSummary().map(

        item => ({

          name:
            item.title,

          value:
            item.amount

        })

      );


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
          20,

        top:
          35,

        bottom:
          50,

        containLabel:
          true

      },


      xAxis: {

        type:
          'category',

        data:
          data.map(
            item =>
              item.name
                .replace(
                  'Advance Tax Paid',
                  'Advance Tax'
                )
                .replace(
                  'Professional Tax',
                  'Professional Tax'
                )
          ),

        axisTick: {

          show:
            false

        },

        axisLabel: {

          color:
            '#64748b',

          fontSize:
            10,

          interval:
            0

        },

        axisLine: {

          lineStyle: {

            color:
              '#e5e7eb'

          }

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
            '45%',

          data:
            data.map(

              item => ({

                value:
                  item.value,

                itemStyle: {

                  color:
                    '#2563eb'

                }

              })

            ),

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
  // COMPLIANCE CHART
  // =====================================================

  get complianceChart(): EChartsOption {

    return {

      tooltip: {

        trigger:
          'item',

        formatter: (params) => {

          if (
            Array.isArray(params)
          ) {

            return '';

          }

          return `

            <div
              style="
                font-weight:600;
                margin-bottom:5px;
              "
            >

              ${params.name}

            </div>

            <div>

              ${params.value} Filing(s)
              (${params.percent}%)

            </div>

          `;

        }

      },


      legend: {

        bottom:
          0,

        left:
          'center',

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
            'Compliance',

          type:
            'pie',

          radius: [

            '50%',

            '72%'

          ],

          center: [

            '50%',

            '45%'

          ],

          avoidLabelOverlap:
            true,

          label: {

            show:
              true,

            position:
              'center',

            formatter: () =>
              `{value|${this.filedCount()} Filed}\n{pending|${this.pendingCount()} Pending}`,

            rich: {

              value: {

                fontSize:
                  18,

                fontWeight:
                  700,

                color:
                  '#16a34a'

              },

              pending: {

                fontSize:
                  11,

                color:
                  '#64748b',

                lineHeight:
                  20

              }

            }

          },

          labelLine: {

            show:
              false

          },

          itemStyle: {

            borderColor:
              '#ffffff',

            borderWidth:
              3

          },

          data: [

            {

              name:
                'Filed',

              value:
                this.filedCount(),

              itemStyle: {

                color:
                  '#16a34a'

              }

            },

            {

              name:
                'Pending',

              value:
                this.pendingCount(),

              itemStyle: {

                color:
                  '#dc2626'

              }

            }

          ]

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