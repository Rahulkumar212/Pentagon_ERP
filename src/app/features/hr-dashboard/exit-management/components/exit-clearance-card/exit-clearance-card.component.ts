import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

export interface ExitRequest {

  employee: string;

  designation: string;

  noticePeriod: number;

  lastWorkingDay: string;

  reason: string;

}

@Component({

  selector: 'app-exit-clearance-card',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './exit-clearance-card.component.html'

})

export class ExitClearanceCardComponent {

  @Input({
    required: true
  })
  request!: ExitRequest;

  @Output() showCertificate = new EventEmitter<void>();

  openCertificate():void {
    this.showCertificate.emit();
  }

   itCleared = false;

   hrCleared = false;
   
   adminCleared = false;

   financeCleared = false;

   get allCompleted():boolean {
    return (
        this.itCleared &&
        this.hrCleared &&
        this.adminCleared &&
        this.financeCleared
    )
   }

}