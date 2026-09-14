import {
  Component,
  EventEmitter,
  Input,
  OnInit,
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
} from '../../../../../core/models/hr/employee.type';

import {
  EmployeeOnboard
} from '../../../../../core/models/hr/employee-onboard.type';

@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-employee-form.component.html'
})
export class AddEmployeeFormComponent
  implements OnInit {

  private readonly STORAGE_KEY =
    'employee-form-draft';

  @Input()
  onboardingEmployee?: EmployeeOnboard;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  save =
    new EventEmitter<CreateEmployeePayload>();

  form: CreateEmployeePayload = {

    fullName: '',

    workEmail: '',

    mobileNumber: '',

    panNumber: '',

    aadhaarNumber: '',

    dob: '',

    org_name: 'SEST',

    designation: '',

    department: '',

    salary: 0,

    status: 'Active',

    bankName: '',

    accountNumber: ''

  };

  ngOnInit(): void {

  const draft =
    localStorage.getItem(this.STORAGE_KEY);

  if (draft) {

    const parsedDraft =
      JSON.parse(draft) as Partial<CreateEmployeePayload>;

    this.form = {

      fullName: parsedDraft.fullName ?? '',

      workEmail: parsedDraft.workEmail ?? '',

      mobileNumber: parsedDraft.mobileNumber ?? '',

      panNumber: parsedDraft.panNumber ?? '',

      aadhaarNumber: parsedDraft.aadhaarNumber ?? '',

      dob: parsedDraft.dob ?? '',

      org_name: parsedDraft.org_name ?? 'SEST',

      designation: parsedDraft.designation ?? '',

      department: parsedDraft.department ?? '',

      salary: parsedDraft.salary ?? 0,

      status: parsedDraft.status ?? 'Active',

      bankName: parsedDraft.bankName ?? '',

      accountNumber: parsedDraft.accountNumber ?? ''

    };

  }

  if (this.onboardingEmployee) {

    this.form.fullName =
      this.onboardingEmployee.candidateName ?? '';

    this.form.designation =
      this.onboardingEmployee.jobTitle ?? '';

  }

}

  saveDraft(): void {

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(this.form)
    );

  }

  clearDraft(): void {

    localStorage.removeItem(
      this.STORAGE_KEY
    );

  }

  onCancel(): void {

    this.close.emit();

  }

  onSave(): void {

  console.log('FORM:', this.form);

  if (

    !this.form.fullName.trim() ||
    !this.form.workEmail.trim() ||
    !this.form.mobileNumber.trim() ||
    !this.form.panNumber.trim() ||
    !this.form.aadhaarNumber.trim() ||
    !this.form.dob ||
    !this.form.org_name.trim() ||
    !this.form.designation.trim() ||
    !this.form.department.trim() ||
    this.form.salary <= 0 ||
    !this.form.bankName.trim() ||
    !this.form.accountNumber.trim()

  ) {

    console.log('VALIDATION FAILED');

    return;

  }

  console.log('EMITTING SAVE EVENT');

  this.save.emit({
    ...this.form
  });

  console.log('SAVE EVENT EMITTED');

  this.clearDraft();

}

}