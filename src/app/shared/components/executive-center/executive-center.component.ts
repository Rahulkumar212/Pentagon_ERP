import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-executive-center',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './executive-center.component.html',
})
export class ExecutiveCenterComponent {

  cards = [
    {
      title: 'NEW RAW LEADS',
      value: '0 leads',
      description: 'Mailing & Call assignments',
      color: 'text-red-700'
    },
    {
      title: 'ACTIVE OPPORTUNITIES',
      value: '3 cases',
      description: 'Quotations drafting line',
      color: 'text-orange-500'
    },
    {
      title: 'TOTAL PIPELINE VAL',
      value: '₹5,00,00,000',
      description: 'Target forecast volume',
      color: 'text-red-800'
    },
    {
      title: 'COMPLETED CONVERSIONS',
      value: '3 accounts',
      description: 'Lead to Order conversions',
      color: 'text-emerald-600'
    }
  ];

}