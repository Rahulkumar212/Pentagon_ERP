import { SidebarModule } from './sidebar.types';


export const FINANCE_SIDEBAR: SidebarModule = {


  consoleTitle:'Finance Console',


  sections:[


    {

      heading:'Main',

      items:[

        {
          label:'Dashboard Overview',
          icon:'📊',
          route:'/finance/dashboard'
        }

      ]

    },


    {

      heading:'Finance',

      items:[


        {
          label:'Accounting & Ledger',
          icon:'📒',
          route:'/finance/accounting'
        },


        // {
        //   label:'Payments',
        //   icon:'💳',
        //   route:'/finance/payments'
        // },


        {
          label:'Receivables & Billing',
          icon:'💰',
          route:'/finance/receivables'
        },


        {
          label:'Payables & Bills',
          icon:'🧾',
          route:'/finance/payables'
        },


        {
          label:'Banking',
          icon:'🏦',
          route:'/finance/banking'
        },


        {
          label:'Payroll',
          icon:'👨‍💼',
          route:'/finance/payroll'
        },


        {
          label:'Budget',
          icon:'📑',
          route:'/finance/budget'
        },


        {
          label:'Reports',
          icon:'📈',
          route:'/finance/reports'
        },


        {
          label:'Expenses',
          icon:'💸',
          route:'/finance/expenses'
        },


        {
          label:'Assets',
          icon:'🏢',
          route:'/finance/assets'
        },


        {
          label:'Taxation',
          icon:'🧮',
          route:'/finance/taxation'
        },


        {
          label:'Configuration',
          icon:'⚙️',
          route:'/finance/configuration'
        }


      ]

    }


  ]

};