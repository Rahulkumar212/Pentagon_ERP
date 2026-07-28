import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-invoice-details-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './invoice-details-modal.component.html'
})
export class InvoiceDetailsModalComponent {

  @Input()
  invoice: any;

  @Output()
  close = new EventEmitter<void>();

  getTotal(): number {

    if (!this.invoice?.items) {
      return 0;
    }

    return this.invoice.items.reduce(
      (total: number, item: any) =>
        total + (item.quantity * item.price),
      0
    );

  }

  closeModal(): void {

    this.close.emit();

  }

}