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
  EmployeeOnboard
} from '../../../../../core/models/employee-onboard.type';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-profile.component.html'
})
export class EmployeeProfileComponent {

  @Input({ required: true })
  employee!: EmployeeOnboard;

  @Input()
  canGenerateCode = false;

  @Output()
  generateCode =
    new EventEmitter<void>();

  onGenerateEmployeeCode(): void {

    if (!this.canGenerateCode) {

      return;

    }

    this.generateCode.emit();

  }

}