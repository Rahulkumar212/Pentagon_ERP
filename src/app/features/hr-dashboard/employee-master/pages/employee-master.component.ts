import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  EmployeeListComponent
} from '../components/employee-list/employee-list.component';

import {
  EmployeeMasterHeaderComponent
} from '../components/employee-master-header/employee-master-header.component';

import {
  EmployeeFiltersComponent
} from '../components/employee-filters/employee-filters.component';

import {
  AddEmployeeFormComponent
} from '../forms/add-employee-form/add-employee-form.component';

import {
  EmployeeProfileDrawerComponent
} from '../components/employee-profile-drawer/employee-profile-drawer.component';

import {
  CreateEmployeePayload,
  Employee,
  EmployeesResponse
} from '../../../../core/models/employee.type';

import {
  EmployeeService
} from '../../../../core/services/employee.service';

@Component({
  selector: 'app-employee-master',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeMasterHeaderComponent,
    EmployeeFiltersComponent,
    EmployeeListComponent,
    AddEmployeeFormComponent,
    EmployeeProfileDrawerComponent
  ],
  templateUrl: './employee-master.component.html'
})
export class EmployeeMasterComponent implements OnInit {

  private readonly employeeService =
    inject(EmployeeService);

  private readonly cdr =
    inject(ChangeDetectorRef);

  showForm = signal(false);

  employees: Employee[] = [];

  filteredEmployees: Employee[] = [];

  filterDepartment = 'All';

  filterStatus = 'All';

  selectedEmployee?: Employee;

  showProfile = signal(false);

  ngOnInit(): void {

    this.loadEmployees();

  }

  loadEmployees(): void {

    this.employeeService
      .getEmployees()
      .subscribe({

        next: (response: EmployeesResponse) => {

          console.log('Employees Response', response);

          this.employees = response.data;

          this.applyFilters();

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error('Get Employees Error', err);

        }

      });

  }

  openForm(): void {

    this.showForm.set(true);

  }

  closeForm(): void {

    this.showForm.set(false);

  }

  addEmployee(
    data: CreateEmployeePayload
  ): void {

    this.employeeService
      .createEmployee(data)
      .subscribe({

        next: (response) => {

          console.log('Employee Created', response);

          this.showForm.set(false);

          this.loadEmployees();

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error('Create Employee Error', err);

        }

      });

  }

  openProfile(
    employee: Employee
  ): void {

    this.selectedEmployee = employee;

    this.showProfile.set(true);

    this.cdr.detectChanges();

  }

  closeProfile(): void {

    this.showProfile.set(false);

    this.cdr.detectChanges();

  }

  onDepartmentChange(
    department: string
  ): void {

    this.filterDepartment = department;

    this.applyFilters();

    this.cdr.detectChanges();

  }

  onStatusChange(
    status: string
  ): void {

    this.filterStatus = status;

    this.applyFilters();

    this.cdr.detectChanges();

  }

  applyFilters(): void {

    this.filteredEmployees = this.employees.filter(employee => {

      const departmentMatch =
        this.filterDepartment === 'All' ||
        employee.department === this.filterDepartment;

      const statusMatch =
        this.filterStatus === 'All' ||
        employee.status === this.filterStatus;

      return departmentMatch && statusMatch;

    });

    this.cdr.detectChanges();

  }

}