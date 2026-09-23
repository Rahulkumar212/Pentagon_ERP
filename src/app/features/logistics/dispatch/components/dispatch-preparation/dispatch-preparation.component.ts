import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DispatchPreparation,
  DispatchPreparationChecklist,
  DispatchPreparationItem,
} from '../../utils/dispatch-preparation.util';

@Component({
  selector: 'app-dispatch-preparation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './dispatch-preparation.component.html',
})
export class DispatchPreparationComponent {
  @Input()
  preparation!: DispatchPreparation;

  @Input()
  isOpen = true;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<DispatchPreparation>();

  @Output()
  readyForDispatch =
    new EventEmitter<DispatchPreparation>();

  @Output()
  dispatch =
    new EventEmitter<DispatchPreparation>();

  // --------------------------------------------------
  // ITEM PROGRESS
  // --------------------------------------------------

  get verifiedItems(): number {
    if (!this.preparation?.items) {
      return 0;
    }

    return this.preparation.items.filter(
      (item) => item.status === 'VERIFIED',
    ).length;
  }

  get totalItems(): number {
    return this.preparation?.items?.length ?? 0;
  }

  get itemProgress(): number {
    if (this.totalItems === 0) {
      return 0;
    }

    return Math.round(
      (this.verifiedItems / this.totalItems) * 100,
    );
  }

  // --------------------------------------------------
  // CHECKLIST PROGRESS
  // --------------------------------------------------

  get completedChecklistItems(): number {
    if (!this.preparation?.checklist) {
      return 0;
    }

    return this.preparation.checklist.filter(
      (item) => item.status === 'VERIFIED',
    ).length;
  }

  get totalChecklistItems(): number {
    return this.preparation?.checklist?.length ?? 0;
  }

  get checklistProgress(): number {
    if (this.totalChecklistItems === 0) {
      return 0;
    }

    return Math.round(
      (this.completedChecklistItems /
        this.totalChecklistItems) *
        100,
    );
  }

  // --------------------------------------------------
  // PREPARATION COMPLETE
  // --------------------------------------------------

  get isPreparationComplete(): boolean {
    if (!this.preparation) {
      return false;
    }

    const allItemsVerified =
      this.preparation.items.every(
        (item) =>
          item.status === 'VERIFIED' &&
          item.verifiedQuantity ===
            item.orderedQuantity,
      );

    const allRequiredChecksCompleted =
      this.preparation.checklist
        .filter((item) => item.required)
        .every(
          (item) => item.status === 'VERIFIED',
        );

    return (
      allItemsVerified &&
      allRequiredChecksCompleted
    );
  }

  // --------------------------------------------------
  // CLOSE
  // --------------------------------------------------

  onClose(): void {
    this.close.emit();
  }

  // --------------------------------------------------
  // ITEM VERIFICATION
  // --------------------------------------------------

  toggleItemVerification(
    item: DispatchPreparationItem,
  ): void {
    if (item.status === 'VERIFIED') {
      item.status = 'PENDING';
      item.verifiedQuantity = 0;
      return;
    }

    if (
      item.availableQuantity <
      item.orderedQuantity
    ) {
      item.status = 'SHORT';
      item.verifiedQuantity =
        item.availableQuantity;
      return;
    }

    item.verifiedQuantity =
      item.orderedQuantity;

    item.status = 'VERIFIED';
  }

  // --------------------------------------------------
  // CHECKLIST
  // --------------------------------------------------

  toggleChecklist(
    item: DispatchPreparationChecklist,
  ): void {
    if (item.status === 'VERIFIED') {
      item.status = 'PENDING';
    } else {
      item.status = 'VERIFIED';
    }
  }

  // --------------------------------------------------
  // STATUS HELPERS
  // --------------------------------------------------

  getStatusClass(
    status: DispatchPreparationItem['status'],
  ): string {
    switch (status) {
      case 'VERIFIED':
        return 'bg-green-100 text-green-700';

      case 'SHORT':
        return 'bg-red-100 text-red-700';

      case 'PENDING':
      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  }

  getItemStatusLabel(
    status: DispatchPreparationItem['status'],
  ): string {
    switch (status) {
      case 'VERIFIED':
        return 'Verified';

      case 'SHORT':
        return 'Short Quantity';

      case 'PENDING':
      default:
        return 'Pending';
    }
  }

  getChecklistStatusClass(
    status: DispatchPreparationChecklist['status'],
  ): string {
    switch (status) {
      case 'VERIFIED':
        return 'bg-green-100 text-green-700';

      case 'WARNING':
        return 'bg-orange-100 text-orange-700';

      case 'PENDING':
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  getChecklistIcon(
    status: DispatchPreparationChecklist['status'],
  ): string {
    switch (status) {
      case 'VERIFIED':
        return '✓';

      case 'WARNING':
        return '!';

      case 'PENDING':
      default:
        return '○';
    }
  }

  // --------------------------------------------------
  // SAVE
  // --------------------------------------------------

  savePreparation(): void {
    if (!this.preparation) {
      return;
    }

    this.save.emit(this.preparation);
  }

  // --------------------------------------------------
  // READY FOR DISPATCH
  // --------------------------------------------------

  markReadyForDispatch(): void {
    if (!this.preparation) {
      return;
    }

    if (!this.isPreparationComplete) {
      return;
    }

    this.readyForDispatch.emit(
      this.preparation,
    );
  }

  // --------------------------------------------------
  // CONFIRM DISPATCH
  // --------------------------------------------------

  confirmDispatch(): void {
    if (!this.preparation) {
      return;
    }

    if (!this.isPreparationComplete) {
      return;
    }

    this.dispatch.emit(
      this.preparation,
    );
  }
}