import { SidebarModule } from './sidebar.types';


export const HR_SIDEBAR: SidebarModule = {

  consoleTitle: 'HR Console',


  sections: [

    {
      heading: 'Main',

      items: [

        {
          label: 'Dashboard Overview',
          icon: '📊',
          route: '/hr-dashboard'
        }

      ]

    },


    {
      heading: 'Employee Lifecycle',

      items: [

        {
          label: 'Recruitment & Hiring',
          icon: '💼',
          route: '/recruitment'
        },


        {
          label: 'Employee Onboarding',
          icon: '📝',
          route: '/employee-onboarding'
        },


        {
          label: 'Employee Master',
          icon: '👥',
          route: '/employee-master'
        },


        {
          label: 'Exit Management',
          icon: '🚪',
          route: '/exit-management'
        }

      ]

    },


    {
      heading: 'Daily Operations',

      items:[

        {
          label:'Daily Operations',
          icon:'📅',
          route:'/daily-operations'
        }

      ]

    },


    {
      heading:'Intelligence',

      items:[

        {
          label:'Reports & Analytics',
          icon:'📈',
          route:'/reports-analytics'
        }

      ]

    }


  ]

};