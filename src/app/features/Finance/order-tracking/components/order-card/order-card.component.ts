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
// DELIVERY STATUS COLOR
// =====================================================

getDeliveryStageClass(): string {

    switch (this.order.deliveryStage) {

        case 'PENDING':

            return `
                border-amber-200
                bg-amber-50
                text-amber-700
                focus:border-amber-300
                focus:ring-amber-100
            `;

        case 'IN_PRODUCTION':

            return `
                border-blue-200
                bg-blue-50
                text-blue-700
                focus:border-blue-300
                focus:ring-blue-100
            `;

        case 'DISPATCHED':

            return `
                border-purple-200
                bg-purple-50
                text-purple-700
                focus:border-purple-300
                focus:ring-purple-100
            `;

        case 'DELIVERED':

            return `
                border-emerald-200
                bg-emerald-50
                text-emerald-700
                focus:border-emerald-300
                focus:ring-emerald-100
            `;

        case 'CANCELLED':

            return `
                border-red-200
                bg-red-50
                text-red-700
                focus:border-red-300
                focus:ring-red-100
            `;

        default:

            return `
                border-slate-200
                bg-slate-50
                text-slate-700
                focus:border-slate-300
                focus:ring-slate-100
            `;

    }

}


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