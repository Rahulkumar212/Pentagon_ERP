
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ApprovalCard,
  APPROVAL_CARD_DATA
} from '../../utils/approval-card.util';

@Component({
  selector: 'app-approval-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './approval-card.component.html',
})
export class ApprovalCardComponent {

  @Input()
  approval: ApprovalCard = APPROVAL_CARD_DATA;

  @Output()
  viewDetails = new EventEmitter<string>();

  @Output()
  approve = new EventEmitter<string>();


  formatCurrency(
    value: number
  ): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }
    ).format(value);

  }


  getInitials(
    name: string
  ): string {

    return name
      .split(' ')
      .map(
        part => part.charAt(0)
      )
      .slice(0, 2)
      .join('')
      .toUpperCase();

  }


  onViewDetails(): void {

    this.viewDetails.emit(
      this.approval.id
    );

  }


  onApprove(): void {

    this.approve.emit(
      this.approval.id
    );

  }

}

