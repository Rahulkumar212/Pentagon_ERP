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

@Component({
  selector: 'app-scm-executive',
  standalone: true,
  imports: [CommonModule,ExecutiveLayoutComponent],
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

  createPurchaseOrder(): void {

    console.log('Create Purchase Order');

  }

}