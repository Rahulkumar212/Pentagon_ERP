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

@Component({
  selector: 'app-employee-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-filters.component.html'
})
export class EmployeeFiltersComponent {

  department = 'All';

  status = 'All';

  @Output()
  departmentChange =
    new EventEmitter<string>();

  @Output()
  statusChange =
    new EventEmitter<string>();

  onDepartmentChange(): void {

    this.departmentChange.emit(
      this.department
    );

  }

  onStatusChange(): void {

    this.statusChange.emit(
      this.status
    );

  }

}