import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payroll-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './payroll-header.component.html'
})
export class PayrollHeaderComponent {

  @Output()
  bankChanged = new EventEmitter<string>();

  selectedBank = 'HDFC Corporate Checking';

  banks = [
    'HDFC Corporate Checking',
    'ICICI Payroll Account',
    'Axis Salary Disbursement'
  ];

  onBankChange(): void {

    this.bankChanged.emit(this.selectedBank);

  }

}