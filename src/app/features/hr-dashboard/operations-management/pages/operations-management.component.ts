import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  OperationsHeaderComponent
} from '../components/operations-header/operations-header.component';

import {
  AttendancePunchCardComponent
} from '../components/attendance/attendance-punch-card.component';

import {
  AttendanceHistoryComponent
} from '../components/attendance-history/attendance-history.component';


import {
  PayrollSummaryCardComponent
} from '../components/payroll/payroll-summary-card.component';

import {
  KraProgressCardComponent
} from '../components/kra/kra-progress-card.component';

import {
  AssignedAssetsComponent
} from '../components/assigned-assets/assigned-assets.component';
import { ActivatedRoute } from '@angular/router';
import { LeaveRequestFormComponent } from '../../../../shared/forms/leave-request-form/leave-request-form.component';

@Component({

  selector: 'app-operations-management',

  standalone: true,

  imports: [

    CommonModule,

    OperationsHeaderComponent,

    AttendancePunchCardComponent,

    AttendanceHistoryComponent,


    PayrollSummaryCardComponent,

    KraProgressCardComponent,

    AssignedAssetsComponent,

    LeaveRequestFormComponent

  ],

  templateUrl: './operations-management.component.html'

})

export class OperationsManagementComponent implements OnInit {

  showLeaveForm = false;

  openLeaveForm(): void {
     console.log('Button Clicked');
   this.showLeaveForm = true;
  }

  closeLeaveForm(): void {
    this.showLeaveForm = false;
  }

  constructor(private readonly route:ActivatedRoute){}

     activeTab = 'attendance';

     ngOnInit(): void {
       this.route.queryParams.subscribe(params => {
        if(params['tab']){
          this.activeTab = params['tab'];
        }
       })
     }

  onTabChange(tab: string): void {

    this.activeTab = tab;

  }


}