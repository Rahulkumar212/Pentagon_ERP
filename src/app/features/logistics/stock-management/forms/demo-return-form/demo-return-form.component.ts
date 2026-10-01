
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface DemoReturnFormData {
  demoNumber: string;

  itemName: string;
  category: string;

  returnedQuantity: number;
  unit: string;

  customerName: string;
  contactPerson: string;

  issueDate: string;
  returnDate: string;

  returnCondition:
    | 'GOOD'
    | 'DAMAGED'
    | 'PARTIALLY_DAMAGED'
    | 'MISSING';

  damageDescription: string;
  missingQuantity: number;

  receivedBy: string;

  remarks: string;
}

@Component({
  selector: 'app-demo-return-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './demo-return-form.component.html'
})
export class DemoReturnFormComponent {

  @Output()
  save = new EventEmitter<DemoReturnFormData>();

  @Output()
  cancel = new EventEmitter<void>();

  formData: DemoReturnFormData = {
    demoNumber: '',

    itemName: '',
    category: '',

    returnedQuantity: 1,
    unit: 'PCS',

    customerName: '',
    contactPerson: '',

    issueDate: '',
    returnDate: '',

    returnCondition: 'GOOD',

    damageDescription: '',
    missingQuantity: 0,

    receivedBy: '',

    remarks: ''
  };

  submit(): void {

    if (
      !this.formData.demoNumber.trim() ||
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.returnedQuantity <= 0 ||
      !this.formData.customerName.trim() ||
      !this.formData.returnDate ||
      !this.formData.receivedBy.trim()
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

