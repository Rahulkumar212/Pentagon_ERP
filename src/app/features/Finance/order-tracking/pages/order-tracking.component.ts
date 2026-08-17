import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';


// =====================================================
// CHILD COMPONENTS
// =====================================================

import {
  OrderTrackingHeaderComponent
} from '../components/order-tracking-header/order-tracking-header.component';

import {
  OrderSummaryComponent
} from '../components/order-summary/order-summary.component';

import {
  OrderFiltersComponent
} from '../components/order-filters/order-filters.component';

import {
  OrderListComponent
} from '../components/order-list/order-list.component';

import {
  OrderCardComponent
} from '../components/order-card/order-card.component';

import {
  PaymentProgressComponent
} from '../components/payment-progress/payment-progress.component';

import {
  PaymentHistoryComponent
} from '../components/payment-history/payment-history.component';

import {
  RecordPaymentComponent
} from '../components/record-payment/record-payment.component';

import {
  CreateOrderFormComponent,
  CreateOrderPayload
} from '../forms/create-order-form/create-order-form.component';


// =====================================================
// ORDER MODELS
// =====================================================

import {
  Order,
  OrderItem,
  PaymentHistory,
  PaymentStatus,
  OrderFilterState,
  ViewMode
} from '../../../../core/models/finance/order-tracking.model';


// =====================================================
// COMPONENT
// =====================================================

@Component({

  selector:
    'app-order-tracking',

  standalone:
    true,

  imports: [

    CommonModule,

    OrderTrackingHeaderComponent,

    OrderSummaryComponent,

    OrderFiltersComponent,

    OrderListComponent,

    OrderCardComponent,

    PaymentProgressComponent,

    PaymentHistoryComponent,

    RecordPaymentComponent,

    CreateOrderFormComponent

  ],

  templateUrl:
    './order-tracking.component.html'

})
export class OrderTrackingComponent {


    @Output()
orderSelected =
  new EventEmitter<Order>();

  // =====================================================
  // VIEW MODE
  // =====================================================

  viewMode:
    ViewMode = 'LIST';


  // =====================================================
  // MODAL STATE
  // =====================================================

  showCreateOrder =
    false;

  showRecordPayment =
    false;

  showPaymentHistory =
    false;


  // =====================================================
  // SELECTED ORDER
  // =====================================================

  selectedOrder:
    Order | null = null;


  // =====================================================
  // FILTER STATE
  // =====================================================

  currentFilter:
    OrderFilterState = {

      search:
        '',

      paymentStatus:
        'ALL',

      deliveryStage:
        'ALL',

      sortBy:
        'NEWEST',

      viewMode:
        'LIST'

    };


  // =====================================================
  // ORDERS
  // =====================================================

  orders:
    Order[] = [

    // ===================================================
    // INFOSYS
    // ===================================================

    {

      id:
        1,

      orderNumber:
        'PO-93112',

      customerName:
        'Infosys BPM Limited',

      phone:
        '+91 98450 77123',

      email:
        'ap.invoices@infosys.com',

      orderDate:
        '2026-07-18',

      deliveryTargetDate:
        '2026-08-20',

      deliveryStage:
        'DISPATCHED',

      items: [

        {

          description:
            'Financial Reconciliation Microservices Cloud',

          quantity:
            4,

          unitPrice:
            110000

        },

        {

          description:
            'Security Hardening & Penetration Testing',

          quantity:
            1,

          unitPrice:
            80000

        }

      ],

      totalAmount:
        520000,

      receivedAmount:
        260000,

      balanceDue:
        260000,

      paymentCount:
        1,

      termsAndNotes:
        'Goods & Licenses dispatched. Final ₹260,000 invoice will mature in 15 days.'

    },


    // ===================================================
    // ZEPTO
    // ===================================================

    {

      id:
        2,

      orderNumber:
        'PO-92450',

      customerName:
        'Zepto Quick Delivery Corp',

      phone:
        '+91 99304 11284',

      email:
        'ops.vendor@zeptonow.com',

      orderDate:
        '2026-07-16',

      deliveryTargetDate:
        '2026-08-10',

      deliveryStage:
        'IN_PRODUCTION',

      items: [

        {

          description:
            'Dark Store Dispatch Optimization Algorithm',

          quantity:
            2,

          unitPrice:
            90000

        },

        {

          description:
            'Real-time Route Dispatch API Gateway',

          quantity:
            1,

          unitPrice:
            60000

        }

      ],

      totalAmount:
        240000,

      receivedAmount:
        80000,

      balanceDue:
        160000,

      paymentCount:
        1,

      termsAndNotes:
        'Second installment of ₹80,000 due upon beta testing release.'

    },


    // ===================================================
    // MAHINDRA
    // ===================================================

    {

      id:
        3,

      orderNumber:
        'PO-91045',

      customerName:
        'Mahindra Logistics Hub',

      phone:
        '+91 98765 12345',

      email:
        'procurement@mahindralogistics.com',

      orderDate:
        '2026-07-15',

      deliveryTargetDate:
        '2026-08-15',

      deliveryStage:
        'PENDING',

      items: [

        {

          description:
            'Logistics Management Platform',

          quantity:
            1,

          unitPrice:
            95000

        }

      ],

      totalAmount:
        95000,

      receivedAmount:
        0,

      balanceDue:
        95000,

      paymentCount:
        0,

      termsAndNotes:
        'Payment will be initiated after project kickoff.'

    },


    // ===================================================
    // RELIANCE
    // ===================================================

    {

      id:
        4,

      orderNumber:
        'PO-90214',

      customerName:
        'Reliance Retail Ventures',

      phone:
        '+91 99887 77665',

      email:
        'purchase@relianceretail.com',

      orderDate:
        '2026-07-12',

      deliveryTargetDate:
        '2026-07-28',

      deliveryStage:
        'DELIVERED',

      items: [

        {

          description:
            'Retail Inventory Management System',

          quantity:
            1,

          unitPrice:
            350000

        }

      ],

      totalAmount:
        350000,

      receivedAmount:
        350000,

      balanceDue:
        0,

      paymentCount:
        2,

      termsAndNotes:
        'Order fully delivered and payment received.'

    },


    // ===================================================
    // TATA
    // ===================================================

    {

      id:
        5,

      orderNumber:
        'PO-88391',

      customerName:
        'Tata Consultancy & Systems',

      phone:
        '+91 99887 66554',

      email:
        'procurement@tcs.com',

      orderDate:
        '2026-07-10',

      deliveryTargetDate:
        '2026-08-05',

      deliveryStage:
        'IN_PRODUCTION',

      items: [

        {

          description:
            'Enterprise Application Development',

          quantity:
            1,

          unitPrice:
            180000

        }

      ],

      totalAmount:
        180000,

      receivedAmount:
        120000,

      balanceDue:
        60000,

      paymentCount:
        1,

      termsAndNotes:
        'Remaining payment due after production release.'

    }

  ];


  // =====================================================
  // FILTERED ORDERS
  // =====================================================

  filteredOrders:
    Order[] = [];


  // =====================================================
  // PAYMENT HISTORY
  // =====================================================

  paymentHistory:
    PaymentHistory[] = [

    {

      id:
        1,

      orderId:
        1,

      paymentDate:
        '17 Aug 2026',

      amount:
        25000,

      paymentMode:
        'Bank Transfer',

      transactionReference:
        'TXN-100245',

      status:
        'SUCCESS'

    },

    {

      id:
        2,

      orderId:
        1,

      paymentDate:
        '10 Aug 2026',

      amount:
        15000,

      paymentMode:
        'UPI',

      transactionReference:
        'UPI-984532',

      status:
        'SUCCESS'

    }

  ];


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor() {

    this.applyFilters();

  }


  // =====================================================
  // VIEW MODE CHANGE
  // =====================================================

  onViewModeChange(
    mode: ViewMode
  ): void {

    this.viewMode =
      mode;

    this.currentFilter = {

      ...this.currentFilter,

      viewMode:
        mode

    };

  }


  // =====================================================
  // FILTER CHANGE
  // =====================================================

  onFilterChange(
    filter: OrderFilterState
  ): void {

    this.currentFilter = {

      ...filter

    };

    this.viewMode =
      filter.viewMode;

    this.applyFilters();

  }


  // =====================================================
  // APPLY FILTERS
  // =====================================================

  private applyFilters(): void {

    let result:
      Order[] = [
        ...this.orders
      ];


    // ===================================================
    // SEARCH
    // ===================================================

    const search =
      this.currentFilter.search
        .trim()
        .toLowerCase();


    if (search) {

      result =
        result.filter(
          (
            order: Order
          ) => {

            const itemText =
              order.items
                .map(
                  (
                    item: OrderItem
                  ) =>
                    item.description
                )
                .join(' ');


            const searchableText = [

              order.orderNumber,

              order.customerName,

              order.phone,

              order.email,

              itemText

            ]
              .join(' ')
              .toLowerCase();


            return searchableText.includes(
              search
            );

          }
        );

    }


    // ===================================================
    // PAYMENT STATUS
    // ===================================================

    switch (
      this.currentFilter.paymentStatus
    ) {

      case 'PAID':

        result =
          result.filter(
            (
              order: Order
            ) =>
              this.getPaymentPercentage(
                order
              ) >= 100
          );

        break;


      case 'PARTIALLY_PAID':

        result =
          result.filter(
            (
              order: Order
            ) => {

              const percentage =
                this.getPaymentPercentage(
                  order
                );

              return (
                percentage > 0 &&
                percentage < 100
              );

            }
          );

        break;


      case 'UNPAID':

        result =
          result.filter(
            (
              order: Order
            ) =>
              this.getPaymentPercentage(
                order
              ) === 0
          );

        break;


      case 'ALL':

      default:

        break;

    }


    // ===================================================
    // DELIVERY STAGE
    // ===================================================

    if (
      this.currentFilter.deliveryStage !==
      'ALL'
    ) {

      result =
        result.filter(
          (
            order: Order
          ) =>
            order.deliveryStage ===
            this.currentFilter.deliveryStage
        );

    }


    // ===================================================
    // SORT
    // ===================================================

    result.sort(
      (
        first: Order,
        second: Order
      ) => {

        switch (
          this.currentFilter.sortBy
        ) {

          case 'NEWEST':

            return (
              this.getDateValue(
                second.orderDate
              ) -
              this.getDateValue(
                first.orderDate
              )
            );


          case 'OLDEST':

            return (
              this.getDateValue(
                first.orderDate
              ) -
              this.getDateValue(
                second.orderDate
              )
            );


          case 'AMOUNT_HIGH':

            return (
              second.totalAmount -
              first.totalAmount
            );


          case 'AMOUNT_LOW':

            return (
              first.totalAmount -
              second.totalAmount
            );


          default:

            return 0;

        }

      }
    );


    // ===================================================
    // UPDATE FILTERED ORDERS
    // ===================================================

    this.filteredOrders =
      result;

  }


  // =====================================================
  // GET DATE VALUE
  // =====================================================

  private getDateValue(
    date: string
  ): number {

    return new Date(
      date
    ).getTime();

  }


  // =====================================================
  // GET PAYMENT PERCENTAGE
  // =====================================================

  getPaymentPercentage(
    order: Order
  ): number {

    if (
      order.totalAmount <= 0
    ) {

      return 0;

    }


    return Math.min(

      100,

      Math.round(

        (
          order.receivedAmount /
          order.totalAmount
        ) * 100

      )

    );

  }


  // =====================================================
  // GET PAYMENT STATUS
  // =====================================================

  getPaymentStatus(
    order: Order
  ): Exclude<
    PaymentStatus,
    'ALL'
  > {

    const percentage =
      this.getPaymentPercentage(
        order
      );


    if (
      percentage >= 100
    ) {

      return 'PAID';

    }


    if (
      percentage <= 0
    ) {

      return 'UNPAID';

    }


    return 'PARTIALLY_PAID';

  }


  // =====================================================
  // GET BALANCE
  // =====================================================

  getBalanceDue(
    order: Order
  ): number {

    return Math.max(

      0,

      order.totalAmount -
      order.receivedAmount

    );

  }


  // =====================================================
  // CREATE ORDER
  // =====================================================

  openCreateOrder(): void {

    this.showCreateOrder =
      true;

  }


  // =====================================================
  // CLOSE CREATE ORDER
  // =====================================================

  closeCreateOrder(): void {

    this.showCreateOrder =
      false;

  }


  // =====================================================
  // ORDER CREATED
  // =====================================================

  onOrderCreated(
    payload: CreateOrderPayload
  ): void {

    // ===================================================
    // CALCULATE TOTAL
    // ===================================================

    const totalAmount =
      payload.items.reduce(

        (
          total: number,
          item: OrderItem
        ) => {

          return (
            total +
            (
              Number(item.quantity || 0) *
              Number(item.unitPrice || 0)
            )
          );

        },

        0

      );


    // ===================================================
    // INITIAL RECEIVED AMOUNT
    // ===================================================

    const receivedAmount =
      payload.upfrontAdvancePayment
        ? Number(
            payload.advanceAmount || 0
          )
        : 0;


    // ===================================================
    // CREATE NEW ORDER
    // ===================================================

    const newOrder:
      Order = {

      id:
        this.getNextOrderId(),

      orderNumber:
        payload.purchaseOrderNumber.trim() ||
        this.generateOrderNumber(),

      customerName:
        payload.customerName.trim(),

      phone:
        payload.phone.trim(),

      email:
        payload.email.trim(),

      orderDate:
        payload.orderDate,

      deliveryTargetDate:
        payload.deliveryTargetDate,

      deliveryStage:
        'PENDING',

      items:
        payload.items.map(
          (
            item: OrderItem
          ) => ({

            description:
              item.description.trim(),

            quantity:
              Number(item.quantity),

            unitPrice:
              Number(item.unitPrice)

          })
        ),

      totalAmount:
        totalAmount,

      receivedAmount:
        receivedAmount,

      balanceDue:
        Math.max(
          0,
          totalAmount -
          receivedAmount
        ),

      paymentCount:
        receivedAmount > 0
          ? 1
          : 0,

      termsAndNotes:
        payload.termsAndNotes.trim()

    };


    // ===================================================
    // ADD ORDER
    // ===================================================

    this.orders = [

      newOrder,

      ...this.orders

    ];


    // ===================================================
    // SELECT NEW ORDER
    // ===================================================

    this.selectedOrder =
      newOrder;


    // ===================================================
    // CLOSE FORM
    // ===================================================

    this.showCreateOrder =
      false;


    // ===================================================
    // REFRESH FILTERED DATA
    // ===================================================

    this.applyFilters();

  }


  // =====================================================
  // GET NEXT ORDER ID
  // =====================================================

  private getNextOrderId(): number {

    if (
      this.orders.length === 0
    ) {

      return 1;

    }


    return (
      Math.max(
        ...this.orders.map(
          (
            order: Order
          ) =>
            order.id
        )
      ) + 1
    );

  }


  // =====================================================
  // GENERATE ORDER NUMBER
  // =====================================================

  private generateOrderNumber(): string {

    return `PO-${Date.now()
      .toString()
      .slice(-5)}`;

  }


  // =====================================================
  // OPEN RECORD PAYMENT
  // =====================================================

  openRecordPayment(
    order?: Order
  ): void {

    if (order) {

      this.selectedOrder =
        order;

    }


    this.showRecordPayment =
      true;

  }


  // =====================================================
  // CLOSE RECORD PAYMENT
  // =====================================================

  closeRecordPayment(): void {

    this.showRecordPayment =
      false;

  }


  // =====================================================
  // PAYMENT SAVED
  // =====================================================

  onPaymentSaved(
    payment: PaymentHistory
  ): void {

    // ===================================================
    // ADD PAYMENT HISTORY
    // ===================================================

    this.paymentHistory = [

      payment,

      ...this.paymentHistory

    ];


    // ===================================================
    // UPDATE ORDER
    // ===================================================

    if (
      this.selectedOrder
    ) {

      const orderIndex =
        this.orders.findIndex(

          (
            order: Order
          ) =>
            order.id ===
            this.selectedOrder?.id

        );


      if (
        orderIndex !== -1
      ) {

        const order =
          this.orders[orderIndex];


        const newReceivedAmount =
          order.receivedAmount +
          Number(payment.amount);


        const updatedOrder:
          Order = {

          ...order,

          receivedAmount:
            newReceivedAmount,

          balanceDue:
            Math.max(

              0,

              order.totalAmount -
              newReceivedAmount

            ),

          paymentCount:
            (order.paymentCount || 0) + 1

        };


        this.orders =
          this.orders.map(

            (
              item: Order,
              index: number
            ) =>
              index === orderIndex
                ? updatedOrder
                : item

          );


        this.selectedOrder =
          updatedOrder;

      }

    }


    // ===================================================
    // CLOSE MODAL
    // ===================================================

    this.showRecordPayment =
      false;


    // ===================================================
    // REFRESH FILTER
    // ===================================================

    this.applyFilters();

  }


  // =====================================================
  // OPEN PAYMENT HISTORY
  // =====================================================

  onViewPaymentHistory(
    order: Order
  ): void {

    this.selectedOrder =
      order;

    this.showPaymentHistory =
      true;

  }


  // =====================================================
  // CLOSE PAYMENT HISTORY
  // =====================================================

  closePaymentHistory(): void {

    this.showPaymentHistory =
      false;

  }


  // =====================================================
  // ORDER SELECTED
  // =====================================================

  onOrderSelected(
  order: Order
): void {

  this.orderSelected.emit(
    order
  );

}


  // =====================================================
  // PAY ORDER
  // =====================================================

  onPayOrder(
    order: Order
  ): void {

    this.selectedOrder =
      order;

    this.openRecordPayment(
      order
    );

  }


  // =====================================================
  // VIEW DETAILS
  // =====================================================

  onViewDetails(
    order: Order
  ): void {

    this.selectedOrder =
      order;

  }


  // =====================================================
  // RECORD PAYMENT FROM CARD
  // =====================================================

  onRecordPayment(
    order: Order
  ): void {

    this.openRecordPayment(
      order
    );

  }


  // =====================================================
  // DELETE ORDER
  // =====================================================

  onDeleteOrder(
    order: Order
  ): void {

    const confirmed =
      window.confirm(

        `Are you sure you want to delete ${order.orderNumber}?`

      );


    if (!confirmed) {

      return;

    }


    this.orders =
      this.orders.filter(

        (
          item: Order
        ) =>
          item.id !==
          order.id

      );


    if (
      this.selectedOrder?.id ===
      order.id
    ) {

      this.selectedOrder =
        null;

    }


    this.applyFilters();

  }

}