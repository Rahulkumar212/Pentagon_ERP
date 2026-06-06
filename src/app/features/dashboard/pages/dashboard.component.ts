import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../../../shared/components/sidebar/sidebar';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';


import {
  ROLE_DASHBOARD_CARDS,
  ROLE_ACTIVITIES,
  ROLE_TASKS
} from '../utils/dashboard-data';
import { AuthService } from '../../auth/auth.services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  cards: any[] = [];
  activities: any[] = [];
  tasks: any[] = [];

  user: any;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.user = this.authService.getUser();

    const role = this.user?.role;

    this.cards =
      ROLE_DASHBOARD_CARDS[role] ||
      ROLE_DASHBOARD_CARDS['EMPLOYEE'];

    this.activities =
      ROLE_ACTIVITIES[role] ||
      [];

    this.tasks =
      ROLE_TASKS[role] ||
      [];
  }
}