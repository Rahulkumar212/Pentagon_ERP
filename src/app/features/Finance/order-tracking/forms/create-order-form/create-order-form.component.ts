import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';


// =====================================================
// ORDER ITEM
// =====================================================

export interface OrderItem {

  description: string;

  quantity: number;

  unitPrice: number;

}


// =====================================================
// CREATE ORDER PAYLOAD
// =====================================================

export interface CreateOrderPayload {

  customerName: string;

  phone: string;

  email: string;

  purchaseOrderNumber: string;

  orderDate: string;

  deliveryTargetDate: string;

  items: OrderItem[];

  upfrontAdvancePayment: boolean;

  // ---------------------------------------------------
  // ADVANCE PAYMENT DETAILS
  // ---------------------------------------------------

  advanceAmount?: number;

  depositAccount?: string;

  paymentMode?: string;

  paymentReference?: string;

  termsAndNotes: string;

}


// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-create-order-form',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl:
    './create-order-form.component.html'
})
export class CreateOrderFormComponent {


  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  close =
    new EventEmitter<void>();


  @Output()
  save =
    new EventEmitter<CreateOrderPayload>();


  // =====================================================
  // CUSTOMER INFORMATION
  // =====================================================

  customerName = '';

  phone = '';

  email = '';


  // =====================================================
  // ORDER INFORMATION
  // =====================================================

  purchaseOrderNumber = '';

  orderDate = '';

  deliveryTargetDate = '';


  // =====================================================
  // ORDER ITEMS
  // =====================================================

  items: OrderItem[] = [

    {
      description: '',

      quantity: 1,

      unitPrice: 0
    }

  ];


  // =====================================================
  // PAYMENT
  // =====================================================

  upfrontAdvancePayment = false;


  // =====================================================
  // ADVANCE PAYMENT DETAILS
  // =====================================================

  advanceAmount = 0;

  depositAccount = '';

  paymentMode = '';

  paymentReference = '';


  // =====================================================
  // NOTES
  // =====================================================

  termsAndNotes = '';


  // =====================================================
  // STATE
  // =====================================================

  isSubmitting = false;


  // =====================================================
  // ADD ITEM
  // =====================================================

  addItem(): void {

    this.items.push({

      description: '',

      quantity: 1,

      unitPrice: 0

    });

  }


  // =====================================================
  // REMOVE ITEM
  // =====================================================

  removeItem(index: number): void {

    if (this.items.length <= 1) {

      return;

    }

    this.items.splice(index, 1);

  }


  // =====================================================
  // ITEM TOTAL
  // =====================================================

  getItemTotal(
    item: OrderItem
  ): number {

    return (
      Number(item.quantity || 0) *
      Number(item.unitPrice || 0)
    );

  }


  // =====================================================
  // TOTAL AMOUNT
  // =====================================================

  getTotalAmount(): number {

    return this.items.reduce(

      (
        total,
        item
      ) => {

        return (
          total +
          this.getItemTotal(item)
        );

      },

      0

    );

  }


  // =====================================================
  // REMAINING BALANCE
  // =====================================================

  getRemainingBalance(): number {

    const total =
      this.getTotalAmount();

    const advance =
      Number(this.advanceAmount || 0);

    return Math.max(
      total - advance,
      0
    );

  }


  // =====================================================
  // FORMAT CURRENCY
  // =====================================================

  formatAmount(
    amount: number
  ): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }
    ).format(amount);

  }


  // =====================================================
  // SUBMIT
  // =====================================================

  onSubmit(): void {

    // ---------------------------------------------------
    // REQUIRED FIELDS
    // ---------------------------------------------------

    if (
      !this.customerName.trim() ||
      !this.deliveryTargetDate
    ) {

      return;

    }


    // ---------------------------------------------------
    // ITEM VALIDATION
    // ---------------------------------------------------

    const invalidItem =
      this.items.some(

        item =>
          !item.description.trim() ||
          Number(item.quantity) <= 0 ||
          Number(item.unitPrice) < 0

      );


    if (invalidItem) {

      return;

    }


    // ---------------------------------------------------
    // ADVANCE PAYMENT VALIDATION
    // ---------------------------------------------------

    if (this.upfrontAdvancePayment) {

      if (
        Number(this.advanceAmount) <= 0 ||
        Number(this.advanceAmount) >
          this.getTotalAmount() ||
        !this.depositAccount ||
        !this.paymentMode ||
        !this.paymentReference.trim()
      ) {

        return;

      }

    }


    // ---------------------------------------------------
    // PAYLOAD
    // ---------------------------------------------------

    const payload: CreateOrderPayload = {

      customerName:
        this.customerName.trim(),

      phone:
        this.phone.trim(),

      email:
        this.email.trim(),

      purchaseOrderNumber:
        this.purchaseOrderNumber.trim(),

      orderDate:
        this.orderDate,

      deliveryTargetDate:
        this.deliveryTargetDate,

      items:
        this.items.map(
          item => ({

            description:
              item.description.trim(),

            quantity:
              Number(item.quantity),

            unitPrice:
              Number(item.unitPrice)

          })
        ),

      upfrontAdvancePayment:
        this.upfrontAdvancePayment,

      // -------------------------------------------------
      // ADVANCE PAYMENT
      // -------------------------------------------------

      ...(this.upfrontAdvancePayment && {

        advanceAmount:
          Number(this.advanceAmount),

        depositAccount:
          this.depositAccount,

        paymentMode:
          this.paymentMode,

        paymentReference:
          this.paymentReference.trim()

      }),

      termsAndNotes:
        this.termsAndNotes.trim()

    };


    // ---------------------------------------------------
    // DEBUG
    // ---------------------------------------------------

    console.log(
      'Create Order Payload:',
      payload
    );


    // ---------------------------------------------------
    // EMIT
    // ---------------------------------------------------

    this.isSubmitting = true;

    this.save.emit(payload);

    this.isSubmitting = false;

  }


  // =====================================================
  // CLOSE
  // =====================================================

  onClose(): void {

    this.close.emit();

  }

}