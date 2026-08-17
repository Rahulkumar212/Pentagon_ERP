import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';


@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent {

  // =====================================================
  // SUMMARY DATA
  // =====================================================

  @Input()
  totalContractValue = 0;

  @Input()
  collectedRevenue = 0;

  @Input()
  outstandingBalance = 0;

  @Input()
  activeOrders = 0;

  @Input()
  totalOrders = 0;

  @Input()
  paidOrders = 0;

  @Input()
  partiallyPaidOrders = 0;

  @Input()
  unpaidOrders = 0;


  // =====================================================
  // CALCULATED VALUES
  // =====================================================

  get collectionRate(): number {

    if (this.totalContractValue <= 0) {
      return 0;
    }

    return Math.round(
      (this.collectedRevenue /
        this.totalContractValue) * 100
    );

  }


  get pendingCollectionRate(): number {

    if (this.totalContractValue <= 0) {
      return 0;
    }

    return Math.round(
      (this.outstandingBalance /
        this.totalContractValue) * 100
    );

  }

}