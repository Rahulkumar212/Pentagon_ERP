import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.html',
})
export class SidebarComponent implements OnInit {

  @Input() isOpen = true;

  user = {
    roleName: '',
    departmentName: '',
    name: '',
  };

  ngOnInit(): void {
    const userData = localStorage.getItem('user');

    if (userData) {
      const loggedInUser = JSON.parse(userData);

      this.user = {
        roleName: loggedInUser.role || '',
        departmentName:
          loggedInUser.departmentName || '',
        name: loggedInUser.name || '',
      };
    }
  }

  get isSuperAdmin(): boolean {
    return this.user.roleName === 'SUPER_ADMIN';
  }

  get isDirector(): boolean {
    return this.user.roleName === 'DIRECTOR';
  }

  get isManager(): boolean {
    return this.user.roleName === 'MANAGER';
  }

  get showApprovals(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'MANAGER',
    ].includes(this.user.roleName);
  }

  get showHR(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'HR_MANAGER',
      'HR_EXECUTIVE',
    ].includes(this.user.roleName);
  }

  get showCRM(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'SALES_MANAGER',
      'SALES_EXECUTIVE',
    ].includes(this.user.roleName);
  }

  get showGEM(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'GEM_MANAGER',
      'GEM_EXECUTIVE',
    ].includes(this.user.roleName);
  }

  get showSCM(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'SCM_MANAGER',
      'SCM_EXECUTIVE',
    ].includes(this.user.roleName);
  }

  get showOps(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'OPERATIONS_MANAGER',
      'OPERATIONS_EXECUTIVE',
    ].includes(this.user.roleName);
  }

  get showTasks(): boolean {
  return [
    'SUPER_ADMIN',
    'DIRECTOR',
    'MANAGER',
    'HR_MANAGER',
    'HR_EXECUTIVE',
    'SALES_MANAGER',
    'GEM_MANAGER',
    'SCM_MANAGER',
    'OPERATIONS_MANAGER',
    'FINANCE_MANAGER',
    'ACCOUNTANT',
    'EMPLOYEE'
  ].includes(this.user.roleName);
}

  get showFinance(): boolean {
    return [
      'SUPER_ADMIN',
      'DIRECTOR',
      'FINANCE_MANAGER',
      'ACCOUNTANT',
    ].includes(this.user.roleName);
  }

  logout(): void {
    localStorage.clear();
    window.location.href = '/login';
  }
}