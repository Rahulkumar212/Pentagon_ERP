import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

export interface PreparationForm {

  employeeName: string;

  designation: string;

  joiningDate: string;

}

@Component({
  selector: 'app-onboarding-preparation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './onboarding-preparation-form.component.html'
})
export class OnboardingPreparationFormComponent {

  @Output()
  close =
    new EventEmitter<void>();

  @Output()
  createChecklist =
    new EventEmitter<PreparationForm>();

  form: PreparationForm = {

    employeeName: '',

    designation: '',

    joiningDate: ''

  };


  isFormValid(): boolean {

    return (

      this.form.employeeName.trim().length > 0 &&

      this.form.designation.trim().length > 0 &&

      this.form.joiningDate.trim().length > 0

    );

  }

  private resetForm(): void {

    this.form = {

      employeeName: '',

      designation: '',

      joiningDate: ''

    };

  }

  onCancel(): void {

    this.resetForm();

    this.close.emit();

  }

  onSubmit(): void {

    if (!this.isFormValid()) {

      return;

    }

    this.createChecklist.emit({

      ...this.form

    });

    this.resetForm();

    this.close.emit();

  }

}