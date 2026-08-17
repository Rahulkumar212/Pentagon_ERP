import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    FormsModule
} from '@angular/forms';


// =====================================================
// ORDER TYPES
// =====================================================

import {
    Order
} from '../../../../../core/models/finance/order-tracking.model';


// =====================================================
// COMPONENT
// =====================================================

@Component({

    selector:
        'app-order-card',

    standalone: true,

    imports: [
        CommonModule,
        FormsModule
    ],

    templateUrl:
        './order-card.component.html'

})
export class OrderCardComponent {


    // =====================================================
    // INPUT
    // =====================================================

    @Input({
        required: true
    })
    order!: Order;


    // =====================================================
    // OUTPUTS
    // =====================================================

    @Output()
    orderSelected = new EventEmitter<Order>();

    @Output()
    recordPayment = new EventEmitter<Order>();

    @Output()
    viewPaymentHistory = new EventEmitter<Order>();

    @Output()
    deleteOrder = new EventEmitter<Order>();


    // =====================================================
    // SELECT ORDER
    // =====================================================

    onSelectOrder(): void {

        this.orderSelected.emit(
            this.order
        );

    }


    // =====================================================
    // INITIALS
    // =====================================================

    getInitials(
        name: string
    ): string {

        if (!name) {

            return 'NA';

        }


        return name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map(
                (
                    word: string
                ): string => {

                    return word
                        .charAt(0)
                        .toUpperCase();

                }
            )
            .join('');

    }


    // =====================================================
    // TOTAL AMOUNT
    // =====================================================

    getTotalAmount(): number {

        if (
            !this.order?.items
        ) {

            return 0;

        }


        return this.order.items.reduce(

            (
                total: number,
                item
            ): number => {

                return total +
                    (
                        Number(
                            item.quantity || 0
                        ) *
                        Number(
                            item.unitPrice || 0
                        )
                    );

            },

            0

        );

    }


    // =====================================================
    // PAYMENT %
    // =====================================================

    getPaymentPercentage(): number {

        const total =
            this.getTotalAmount();


        const received =
            Number(
                this.order?.receivedAmount || 0
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
    // BALANCE
    // =====================================================

    getBalanceAmount(): number {

        const total =
            this.getTotalAmount();


        const received =
            Number(
                this.order?.receivedAmount || 0
            );


        return Math.max(
            0,
            total - received
        );

    }


    // =====================================================
    // FORMAT AMOUNT
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

        ).format(
            amount || 0
        );

    }


    // =====================================================
    // RECORD PAYMENT
    // =====================================================

    onRecordPayment(): void {

        this.recordPayment.emit(
            this.order
        );

    }


    // =====================================================
    // PAYMENT HISTORY
    // =====================================================

    onViewPaymentHistory(): void {

        this.viewPaymentHistory.emit(
            this.order
        );

    }


    // =====================================================
    // DELETE
    // =====================================================

    onDelete(): void {

        this.deleteOrder.emit(
            this.order
        );

    }

}