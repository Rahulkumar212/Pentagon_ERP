import {
  Component,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Employee } from '../components/employee-card/employee-card.component';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeMasterHeaderComponent } from '../components/employee-master-header/employee-master-header.component';
import { EmployeeFiltersComponent } from '../components/employee-filters/employee-filters.component';
import {
  AddEmployeeFormComponent
} from '../forms/add-employee-form/add-employee-form.component';
import { EmployeeProfileDrawerComponent } from '../components/employee-profile-drawer/employee-profile-drawer.component';
import { EMPLOYEE_DATA } from '../utils/employee';
import { CreateEmployeePayload } from '../../../../core/models/employee.type';
import { EmployeeService } from '../../../../core/services/employee.service';

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
export class EmployeeMasterComponent {

  private readonly employeeService =
  inject(EmployeeService);

  showForm = signal(false);

  employees: Employee[] = [...EMPLOYEE_DATA];

  filteredEmployees: Employee[] = [...EMPLOYEE_DATA];

  filterDepartment = 'All';

  filterStatus = 'All';

  selectedEmployee?: Employee;

  showProfile = signal(false);

  openForm(): void {

    this.showForm.set(true);

  }

  closeForm(): void {

    this.showForm.set(false);

  }

 addEmployee(data: CreateEmployeePayload): void {

  this.employeeService
    .createEmployee(data)
    .subscribe({

      next: (response) => {

        console.log(response);

        const employee: Employee = {

          employeeCode: data.employeeCode,

          name: data.fullName,

          designation: data.designation,

          department: data.department,

          status: data.status,

          rating: 0,

          attendance: 0,

          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.fullName)}&background=7f1d1d&color=fff`,

          email: data.workEmail,

          mobileNumber: data.mobileNumber,

          joiningDate: data.joiningDate,

          reportingOfficer: '-',

          bankName: data.bankName,

          accountNumber: data.accountNumber,

          salary: data.salary,

          panNumber: data.panNumber,

          aadhaarNumber: data.aadhaarNumber,

          kraGoal: 'Not Assigned',

          kraProgress: 0

        };

        this.employees.unshift(employee);

        this.applyFilters();

        this.showForm.set(false);

      },

      error: (err) => {

        console.error(err);

      }

    });

}

  openProfile(employee: Employee): void {

    this.selectedEmployee = employee;

    this.showProfile.set(true);

  }

  closeProfile(): void {

    this.showProfile.set(false);

  }

  onDepartmentChange(department: string): void {

    this.filterDepartment = department;

    this.applyFilters();

  }

  onStatusChange(status: string): void {

    this.filterStatus = status;

    this.applyFilters();

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

  }

}