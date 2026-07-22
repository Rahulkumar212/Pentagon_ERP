import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-receivables-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './receivables-header.component.html'
})
export class ReceivablesHeaderComponent {

  @Output()
  createInvoice = new EventEmitter<void>();

  onCreateInvoice(): void {

    this.createInvoice.emit();

  }

}