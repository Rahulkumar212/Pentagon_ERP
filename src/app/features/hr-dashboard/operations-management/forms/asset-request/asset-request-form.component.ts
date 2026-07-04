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

export interface AssetRequest {

  employee: string;

  assetType: string;

  priority: string;

  requiredDate: string;

  justification: string;

}

@Component({
  selector: 'app-asset-request-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './asset-request-form.component.html'
})
export class AssetRequestFormComponent {

  @Output()
  submitForm =
    new EventEmitter<AssetRequest>();

  @Output()
  cancel =
    new EventEmitter<void>();

  employees = [

    'Rahul Sharma',

    'Sneha Kapoor',

    'Arjun Patel',

    'Priya Iyer',

    'Rohit Singh'

  ];

  assetTypes = [

    'Laptop',

    'Desktop',

    'Monitor',

    'Keyboard',

    'Mouse',

    'Headset',

    'Mobile Phone',

    'Printer',

    'ID Card',

    'Access Card'

  ];

  priorities = [

    'Low',

    'Medium',

    'High',

    'Urgent'

  ];

  form: AssetRequest = {

    employee: this.employees[0],

    assetType: this.assetTypes[0],

    priority: this.priorities[1],

    requiredDate: '',

    justification: ''

  };

  onSubmit(): void {

    this.submitForm.emit(this.form);

  }

  onCancel(): void {

    this.cancel.emit();

  }

}