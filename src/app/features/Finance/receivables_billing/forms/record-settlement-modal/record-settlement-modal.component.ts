import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-record-settlement-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './record-settlement-modal.component.html'
})
export class RecordSettlementModalComponent {

  @Input() invoice: any;

  @Output() close = new EventEmitter<void>();

  account = new FormControl(
    'HDFC Corporate Checking (Balance: ₹345,200)'
  );

  cancel(): void {

    this.close.emit();

  }

  processDeposit(): void {

    console.log(
      this.invoice,
      this.account.value
    );

    this.close.emit();

  }

}