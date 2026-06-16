import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ScmCard,
  ScmOrder
} from './models/scm.type';

import {
  SCM_CARDS,
  SCM_ORDERS
} from './utils/scm-data';
import { ExecutiveLayoutComponent } from '../../../layouts/executive-layout/executive-layout.component';
import { PurchaseOrderRequestComponent } from '../../../shared/components/purchase-order-request/purchase-order-request.component';

@Component({
  selector: 'app-scm-executive',
  standalone: true,
  imports: [CommonModule,ExecutiveLayoutComponent,PurchaseOrderRequestComponent],
  templateUrl: './scm-executive.component.html'
})
export class ScmExecutiveComponent
  implements OnInit {
 notifications: any[] = [];
  cards: ScmCard[] = [];

  orders: ScmOrder[] = [];

  ngOnInit(): void {

    this.cards = SCM_CARDS;

    this.orders = SCM_ORDERS;

  }

  confirmVendor(order: ScmOrder): void {

    console.log(order);

  }

  markDelivered(order: ScmOrder): void {

    console.log(order);

  }

 showPurchaseOrderModal = false;

createPurchaseOrder() {
  this.showPurchaseOrderModal = true;
}

closePurchaseOrderModal() {
  this.showPurchaseOrderModal = false;
}

  onPurchaseOrderSubmit(data: any) {

  console.log(data);

  this.showPurchaseOrderModal = false;
  }

}