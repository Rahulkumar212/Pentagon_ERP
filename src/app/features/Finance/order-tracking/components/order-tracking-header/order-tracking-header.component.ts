import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';


@Component({
  selector: 'app-order-tracking-header',
  standalone: true,
  imports: [],
  templateUrl: './order-tracking-header.component.html'
})
export class OrderTrackingHeaderComponent {

  // =====================================================
  // OUTPUTS
  // =====================================================

  @Output()
  createOrder =
    new EventEmitter<void>();


  // =====================================================
  // CREATE ORDER
  // =====================================================

  onCreateOrder(): void {

    this.createOrder.emit();

  }

}