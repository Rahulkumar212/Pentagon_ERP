
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface StockEntryFormData {
  procurementNumber: string;

  itemName: string;
  category: string;

  receivedQuantity: number;
  unit: string;

  supplier: string;
  invoiceNumber: string;
  invoiceDate: string;

  receivedDate: string;
  warehouseLocation: string;

  condition: 'GOOD' | 'DAMAGED' | 'PARTIALLY_DAMAGED';

  remarks: string;
}

@Component({
  selector: 'app-stock-entry-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './stock-entry-form.component.html'
})
export class StockEntryFormComponent {

  @Output()
  save = new EventEmitter<StockEntryFormData>();

  @Output()
  cancel = new EventEmitter<void>();

  formData: StockEntryFormData = {
    procurementNumber: '',

    itemName: '',
    category: '',

    receivedQuantity: 1,
    unit: 'PCS',

    supplier: '',
    invoiceNumber: '',
    invoiceDate: '',

    receivedDate: '',
    warehouseLocation: 'Main Warehouse',

    condition: 'GOOD',

    remarks: ''
  };

  submit(): void {

    if (
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.receivedQuantity <= 0 ||
      !this.formData.receivedDate
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

