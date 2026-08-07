import { CommonModule } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';

import { AddBankAccountComponent } from '../../forms/add-bank-account/add-bank-account.component';
import { UploadBankStatementComponent } from '../../forms/upload-bank-statement/upload-bank-statement.component';

interface BankAccount {

  id: number;

  type: string;

  name: string;

  accountNo: string;

  balance: number;

}

@Component({
  selector: 'app-bank-accounts',
  standalone: true,
  imports: [
    CommonModule,
    AddBankAccountComponent,
    UploadBankStatementComponent
  ],
  templateUrl: './bank-accounts.component.html'
})
export class BankAccountsComponent {

  banks = signal<BankAccount[]>([
    {
      id: 1,
      type: 'CHECKING',
      name: 'HDFC Corporate Checking',
      accountNo: '**** **** **** 8820',
      balance: 340800
    },
    {
      id: 2,
      type: 'CURRENT',
      name: 'ICICI Business Current',
      accountNo: '**** **** **** 4572',
      balance: 215900
    },
    {
      id: 3,
      type: 'TREASURY',
      name: 'SBI Treasury Account',
      accountNo: '**** **** **** 9914',
      balance: 152450
    }
  ]);

  selectedBank = signal(1);

  selectedBankData = signal<BankAccount | null>(null);

  showAddBankModal = signal(false);

  showUploadStatementModal = signal(false);

  selectBank(id: number): void {

    this.selectedBank.set(id);

  }

  openAddBankAccount(): void {

    this.selectedBankData.set(null);

    this.showAddBankModal.set(true);

  }

  editBank(bank: BankAccount): void {

    this.selectedBankData.set(bank);

    this.showAddBankModal.set(true);

  }

  uploadStatement(bank: BankAccount): void {

    this.selectedBankData.set(bank);

    this.showUploadStatementModal.set(true);

  }

  viewBank(bank: BankAccount): void {

    console.log(bank);

  }

  closeModals(): void {

    this.showAddBankModal.set(false);

    this.showUploadStatementModal.set(false);

    this.selectedBankData.set(null);

  }

}