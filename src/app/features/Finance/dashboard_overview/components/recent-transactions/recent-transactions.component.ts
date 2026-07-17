import {
    Component,
    Input
} from '@angular/core';

import {
    CommonModule,
    CurrencyPipe,
    DatePipe
} from '@angular/common';
import { RecentTransaction, RecentTransactions } from '../../utils/recent-transactions';


@Component({
    selector: 'app-recent-transactions',
    standalone: true,
    imports: [
        CommonModule,
        CurrencyPipe,
        DatePipe
    ],
    templateUrl:
        './recent-transactions.component.html'
})
export class RecentTransactionsComponent {
     @Input() transactions: any[] = [];

    recentTransactions: RecentTransaction[] = RecentTransactions;

}