import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-expenses-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './expenses-header.component.html'
})
export class ExpensesHeaderComponent {

  @Output()
  newClaim = new EventEmitter<void>();

  createExpenseClaim(): void {

    this.newClaim.emit();

  }

}