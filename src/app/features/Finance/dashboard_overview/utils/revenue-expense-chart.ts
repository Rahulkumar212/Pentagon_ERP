import { EChartsOption } from 'echarts';

export const RevenueExpenseChart: EChartsOption = {

  tooltip: {
    trigger: 'axis'
  },

  legend: {
    top: 0
  },

  grid: {
    left: '4%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },

  xAxis: {

    type: 'category',

    data: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul'
    ]

  },

  yAxis: {
    type: 'value'
  },

  series: [

    {

      name: 'Revenue',

      type: 'line',

      smooth: true,

      data: [
        180000,
        220000,
        210000,
        260000,
        310000,
        340000,
        370000
      ]

    },

    {

      name: 'Expense',

      type: 'line',

      smooth: true,

      data: [
        120000,
        150000,
        145000,
        170000,
        195000,
        220000,
        240000
      ]

    }

  ]

};