import {
  Component,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ResignationFormComponent,
  ResignationForm
} from '../forms/resignation-form/resignation-form.component';

import {
  ExitClearanceCardComponent,
  ExitRequest
} from '../components/exit-clearance-card/exit-clearance-card.component';
import { RelievingCertificateComponent } from '../components/relieving-certificate/relieving-certificate.component';

@Component({
  selector: 'app-exit-management',
  standalone: true,
  imports: [
    CommonModule,
    ResignationFormComponent,
    ExitClearanceCardComponent,
    RelievingCertificateComponent
  ],
  templateUrl: './exit-management.component.html'
})
export class ExitManagementComponent {

  showForm = signal(false);
  showExitCard = signal(false);
  showCertificate = signal(false);

  exitRequest?: ExitRequest;

  openCertificate():void {
    this.showCertificate.set(true);
  }

  closeCertificate(): void {
    this.showCertificate.set(false);
  }

  openForm():void {
    this.showForm.set(true);
  }

  closeForm():void {
    this.showForm.set(false);
  }

  submitResignation(
    form: ResignationForm
  ): void {

    const designation =
      form.employee.substring(
        form.employee.indexOf('(') + 1,
        form.employee.indexOf(')')
      );

    const employeeName =
      form.employee.split('(')[0].trim();

    const lastWorkingDay =
      new Date(
        Date.now() +
        form.noticePeriod * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split('T')[0];

    this.exitRequest = {

      employee: employeeName,

      designation,

      noticePeriod: form.noticePeriod,

      lastWorkingDay,

      reason: form.reason

    };
    this.showExitCard.set(true);
    this.showForm.set(false);

  }

  onCancel(): void {

    this.showExitCard.set(false);

  }

}