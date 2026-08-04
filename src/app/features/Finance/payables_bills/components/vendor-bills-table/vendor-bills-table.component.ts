import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IncomingBillService } from '../../../../../core/services/finance/incoming-bill.service';

type BillTab =
  | 'All'
  | 'Paid'
  | 'Due Soon'
  | 'Overdue';

interface VendorBill {

  id: number;

  billNumber:string;

  vendor: string;

  category: string;

  dueDate: string;

  status: 'Paid' | 'Due Soon' | 'Overdue';

  balance: number;

}

@Component({
  selector: 'app-vendor-bills-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './vendor-bills-table.component.html'
})
export class VendorBillsTableComponent implements OnInit {

  @Output()
  settleBill = new EventEmitter<VendorBill>();

  constructor(
    private readonly incomingBillService: IncomingBillService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  searchText = '';

  loading = false;

  tabs: BillTab[] = [
    'All',
    'Paid',
    'Due Soon',
    'Overdue'
  ];

  activeTab: BillTab = 'All';

  bills: VendorBill[] = [];

  ngOnInit(): void {

    this.getIncomingBills();

  }

  getIncomingBills(): void {

    this.loading = true;

    this.incomingBillService
      . getAllIncomingBills()
      .subscribe({

        next: (response: any) => {

          console.log(
            'Incoming Bills',
            response
          );

          this.bills = (response.data ?? []).map((item: any) => ({

            id: item.id,

            billNumber:item.billNumber,

            vendor: item.vendor,

            category: item.costCategory,

            dueDate: item.dueDate,

            status: item.status,

            balance: Number(item.invoiceValue)

          }));

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Failed to load incoming bills',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }

  get filteredBills(): VendorBill[] {

    return this.bills.filter(bill => {

      const matchesTab =

        this.activeTab === 'All' ||

        bill.status === this.activeTab;

      const search =

        this.searchText
          .trim()
          .toLowerCase();

      const matchesSearch =

        bill.vendor
          .toLowerCase()
          .includes(search) ||

        bill.category
          .toLowerCase()
          .includes(search);

      return (

        matchesTab &&
        matchesSearch

      );

    });

  }

  setTab(tab: BillTab): void {

    this.activeTab = tab;

  }

  onSettleBill(
    bill: VendorBill
  ): void {

    this.settleBill.emit(bill);

  }

}