
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ProcurementFormData {
  itemName: string;
  category: string;
  quantity: number;
  unit: string;
  supplier: string;

  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  expectedDate: string;

  estimatedCost: number;

  requiredBy: string;

  reason: string;
  remarks: string;
}

@Component({
  selector: 'app-procurement-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './procurement-form.component.html'
})
export class ProcurementFormComponent {

  @Output()
  save = new EventEmitter<ProcurementFormData>();

  @Output()
  cancel = new EventEmitter<void>();

  formData: ProcurementFormData = {

    itemName: '',

    category: '',

    quantity: 1,

    unit: 'PCS',

    supplier: '',

    priority: 'MEDIUM',

    expectedDate: '',

    estimatedCost: 0,

    requiredBy: '',

    reason: '',

    remarks: ''
  };


  submit(): void {

    if (
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.quantity <= 0 ||
      !this.formData.expectedDate
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

