import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-treasury-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './treasury-header.component.html'
})
export class TreasuryHeaderComponent {

  @Output()
  bankChanged = new EventEmitter<string>();

  banks = [
    'HDFC Corporate Checking',
    'ICICI Business Current',
    'SBI Treasury Account'
  ];

  selectedBank = this.banks[0];

  onBankChange(): void {

    this.bankChanged.emit(this.selectedBank);

  }

}