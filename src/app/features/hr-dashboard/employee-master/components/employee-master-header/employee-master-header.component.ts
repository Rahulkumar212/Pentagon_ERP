import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-employee-master-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-master-header.component.html'
})
export class EmployeeMasterHeaderComponent {

  @Output()
  addEmployee =
    new EventEmitter<void>();


  onAddEmployee(): void {

    this.addEmployee.emit();

  }

}