import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ApprovalAction,
  APPROVAL_ACTIONS
} from '../../utils/approval-actions.util';

@Component({
  selector: 'app-approval-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval-actions.component.html'
})
export class ApprovalActionsComponent {

  @Input() disabled = false;

  @Input() loading = false;

  @Input() showRequestChanges = true;

  @Output()
  action = new EventEmitter<ApprovalAction>();

  readonly actions = APPROVAL_ACTIONS;

  onAction(action: ApprovalAction): void {

    if (this.disabled || this.loading) {
      return;
    }

    this.action.emit(action);
  }
}