import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { OrganizationService } from '../../../../../core/services/organization.service';

import {
  Telecalling,
  TelecallingResponse,
} from '../../../../../core/models/client-crm/telecalling.type';

@Component({
  selector: 'app-telecalling-approval-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './telecalling-approval-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TelecallingApprovalDetailComponent
  implements OnChanges {

  private readonly organizationService =
    inject(OrganizationService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  @Input()
  approval: Telecalling | null = null;

  @Output()
  back = new EventEmitter<void>();

  telecalling: Telecalling | null = null;

  isLoading = false;
  errorMessage = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['approval'] && this.approval) {
      this.loadTelecallingDetails();
    }
  }

  loadTelecallingDetails(): void {
    if (!this.approval?.id) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const telecallingId = Number(this.approval.id);

    this.organizationService
      .fetchTelecalling()
      .subscribe({
        next: (response: TelecallingResponse) => {

          const records = response.data ?? [];

          this.telecalling =
            records.find(
              (record: Telecalling) =>
                Number(record.id) === telecallingId
            ) ?? null;

          if (!this.telecalling) {
            this.errorMessage =
              'Telecalling details not found.';
          }

          this.isLoading = false;

          this.cdr.markForCheck();
        },

        error: (error) => {
          console.error(
            'Failed to load Telecalling details:',
            error
          );

          this.telecalling = null;

          this.errorMessage =
            'Unable to load telecalling details.';

          this.isLoading = false;

          this.cdr.markForCheck();
        },
      });
  }

  close(): void {
    this.back.emit();
  }

  displayValue(value: unknown): string {
    if (
      value === null ||
      value === undefined ||
      value === ''
    ) {
      return '-';
    }

    return String(value);
  }

  formatDate(value: string | undefined): string {
    if (!value) {
      return '-';
    }

    return new Date(value).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  formatDateTime(value: string | undefined): string {
    if (!value) {
      return '-';
    }

    return new Date(value).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}