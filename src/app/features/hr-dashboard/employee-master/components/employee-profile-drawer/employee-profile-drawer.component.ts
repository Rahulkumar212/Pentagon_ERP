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
  FormsModule
} from '@angular/forms';

import {
  Employee
} from '../../../../../core/models/employee.type';

@Component({
  selector: 'app-employee-profile-drawer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-profile-drawer.component.html'
})
export class EmployeeProfileDrawerComponent {

  @Input({ required: true })
  employee!: Employee;

  @Output()
  close =
    new EventEmitter<void>();

  onClose(): void {

    this.close.emit();

  }

}