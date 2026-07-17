import { FINANCE_SIDEBAR } from './finance-sidebar.config';
import { HR_SIDEBAR } from './hr-sidebar.config';

import {
  SidebarConfig
} from './sidebar.types';

/* ===========================================================
   EXECUTIVE
=========================================================== */

const EXECUTIVE = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'Main Console',

      items: [

        {
          label: 'Executive Center',
          icon: '⌘',
          route: '/sales-executive'
        }

      ]

    }

  ]

};

/* ===========================================================
   APPROVALS
=========================================================== */

const APPROVALS = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'Approvals',

      items: [

        {
          label: 'Approval Center',
          icon: '❖',
          route: '/approvals'
        }

      ]

    }

  ]

};

/* ===========================================================
   CRM
=========================================================== */

const CRM = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'CRM & Sales',

      items: [

        {
          label: 'Sales Hub',
          icon: '⌗',
          route: '/crm'
        },

        {
          label: 'Billing Orders',
          icon: '🧾',
          route: '/billing-orders'
        },

        {
          label: 'Visit Planner',
          icon: '🏫',
          route: '/institution-visit-planner'
        }

      ]

    }

  ]

};

/* ===========================================================
   ORDERS
=========================================================== */

const ORDERS = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'Orders',

      items: [

        {
          label: 'Orders Management',
          icon: '📦',
          route: '/orders'
        }

      ]

    }

  ]

};

/* ===========================================================
   TASKS
=========================================================== */

const TASKS = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'Tasks',

      items: [

        {
          label: 'Tasks & Collaboration',
          icon: '▤',
          route: '/task-collaboration'
        }

      ]

    }

  ]

};

/* ===========================================================
   SCM
=========================================================== */

const SCM = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'Logistics & SCM',

      items: [

        {
          label: 'Supply Chain SCM',
          icon: '⊞',
          route: '/supply-chain'
        }

      ]

    }

  ]

};

/* ===========================================================
   OPERATIONS
=========================================================== */

const OPERATIONS = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'Service & Operations',

      items: [

        {
          label: 'Operations Desk',
          icon: '⎔',
          route: '/operations'
        }

      ]

    }

  ]

};

/* ===========================================================
   GEM
=========================================================== */

const GEM = {

  consoleTitle: 'Main Console',

  sections: [

    {

      heading: 'GEM',

      items: [

        {
          label: 'GEM Tenders',
          icon: '⚙',
          route: '/gem'
        }

      ]

    }

  ]

};

/* ===========================================================
   EXPORT
=========================================================== */

export const SIDEBAR_CONFIG: SidebarConfig = {

  EXECUTIVE,

  APPROVALS,

  HR: HR_SIDEBAR,

  FINANCE: FINANCE_SIDEBAR,

  CRM,

  ORDERS,

  TASKS,

  SCM,

  OPERATIONS,

  GEM

};