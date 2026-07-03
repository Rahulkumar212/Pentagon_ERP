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

export interface EmployeeForm {

  employeeCode: string;

  fullName: string;

  workEmail: string;

  mobileNumber: string;

  panNumber: string;

  aadhaarNumber: string;

  designation: string;

  department: string;

  salary: number;

  status: 'Active' | 'Probation' | 'On Leave';

  bankName: string;

  accountNumber: string;

  joiningDate: string;

}

@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-employee-form.component.html'
})
export class AddEmployeeFormComponent {

  @Output()
  close =
    new EventEmitter<void>();

  @Output()
  save =
    new EventEmitter<EmployeeForm>();


  form: EmployeeForm = {

  employeeCode: '',

  fullName: '',

  workEmail: '',

  mobileNumber: '',

  panNumber: '',

  aadhaarNumber: '',

  designation: '',

  department: '',

  salary: 0,

  status: 'Active',

  bankName: '',

  accountNumber: '',

  joiningDate: ''

};


  onCancel(): void {

    this.close.emit();

  }


 onSave(): void {

  if (

    !this.form.employeeCode.trim() ||

    !this.form.fullName.trim() ||

    !this.form.designation.trim() ||

    !this.form.department.trim() ||

    !this.form.joiningDate ||

    !this.form.status.trim() ||

    !this.form.workEmail.trim() ||

    !this.form.mobileNumber.trim() ||

    !this.form.panNumber.trim() ||

    !this.form.aadhaarNumber.trim() ||

    !this.form.salary ||

    !this.form.bankName.trim() ||

    !this.form.accountNumber.trim()

  ) {

    return;

  }

  this.save.emit({

    ...this.form

  });

}

}