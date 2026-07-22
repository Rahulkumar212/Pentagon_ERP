import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import {
  AuthService
} from '../../../core/services/auth.service';

import {
  ROLES
} from '../../constants/roles.constants';

import {
  SIDEBAR_CONFIG
} from './config/sidebar.config';

import {
  SidebarSection
} from './config/sidebar.types';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html'
})
export class SidebarComponent implements OnInit {

  readonly ROLES = ROLES;

  readonly sidebarConfig = SIDEBAR_CONFIG;

  currentRole = '';

  @Input()
  isOpen = false;

  @Output()
  closeSidebar = new EventEmitter<void>();

  user = {

    roleName: '',

    departmentName: '',

    name: ''

  };

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) { }

  ngOnInit(): void {

    this.currentRole =
      this.auth.getRole() ?? '';



    this.user = {

      roleName:
        localStorage.getItem('role') ?? '',

      departmentName:
        localStorage.getItem('departmentName') ?? '',

      name:
        localStorage.getItem('name') ?? ''
    };
  }



  private getSidebarKey(
    role: string
  ): keyof typeof SIDEBAR_CONFIG {

    switch (role) {

      case 'FINANCE_MANAGER':
      case 'ACCOUNTANT':
        return 'FINANCE';

      case 'HR_MANAGER':
      case 'HR_EXECUTIVE':
        return 'HR';

      case 'SALES_MANAGER':
        return 'CRM';

      case 'SALES_EXECUTIVE':
        return 'EXECUTIVE';

      case 'SCM_MANAGER':
      case 'SCM_EXECUTIVE':
      case 'SUPPLY_CHAIN_EXECUTIVE':
        return 'SCM';

      case 'OPERATIONS_MANAGER':
      case 'OPERATIONS_EXECUTIVE':
        return 'OPERATIONS';

      case 'GEM_MANAGER':
      case 'GEM_EXECUTIVE':
        return 'GEM';

      default:
        return 'EXECUTIVE';

    }

  }

  getSections(
    role: string
  ): SidebarSection[] {

    const key =
      this.getSidebarKey(role);

    return this.sidebarConfig[key]?.sections ?? [];

  }

  getConsoleTitle(
    role: string
  ): string {

    const key =
      this.getSidebarKey(role);

    return this.sidebarConfig[key]?.consoleTitle ?? 'Main Console';

  }


  getDashboardRoute(): string {


    const role =
      this.auth.getRole();

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

        return '/hr-dashboard';



      case 'FINANCE_MANAGER':

      case 'ACCOUNTANT':

        return '/finance/dashboard';



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

  logout(): void {


    this.auth.logout()
      .subscribe({


        next: () => {


          localStorage.clear();


          this.router.navigate([
            '/login'
          ]);


        }


      });


  }


}