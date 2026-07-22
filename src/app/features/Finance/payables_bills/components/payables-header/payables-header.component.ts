import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payables-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payables-header.component.html'
})
export class PayablesHeaderComponent {

  @Output()
  recordVendorBill = new EventEmitter<void>();

  onRecordVendorBill(): void {

    this.recordVendorBill.emit();

  }

}