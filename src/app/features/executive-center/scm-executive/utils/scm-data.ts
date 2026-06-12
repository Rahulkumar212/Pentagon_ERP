import {
  ScmCard,
  ScmOrder
} from '../models/scm.type';

export const SCM_CARDS: ScmCard[] = [

  {
    title: 'ACTIVE BOOKED ORDERS',
    value: '2 orders',
    description: 'Downstream SCM processes',
    color: 'text-red-700'
  },

  {
    title: 'PROCUREMENTS PENDING',
    value: '0 items',
    description: 'Needs PO authorizations',
    color: 'text-orange-500'
  },

  {
    title: 'DISPATCH PENDING',
    value: '1 orders',
    description: 'Packaged stock verification',
    color: 'text-red-700'
  },

  {
    title: 'INSTALLATIONS PIPELINE',
    value: '1 sessions',
    description: 'Deploying engineers',
    color: 'text-green-600'
  }

];

export const SCM_ORDERS: ScmOrder[] = [

  {
    id: 1,
    orderNo: 'PTF-ORD-10002',
    customer: 'Life Insurance Corporation (LIC)',
    value: '₹2,10,00,000',
    logisticsLead: 'Supply Chain Exec',
    progress: 100,
    status: 'DELIVERED'
  },

  {
    id: 2,
    orderNo: 'PTF-ORD-10001',
    customer: 'National Informatics Centre (NIC)',
    value: '₹85,00,000',
    logisticsLead: 'Supply Chain Exec',
    progress: 50,
    status: 'WAREHOUSE RECEIVED'
  }

];