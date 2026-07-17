import { EChartsOption } from 'echarts';

export const CashflowChart: EChartsOption = {

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

      name: 'Cash In',

      type: 'bar',

      data: [
        180000,
        210000,
        195000,
        250000,
        290000,
        310000,
        335000
      ],

      barWidth: 18

    },

    {

      name: 'Cash Out',

      type: 'bar',

      data: [
        120000,
        145000,
        135000,
        160000,
        180000,
        205000,
        220000
      ],

      barWidth: 18

    }

  ]

};