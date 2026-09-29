
import { SidebarModule } from './sidebar.types';

export const SALES_SIDEBAR: SidebarModule = {

    consoleTitle: 'Sales Console',

    sections: [

        {
            heading: 'Main',

            items: [
                {
                    label: 'Sales Executive',
                    icon: '💼',
                    route: '/sales-executive'
                }
            ]
        },

        {
            heading: 'Customer & CRM',

            items: [
                {
                    label: 'Sales Hub',
                    icon: '👥',
                    route: '/crm'
                }
            ]
        },

        { heading: 'Orders & Billing', 
            items: [
                { 
                    label: 'Orders',
                    icon: '🛒', 
                    route: '/sales-orders' 
                }, 

                { 
                    label: 'Billing Orders',
                    icon: '🧾', 
                    route: '/billing-orders' 
                }
            ] 
        },

        {
            heading: 'Visits',

            items: [
                {
                    label: 'Institution Visit Planner',
                    icon: '📅',
                    route: '/institution-visit-planner'
                }
            ]
        }

    ]

};

