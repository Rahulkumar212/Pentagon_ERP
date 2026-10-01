
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FaultyMaterialFormData {
  itemName: string;
  category: string;
  quantity: number;
  unit: string;

  sourceType:
    | 'STOCK'
    | 'STOCK_ENTRY'
    | 'DEMO_RETURN'
    | 'STOCK_EXIT'
    | 'OTHER';

  referenceNumber: string;

  reportedBy: string;
  department: string;
  reportDate: string;

  faultType:
    | 'DAMAGED'
    | 'DEFECTIVE'
    | 'BROKEN'
    | 'MISSING_PART'
    | 'NOT_WORKING'
    | 'OTHER';

  faultDescription: string;

  currentLocation: string;

  actionRequired:
    | 'REPAIR'
    | 'REPLACEMENT'
    | 'DISCARD'
    | 'RETURN_TO_SUPPLIER'
    | 'INSPECTION'
    | 'OTHER';

  remarks: string;
}

@Component({
  selector: 'app-faulty-material-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faulty-material-form.component.html'
})
export class FaultyMaterialFormComponent {
  @Output() save = new EventEmitter<FaultyMaterialFormData>();
  @Output() cancel = new EventEmitter<void>();

  formData: FaultyMaterialFormData = {
    itemName: '',
    category: '',
    quantity: 1,
    unit: 'PCS',

    sourceType: 'STOCK',

    referenceNumber: '',

    reportedBy: '',
    department: '',
    reportDate: '',

    faultType: 'DAMAGED',

    faultDescription: '',

    currentLocation: 'Main Warehouse',

    actionRequired: 'INSPECTION',

    remarks: ''
  };

  submit(): void {
    if (
      !this.formData.itemName.trim() ||
      !this.formData.category.trim() ||
      this.formData.quantity <= 0 ||
      !this.formData.reportedBy.trim() ||
      !this.formData.reportDate ||
      !this.formData.faultDescription.trim()
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

