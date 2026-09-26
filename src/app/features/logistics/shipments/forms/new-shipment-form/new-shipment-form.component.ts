
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface NewShipmentFormData {
  orderNumber: string;
  customerName: string;
  source: 'SALES' | 'GEM' | 'DIRECTOR';
  carrier: string;
  trackingNumber: string;
  deliveryAddress: string;
  expectedDeliveryDate: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  itemName: string;
  quantity: number;
  notes: string;
}

@Component({
  selector: 'app-new-shipment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './new-shipment-form.component.html',
})
export class NewShipmentFormComponent {
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  @Output() submitShipment =
    new EventEmitter<NewShipmentFormData>();

  shipmentForm: NewShipmentFormData = {
    orderNumber: '',
    customerName: '',
    source: 'SALES',
    carrier: '',
    trackingNumber: '',
    deliveryAddress: '',
    expectedDeliveryDate: '',
    priority: 'MEDIUM',
    itemName: '',
    quantity: 1,
    notes: '',
  };

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (
      !this.shipmentForm.orderNumber ||
      !this.shipmentForm.customerName ||
      !this.shipmentForm.carrier ||
      !this.shipmentForm.trackingNumber ||
      !this.shipmentForm.deliveryAddress ||
      !this.shipmentForm.expectedDeliveryDate ||
      !this.shipmentForm.itemName ||
      this.shipmentForm.quantity < 1
    ) {
      return;
    }

    this.submitShipment.emit({
      ...this.shipmentForm,
    });
  }

  onBackdropClick(): void {
    this.onClose();
  }
}