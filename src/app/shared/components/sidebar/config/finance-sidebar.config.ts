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
          label:'Banking & Treasury',
          icon:'🏦',
          route:'/finance/banking'
        },


        {
          label:'Payroll Finance',
          icon:'👨‍💼',
          route:'/payroll-finance'
        },


        {
          label:'Budget & Assets',
          icon:'📑',
          route:'/finance/budget'
        },


        {
          label:'Expenses & Payments',
          icon:'💸',
          route:'/finance/expenses'
        },

         {
          label:'Reports & Statements',
          icon:'📈',
          route:'/finance/reports'
        },

        // {
        //   label:'Configuration',
        //   icon:'⚙️',
        //   route:'/finance/configuration'
        // }


      ]

    }


  ]

};