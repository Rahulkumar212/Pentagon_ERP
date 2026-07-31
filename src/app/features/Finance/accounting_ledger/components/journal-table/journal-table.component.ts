import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { JournalEntryService } from '../../../../../core/services/finance/journal-entry.service';
import { JournalEntry } from '../../../../../core/models/finance/journal-entry.model';

@Component({
  selector: 'app-journal-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './journal-table.component.html'
})
export class JournalTableComponent
  implements OnInit, OnDestroy {

  journals: JournalEntry[] = [];

  loading = false;

  showAttachmentModal = false;

  attachmentUrl!: SafeResourceUrl;

  attachmentType: 'pdf' | 'image' | 'other' = 'other';

  private objectUrl = '';

  constructor(
    private readonly journalEntryService: JournalEntryService,
    private readonly cdr: ChangeDetectorRef,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {

    this.loadJournalEntries();

  }

  ngOnDestroy(): void {

    if (this.objectUrl) {

      URL.revokeObjectURL(this.objectUrl);

    }

  }

  // ======================================
  // Load Journal Entries
  // ======================================

  loadJournalEntries(): void {

    this.loading = true;

    this.journalEntryService
      .getJournalEntries()
      .subscribe({

        next: (response: any) => {

          this.journals = (response.data ?? []).map((item: any) => ({

            ...item,

            amount: Number(item.amount)

          }));

          console.log(
            'Journal Entries',
            this.journals
          );

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load journal entries',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  // ======================================
  // View Attachment
  // ======================================

  viewAttachment(id: string): void {

    console.log('Clicked Id : ', id);

    this.journalEntryService
      .viewJournalAttachment(id)
      .subscribe({

        next: (blob: Blob) => {

          if (this.objectUrl) {

            URL.revokeObjectURL(this.objectUrl);

          }

          this.objectUrl = URL.createObjectURL(blob);

          this.attachmentUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(
              this.objectUrl
            );

          if (blob.type.includes('pdf')) {

            this.attachmentType = 'pdf';

          }
          else if (blob.type.includes('image')) {

            this.attachmentType = 'image';

          }
          else {

            this.attachmentType = 'other';

          }

          this.showAttachmentModal = true;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to open attachment',
            error
          );

        }

      });

  }

  // ======================================
  // Close Modal
  // ======================================

  closeAttachmentModal(): void {

    this.showAttachmentModal = false;

    if (this.objectUrl) {

      URL.revokeObjectURL(this.objectUrl);

      this.objectUrl = '';

    }

  }

  // ======================================
  // Track By
  // ======================================

  trackByJournal(
    index: number,
    item: JournalEntry
  ): string {

    return item._id ?? item.voucherNo;

  }

}