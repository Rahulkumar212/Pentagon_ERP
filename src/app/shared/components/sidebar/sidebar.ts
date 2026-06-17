import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { ROLES } from '../../constants/roles.constants';
import { HasRoleDirective } from '../../directives/has-role.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HasRoleDirective
  ],
  templateUrl: './sidebar.html',
})
export class SidebarComponent implements OnInit {

  readonly ROLES = ROLES;

  constructor(
     private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  @Input()
  isOpen = false;

  @Output()
  closeSidebar = new EventEmitter<void>();

  user = {
    roleName: '',
    departmentName: '',
    name: '',
  };

  isScmOpen = false;
  isOrdersOpen = false;

  ngOnInit(): void {
    this.user = {
      roleName: localStorage.getItem('role') || '',
      departmentName: localStorage.getItem('departmentName') || '',
      name: localStorage.getItem('name') || '',
    };
  }

  toggleScm(): void {
    this.isScmOpen = !this.isScmOpen;
  }
  getDashboardRoute(): string {
    const role = this.auth.getRole();

    switch (role) {

      case 'SALES_EXECUTIVE':
      case 'SALES_MANAGER':
        return '/sales-executive';

      case 'SCM_EXECUTIVE':
      case 'SCM_MANAGER':
      case 'SUPPLY_CHAIN_EXECUTIVE':
        return '/scm-executive';

      case 'HR_EXECUTIVE':
      case 'HR_MANAGER':
        return '/employees';

      case 'FINANCE_MANAGER':
      case 'ACCOUNTANT':
        return '/finance';

      case 'OPERATIONS_MANAGER':
      case 'OPERATIONS_EXECUTIVE':
        return '/operations';

      case 'GEM_MANAGER':
      case 'GEM_EXECUTIVE':
        return '/gem';

      default:
        return '/sales-executive';
    }
  }

  logout() {

  this.auth.logout().subscribe({
    next: () => {

      localStorage.clear();

      this.router.navigate(['/login']);

    }
  });

}
}