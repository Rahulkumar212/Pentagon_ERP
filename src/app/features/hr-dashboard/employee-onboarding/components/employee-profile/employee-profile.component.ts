import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

export interface OnboardingEmployee {

  name: string;

  designation: string;

  department: string;

  joiningDate: string;

  progress: number;

  status: string;

  avatar: string;

}

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
  employee!: OnboardingEmployee;

  @Input()
  canGenerate = false;

  @Output()
  generateEmployeeCode =
    new EventEmitter<void>();

  onGenerateEmployeeCode(): void {

    if (!this.canGenerate) {

      return;

    }

    this.generateEmployeeCode.emit();

  }

}