import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule,
  DatePipe
} from '@angular/common';

@Component({
  selector: 'app-finance-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './finance-header.component.html'
})
export class FinanceHeaderComponent {

  @Output()
  refresh =
    new EventEmitter<void>();

  @Output()
  exportReport =
    new EventEmitter<void>();

  readonly currentDate =
    new Date();

  readonly financialYear =
    'FY 2026-2027';

  onRefresh(): void {

    this.refresh.emit();

  }

  onExport(): void {

    this.exportReport.emit();

  }

}