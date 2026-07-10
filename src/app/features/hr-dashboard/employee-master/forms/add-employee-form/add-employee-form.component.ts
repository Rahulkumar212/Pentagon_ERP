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

import {
  CreateEmployeePayload
} from '../../../../../core/models/employee.type';

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
  close = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<CreateEmployeePayload>();

  form: CreateEmployeePayload = {

    employeeCode: '',

    fullName: '',

    workEmail: '',

    mobileNumber: '',

    panNumber: '',

    aadhaarNumber: '',

    dob: '',

    org_name: '',

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

      !this.form.workEmail.trim() ||

      !this.form.mobileNumber.trim() ||

      !this.form.panNumber.trim() ||

      !this.form.aadhaarNumber.trim() ||

      !this.form.dob ||

      !this.form.org_name.trim() ||

      !this.form.designation.trim() ||

      !this.form.department.trim() ||

      !this.form.joiningDate ||

      this.form.salary <= 0 ||

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