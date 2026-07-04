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

export interface ResignationForm {

  employee: string;

  noticePeriod: number;

  reason: string;

}

@Component({
  selector: 'app-resignation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './resignation-form.component.html'
})
export class ResignationFormComponent {

  @Output()
  submitForm =
    new EventEmitter<ResignationForm>();

  @Output()
  cancel =
    new EventEmitter<void>();

  employees = [

    'Rahul Sharma (Frontend Developer)',

    'Priya Iyer (HR Executive)',

    'Aman Verma (UI Designer)',

    'Sneha Kapoor (Backend Developer)',

    'Arjun Patel (DevOps Engineer)',

    'Neha Gupta (Business Analyst)',

    'Karan Malhotra (QA Engineer)',

    'Meera Nair (Finance Executive)',

    'Rohit Singh (Product Manager)'

  ];

  form: ResignationForm = {

    employee: this.employees[0],

    noticePeriod: 60,

    reason: ''

  };

  onSubmit(): void {

    this.submitForm.emit({

      ...this.form

    });

  }

  onCancel(): void {

    this.cancel.emit();

  }

}