import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KRA_DATA, DepartmentKRA } from '../../utils/kra-data';

@Component({
  selector: 'app-kra-progress-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kra-progress-card.component.html'
})
export class KraProgressCardComponent {

  departments: DepartmentKRA[] = KRA_DATA;

  trackByDepartment(index: number, item: DepartmentKRA): string {
    return item.department;
  }

}