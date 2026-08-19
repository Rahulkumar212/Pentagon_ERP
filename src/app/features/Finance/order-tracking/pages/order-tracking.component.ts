import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
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
  PaymentHistoryComponent
} from '../components/payment-history/payment-history.component';

import {
  CreateOrderFormComponent
} from '../forms/create-order-form/create-order-form.component';

import {
  RecordPaymentFormComponent
} from '../forms/record-payment-form/record-payment-form.component';


// =====================================================
// ORDER MODELS
// =====================================================

import {
  Order,
  OrderItem,
  PaymentHistory,
  PaymentStatus,
  OrderFilterState,
  ViewMode,
  CreateOrderPayload,
  DeliveryStage
} from '../../../../core/models/finance/order-tracking.model';


// =====================================================
// SERVICE
// =====================================================

import {
  OrderTrackingService
} from '../../../../core/services/finance/order-tracking.service';


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

    PaymentHistoryComponent,

    CreateOrderFormComponent,

    RecordPaymentFormComponent

  ],

  templateUrl:
    './order-tracking.component.html'

})
export class OrderTrackingComponent
  implements OnInit {


  // =====================================================
  // OUTPUT
  // =====================================================

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
  // API STATE
  // =====================================================

  isLoadingOrders =
    false;

  isCreatingOrder =
    false;

    isDeletingOrder =
  false;

  ordersError:
    string | null = null;

  createOrderError:
    string | null = null;

    deleteOrderError:
  string | null = null;


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
    Order[] = [];


  // =====================================================
  // FILTERED ORDERS
  // =====================================================

  filteredOrders:
    Order[] = [];


  // =====================================================
  // PAYMENT HISTORY
  // =====================================================

  paymentHistory:
    PaymentHistory[] = [];


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private readonly orderTrackingService:
      OrderTrackingService,
      private readonly cdr: ChangeDetectorRef
  ) {}


  // =====================================================
  // ON INIT
  // =====================================================

  ngOnInit(): void {

    this.getOrders();

  }


  // =====================================================
  // GET ORDERS API
  // =====================================================

  getOrders(): void {

    // ===================================================
    // RESET API STATE
    // ===================================================

    this.isLoadingOrders =
      true;

    this.ordersError =
      null;


    // ===================================================
    // CALL API
    // ===================================================

    this.orderTrackingService
      .fetchOrders()
      .subscribe({

        // ===============================================
        // SUCCESS
        // ===============================================

        next: (
          response: any
        ) => {

          console.log(
            'Orders API response:',
            response
          );


          // =============================================
          // GET RAW DATA
          // =============================================

          const rawOrders =
            response?.data ?? [];


          // =============================================
          // NORMALIZE API RESPONSE
          // =============================================

          this.orders =
            rawOrders.map(
              (
                order: any
              ) =>
                this.normalizeOrder(
                  order
                )
            );


          // =============================================
          // APPLY FILTERS
          // =============================================

          this.applyFilters();


          // =============================================
          // RESET LOADING
          // =============================================

          this.isLoadingOrders =
            false;

            this.cdr.detectChanges();

        },


        // ===============================================
        // ERROR
        // ===============================================

        error: (
          error: any
        ) => {

          console.error(
            'Get orders failed:',
            error
          );


          this.isLoadingOrders =
            false;


          this.ordersError =
            error?.error?.message ||
            error?.message ||
            'Unable to load orders. Please try again.';


          this.orders =
            [];

          this.filteredOrders =
            [];

             this.cdr.detectChanges();

        }

      });

  }


  // =====================================================
  // NORMALIZE API ORDER
  // =====================================================

  private normalizeOrder(
    apiOrder: any
  ): Order {

    // ===================================================
    // ITEMS
    // ===================================================

    const items:
      OrderItem[] =
      (apiOrder?.items ?? []).map(
        (
          item: any
        ) => ({

          description:
            item?.description ?? '',

          quantity:
            Number(
              item?.quantity ?? 0
            ),

          unitPrice:
            Number(
              item?.unitPrice ?? 0
            )

        })
      );


    // ===================================================
    // TOTAL AMOUNT
    // ===================================================

    const totalAmount =
      items.reduce(

        (
          total: number,
          item: OrderItem
        ) => {

          return (
            total +
            (
              Number(item.quantity) *
              Number(item.unitPrice)
            )
          );

        },

        0

      );


    // ===================================================
    // ADVANCE / RECEIVED AMOUNT
    // ===================================================

    const receivedAmount =
      apiOrder?.upfrontAdvancePayment
        ? Number(
            apiOrder?.advanceAmount ?? 0
          )
        : 0;


    // ===================================================
    // BALANCE
    // ===================================================

    const balanceDue =
      Math.max(

        0,

        totalAmount -
        receivedAmount

      );


    // ===================================================
    // PAYMENT COUNT
    // =====================================================

    const paymentCount =
      receivedAmount > 0
        ? 1
        : 0;


    // ===================================================
    // DELIVERY STAGE
    // ===================================================

    const deliveryStage:
      DeliveryStage =
      apiOrder?.deliveryStage ??
      'PENDING';


    // ===================================================
    // RETURN FRONTEND ORDER
    // ===================================================

    return {

      id:
        Number(apiOrder?.id),

      orderNumber:
        apiOrder?.purchaseOrderNumber ??
        apiOrder?.orderNumber ??
        '',

      customerName:
        apiOrder?.customerName ??
        '',

      phone:
        apiOrder?.phone ??
        '',

      email:
        apiOrder?.email ??
        '',

      orderDate:
        apiOrder?.orderDate ??
        '',

      deliveryTargetDate:
        apiOrder?.deliveryTargetDate ??
        '',

      deliveryStage,

      items,

      totalAmount,

      receivedAmount,

      balanceDue,

      paymentCount,

      termsAndNotes:
        apiOrder?.termsAndNotes ??
        ''

    };

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

    const total =
      Number(
        order.totalAmount ?? 0
      );

    const received =
      Number(
        order.receivedAmount ?? 0
      );


    if (
      total <= 0
    ) {

      return 0;

    }


    return Math.min(

      100,

      Math.round(

        (
          received /
          total
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

    const total =
      Number(
        order.totalAmount ?? 0
      );

    const received =
      Number(
        order.receivedAmount ?? 0
      );


    return Math.max(

      0,

      total -
      received

    );

  }


  // =====================================================
  // OPEN CREATE ORDER
  // =====================================================

  openCreateOrder(): void {

    this.createOrderError =
      null;

    this.showCreateOrder =
      true;

  }


  // =====================================================
  // CLOSE CREATE ORDER
  // =====================================================

  closeCreateOrder(): void {

    if (
      this.isCreatingOrder
    ) {

      return;

    }


    this.showCreateOrder =
      false;

    this.createOrderError =
      null;

  }


  // =====================================================
  // CREATE ORDER API
  // =====================================================

  onOrderCreated(
    payload: CreateOrderPayload
  ): void {

    this.isCreatingOrder =
      true;

    this.createOrderError =
      null;


    this.orderTrackingService
      .createOrder(payload)
      .subscribe({

        next: (
          response: any
        ) => {

          // =============================================
          // RAW CREATED ORDER
          // =============================================

          const rawOrder =
            response?.data;


          if (!rawOrder) {

            this.createOrderError =
              'Order was created but response data is missing.';

            this.isCreatingOrder =
              false;

            return;

          }


          // =============================================
          // NORMALIZE CREATED ORDER
          // =============================================

          const createdOrder:
            Order =
            this.normalizeOrder(
              rawOrder
            );


          // =============================================
          // ADD ORDER
          // =============================================

          this.orders = [

            createdOrder,

            ...this.orders

          ];


          // =============================================
          // SELECT ORDER
          // =============================================

          this.selectedOrder =
            createdOrder;


          // =============================================
          // CLOSE MODAL
          // =============================================

          this.showCreateOrder =
            false;


          // =============================================
          // RESET STATE
          // =============================================

          this.isCreatingOrder =
            false;


          // =============================================
          // APPLY FILTERS
          // =============================================

          this.applyFilters();

        },


        error: (
          error: any
        ) => {

          console.error(
            'Create order failed:',
            error
          );


          this.isCreatingOrder =
            false;


          this.createOrderError =
            error?.error?.message ||
            error?.message ||
            'Unable to create order. Please try again.';

        }

      });

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

    this.paymentHistory = [

      payment,

      ...this.paymentHistory

    ];


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
          Number(
            order.receivedAmount ?? 0
          ) +
          Number(
            payment.amount ?? 0
          );


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


    this.showRecordPayment =
      false;


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

    this.selectedOrder =
      order;

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
  // RECORD PAYMENT
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

  // ===================================================
  // VALIDATE ORDER ID
  // ===================================================

  if (!order?.id) {

    console.error(
      'Cannot delete order: Order ID is missing.'
    );

    return;

  }


  // ===================================================
  // CONFIRM DELETE
  // ===================================================

  const confirmed =
    window.confirm(

      `Are you sure you want to delete ${order.orderNumber}?`

    );


  if (!confirmed) {

    return;

  }


  // ===================================================
  // RESET API STATE
  // ===================================================

  this.isDeletingOrder =
    true;

  this.deleteOrderError =
    null;


  // ===================================================
  // DELETE API
  // ===================================================

  this.orderTrackingService
    .deleteOrder(order.id)
    .subscribe({

      // ===============================================
      // SUCCESS
      // ===============================================

      next: (
        response: any
      ) => {

        console.log(
          'Order deleted successfully:',
          response
        );


        // =============================================
        // REMOVE FROM ORDERS
        // =============================================

        this.orders =
          this.orders.filter(

            (
              item: Order
            ) =>
              item.id !==
              order.id

          );


        // =============================================
        // CLEAR SELECTED ORDER
        // =============================================

        if (
          this.selectedOrder?.id ===
          order.id
        ) {

          this.selectedOrder =
            null;

        }


        // =============================================
        // APPLY FILTERS
        // =============================================

        this.applyFilters();


        // =============================================
        // RESET API STATE
        // =============================================

        this.isDeletingOrder =
          false;


        this.deleteOrderError =
          null;

      },


      // ===============================================
      // ERROR
      // ===============================================

      error: (
        error: any
      ) => {

        console.error(
          'Delete order failed:',
          error
        );


        this.isDeletingOrder =
          false;


        this.deleteOrderError =
          error?.error?.message ||
          error?.message ||
          'Unable to delete order. Please try again.';

      }

    });

}

}