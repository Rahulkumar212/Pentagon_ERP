import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesExecutiveComponent } from '../sales-executive/sales-executive.component';
import { ScmExecutiveComponent } from '../scm-executive/scm-executive.component';

@Component({
  selector: 'app-executive-center',
  standalone: true,
  imports: [
    CommonModule,
    SalesExecutiveComponent,
    ScmExecutiveComponent
  ],
  templateUrl: './executive-center.component.html'
})
export class ExecutiveCenterComponent {

  user = JSON.parse(
    localStorage.getItem('user') || '{}'
  );

}