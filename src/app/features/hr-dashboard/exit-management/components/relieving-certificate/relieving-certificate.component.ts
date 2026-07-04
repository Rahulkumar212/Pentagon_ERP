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
  ExitRequest
} from '../exit-clearance-card/exit-clearance-card.component';

@Component({
  selector: 'app-relieving-certificate',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './relieving-certificate.component.html'
})
export class RelievingCertificateComponent {

  @Input({ required: true })
  request!: ExitRequest;

  @Output()
  close =
    new EventEmitter<void>();

  closeModal(): void {

    this.close.emit();

  }

  downloadPdf(): void {

    window.print();

  }

}