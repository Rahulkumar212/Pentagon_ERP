
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface DemoUnitFormData {
  itemName: string;
  category: string;

  quantity: number;
  unit: string;

  demoNumber: string;
  customerName: string;
  contactPerson: string;
  contactNumber: string;

  assignedTo: string;
  institutionName: string;

  issueDate: string;
  expectedReturnDate: string;

  destination: string;

  condition: 'NEW' | 'GOOD' | 'USED';

  purpose: string;
  remarks: string;
}

@Component({
  selector: 'app-demo-unit-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './demo-unit-form.component.html'
})
export class DemoUnitFormComponent {

  @Output()
  save = new EventEmitter<DemoUnitFormData>();

  @Output()
  cancel = new EventEmitter<void>();

  formData: DemoUnitFormData = {
    itemName: '',
    category: '',

    quantity: 1,
    unit: 'PCS',

    demoNumber: '',
    customerName: '',
    contactPerson: '',
    contactNumber: '',

    assignedTo: '',
    institutionName: '',

    issueDate: '',
    expectedReturnDate: '',

    destination: '',

    condition: 'NEW',

    purpose: '',
    remarks: ''
  };

  submit(): void {

    if (
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.quantity <= 0 ||
      !this.formData.customerName.trim() ||
      !this.formData.contactPerson.trim() ||
      !this.formData.issueDate ||
      !this.formData.expectedReturnDate ||
      !this.formData.assignedTo.trim()
    ) {
      return;
    }

    this.save.emit({
      ...this.formData
    });
  }

  close(): void {
    this.cancel.emit();
  }
}

