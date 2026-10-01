
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface OfficeUseFormData {
  itemName: string;
  category: string;
  quantity: number;
  unit: string;

  issueType: 'OFFICE_USE' | 'DEPARTMENT_USE' | 'EMPLOYEE_USE' | 'MAINTENANCE' | 'OTHER';

  issuedTo: string;
  department: string;
  employeeCode: string;

  issueDate: string;
  destination: string;

  reason: string;
  remarks: string;
}

@Component({
  selector: 'app-office-use-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './office-use-form.component.html'
})
export class OfficeUseFormComponent {
  @Output() save = new EventEmitter<OfficeUseFormData>();
  @Output() cancel = new EventEmitter<void>();

  formData: OfficeUseFormData = {
    itemName: '',
    category: '',
    quantity: 1,
    unit: 'PCS',

    issueType: 'OFFICE_USE',

    issuedTo: '',
    department: '',
    employeeCode: '',

    issueDate: '',
    destination: '',

    reason: '',
    remarks: ''
  };

  submit(): void {
    if (
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.quantity <= 0 ||
      !this.formData.issuedTo.trim() ||
      !this.formData.department.trim() ||
      !this.formData.issueDate ||
      !this.formData.reason.trim()
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

