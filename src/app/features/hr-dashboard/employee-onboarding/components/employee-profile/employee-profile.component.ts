import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router
} from '@angular/router';

import {
  EmployeeOnboard
} from '../../../../../core/models/hr/employee-onboard.type';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-profile.component.html'
})
export class EmployeeProfileComponent {

  private readonly router = inject(Router);

  @Input({ required: true })
  employee!: EmployeeOnboard;

  @Input()
  canGenerateCode = false;

  @Output()
  generateCode = new EventEmitter<void>();

  onAddEmployee(): void {

    this.router.navigate(
      ['/employee-master'],
      {
        queryParams: {
          openForm: true
        }
      }
    );

  }

}