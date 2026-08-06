import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UploadedStatement {
  id: number;
  bank: string;
  month: string;
  fileName: string;
  uploadedBy: string;
  uploadedOn: string;
  status: 'Processed' | 'Pending';
}

@Component({
  selector: 'app-statement-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './statement-upload.component.html'
})
export class StatementUploadComponent {

  banks = [
    'HDFC Corporate Checking',
    'ICICI Business Current',
    'SBI Treasury Account'
  ];

  months = [
    'January 2026',
    'February 2026',
    'March 2026',
    'April 2026',
    'May 2026',
    'June 2026',
    'July 2026',
    'August 2026'
  ];

  selectedBank = this.banks[0];

  selectedMonth = this.months[6];

  selectedFileName = '';

  uploadedStatements: UploadedStatement[] = [
    {
      id: 1,
      bank: 'HDFC Corporate Checking',
      month: 'July 2026',
      fileName: 'HDFC_July_Statement.xlsx',
      uploadedBy: 'Finance Team',
      uploadedOn: '05 Aug 2026',
      status: 'Processed'
    },
    {
      id: 2,
      bank: 'ICICI Business Current',
      month: 'July 2026',
      fileName: 'ICICI_July_Statement.csv',
      uploadedBy: 'Finance Team',
      uploadedOn: '04 Aug 2026',
      status: 'Pending'
    }
  ];

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {

      return;

    }

    this.selectedFileName = input.files[0].name;

  }

  uploadStatement(): void {

    if (!this.selectedFileName) {

      alert('Please select a statement file.');

      return;

    }

    this.uploadedStatements.unshift({

      id: Date.now(),

      bank: this.selectedBank,

      month: this.selectedMonth,

      fileName: this.selectedFileName,

      uploadedBy: 'Finance User',

      uploadedOn: new Date().toLocaleDateString(),

      status: 'Pending'

    });

    this.selectedFileName = '';

  }

}