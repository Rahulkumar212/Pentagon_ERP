
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface StockExitFormData {
  itemName: string;
  category: string;

  quantity: number;
  unit: string;

  exitType:
    | 'SALES'
    | 'DEMO'
    | 'OFFICE_USE'
    | 'REPLACEMENT'
    | 'TRANSFER'
    | 'OTHER';

  referenceNumber: string;

  issuedTo: string;
  department: string;

  exitDate: string;
  destination: string;

  reason: string;
  remarks: string;
}

@Component({
  selector: 'app-stock-exit-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './stock-exit-form.component.html'
})
export class StockExitFormComponent {

  @Output()
  save = new EventEmitter<StockExitFormData>();

  @Output()
  cancel = new EventEmitter<void>();

  formData: StockExitFormData = {
    itemName: '',
    category: '',

    quantity: 1,
    unit: 'PCS',

    exitType: 'SALES',

    referenceNumber: '',

    issuedTo: '',
    department: '',

    exitDate: '',
    destination: '',

    reason: '',
    remarks: ''
  };

  submit(): void {

    if (
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.quantity <= 0 ||
      !this.formData.exitDate ||
      !this.formData.issuedTo.trim()
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

