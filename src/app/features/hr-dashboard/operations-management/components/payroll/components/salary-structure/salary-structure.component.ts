import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  signal
} from '@angular/core';

import { SalaryStructureFormComponent } from '../../forms/salary-structure-form/salary-structure-form.component';

// =====================================================
// SALARY STRUCTURE MODEL
// =====================================================

interface SalaryStructure {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;

  basicSalary: number;
  hra: number;
  conveyanceAllowance: number;
  medicalAllowance: number;
  specialAllowance: number;

  totalAllowances: number;
  grossSalary: number;

  pf: number;
  esi: number;
  professionalTax: number;
  tds: number;
  otherDeductions: number;

  totalDeductions: number;
  netSalary: number;

  status: 'Active' | 'Inactive';
}

// =====================================================
// FORM DATA MODEL
// =====================================================

interface SalaryStructureFormData {
  employeeId: string;
  employeeName: string;
  effectiveFrom: string;

  basicSalary: number;
  hra: number;
  conveyanceAllowance: number;
  medicalAllowance: number;
  specialAllowance: number;

  pfApplicable: boolean;
  esiApplicable: boolean;
  professionalTaxApplicable: boolean;
  tdsApplicable: boolean;
}

// =====================================================
// COMPONENT
// =====================================================

@Component({
  selector: 'app-salary-structure',
  standalone: true,

  imports: [
    CommonModule,
    SalaryStructureFormComponent
  ],

  templateUrl: './salary-structure.component.html'
})
export class SalaryStructureComponent {

  // =====================================================
  // SALARY STRUCTURES
  // =====================================================

  readonly salaryStructures =
    signal<SalaryStructure[]>([
      {
        id: 'SAL-001',
        employeeId: 'EMP-1001',
        employeeName: 'Aarav Sharma',
        department: 'Engineering',

        basicSalary: 75000,
        hra: 30000,
        conveyanceAllowance: 5000,
        medicalAllowance: 3000,
        specialAllowance: 12000,

        totalAllowances: 50000,
        grossSalary: 125000,

        pf: 9000,
        esi: 0,
        professionalTax: 200,
        tds: 8500,
        otherDeductions: 800,

        totalDeductions: 18500,
        netSalary: 106500,

        status: 'Active'
      },

      {
        id: 'SAL-002',
        employeeId: 'EMP-1002',
        employeeName: 'Priya Mehta',
        department: 'Product',

        basicSalary: 90000,
        hra: 36000,
        conveyanceAllowance: 5000,
        medicalAllowance: 3000,
        specialAllowance: 11000,

        totalAllowances: 55000,
        grossSalary: 145000,

        pf: 10800,
        esi: 0,
        professionalTax: 200,
        tds: 10500,
        otherDeductions: 1000,

        totalDeductions: 22500,
        netSalary: 122500,

        status: 'Active'
      },

      {
        id: 'SAL-003',
        employeeId: 'EMP-1003',
        employeeName: 'Rohan Verma',
        department: 'Engineering',

        basicSalary: 57000,
        hra: 22800,
        conveyanceAllowance: 4000,
        medicalAllowance: 2500,
        specialAllowance: 8700,

        totalAllowances: 38000,
        grossSalary: 95000,

        pf: 6840,
        esi: 0,
        professionalTax: 200,
        tds: 6500,
        otherDeductions: 660,

        totalDeductions: 14200,
        netSalary: 80800,

        status: 'Active'
      },

      {
        id: 'SAL-004',
        employeeId: 'EMP-1004',
        employeeName: 'Neha Kapoor',
        department: 'Human Resources',

        basicSalary: 47000,
        hra: 18800,
        conveyanceAllowance: 3500,
        medicalAllowance: 2000,
        specialAllowance: 6700,

        totalAllowances: 31000,
        grossSalary: 78000,

        pf: 5640,
        esi: 0,
        professionalTax: 200,
        tds: 5100,
        otherDeductions: 660,

        totalDeductions: 11600,
        netSalary: 66400,

        status: 'Active'
      },

      {
        id: 'SAL-005',
        employeeId: 'EMP-1005',
        employeeName: 'Vikram Singh',
        department: 'Engineering',

        basicSalary: 66000,
        hra: 26400,
        conveyanceAllowance: 4500,
        medicalAllowance: 2500,
        specialAllowance: 10600,

        totalAllowances: 44000,
        grossSalary: 110000,

        pf: 7920,
        esi: 0,
        professionalTax: 200,
        tds: 7400,
        otherDeductions: 980,

        totalDeductions: 16500,
        netSalary: 93500,

        status: 'Active'
      },

      {
        id: 'SAL-006',
        employeeId: 'EMP-1006',
        employeeName: 'Ananya Gupta',
        department: 'Design',

        basicSalary: 53000,
        hra: 21200,
        conveyanceAllowance: 4000,
        medicalAllowance: 2000,
        specialAllowance: 7800,

        totalAllowances: 35000,
        grossSalary: 88000,

        pf: 6360,
        esi: 0,
        professionalTax: 200,
        tds: 5800,
        otherDeductions: 840,

        totalDeductions: 13200,
        netSalary: 74800,

        status: 'Active'
      },

      {
        id: 'SAL-007',
        employeeId: 'EMP-1007',
        employeeName: 'Karan Malhotra',
        department: 'Finance',

        basicSalary: 55000,
        hra: 22000,
        conveyanceAllowance: 4000,
        medicalAllowance: 2000,
        specialAllowance: 9000,

        totalAllowances: 37000,
        grossSalary: 92000,

        pf: 6600,
        esi: 0,
        professionalTax: 200,
        tds: 6100,
        otherDeductions: 900,

        totalDeductions: 13800,
        netSalary: 78200,

        status: 'Active'
      }
    ]);

  // =====================================================
  // SALARY STRUCTURE FORM MODAL
  // =====================================================

  readonly isSalaryStructureFormOpen =
    signal(false);

  // =====================================================
  // SEARCH
  // =====================================================

  readonly searchTerm =
    signal('');

  // =====================================================
  // DEPARTMENT
  // =====================================================

  readonly selectedDepartment =
    signal('All');

  // =====================================================
  // STATUS
  // =====================================================

  readonly selectedStatus =
    signal('All');

  // =====================================================
  // DEPARTMENTS
  // =====================================================

  readonly departments = [
    'All',
    'Engineering',
    'Product',
    'Human Resources',
    'Design',
    'Finance'
  ];

  // =====================================================
  // STATUSES
  // =====================================================

  readonly statuses = [
    'All',
    'Active',
    'Inactive'
  ];

  // =====================================================
  // FILTERED STRUCTURES
  // =====================================================

  readonly filteredStructures =
    computed(() => {

      const search =
        this.searchTerm()
          .trim()
          .toLowerCase();

      const department =
        this.selectedDepartment();

      const status =
        this.selectedStatus();

      return this.salaryStructures()
        .filter((structure) => {

          const matchesSearch =
            !search ||
            structure.employeeId
              .toLowerCase()
              .includes(search) ||
            structure.employeeName
              .toLowerCase()
              .includes(search);

          const matchesDepartment =
            department === 'All' ||
            structure.department === department;

          const matchesStatus =
            status === 'All' ||
            structure.status === status;

          return (
            matchesSearch &&
            matchesDepartment &&
            matchesStatus
          );
        });
    });

  // =====================================================
  // SEARCH
  // =====================================================

  onSearch(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.searchTerm.set(
      input.value
    );
  }

  // =====================================================
  // DEPARTMENT CHANGE
  // =====================================================

  onDepartmentChange(event: Event): void {

    const select =
      event.target as HTMLSelectElement;

    this.selectedDepartment.set(
      select.value
    );
  }

  // =====================================================
  // STATUS CHANGE
  // =====================================================

  onStatusChange(event: Event): void {

    const select =
      event.target as HTMLSelectElement;

    this.selectedStatus.set(
      select.value
    );
  }

  // =====================================================
  // ADD SALARY STRUCTURE
  // =====================================================

  addSalaryStructure(): void {

    this.isSalaryStructureFormOpen.set(true);
  }

  // =====================================================
  // SALARY STRUCTURE SAVED
  // =====================================================

  onSalaryStructureSaved(
    formData: SalaryStructureFormData
  ): void {

    const totalAllowances =
      formData.hra +
      formData.conveyanceAllowance +
      formData.medicalAllowance +
      formData.specialAllowance;

    const grossSalary =
      formData.basicSalary +
      totalAllowances;

    // ---------------------------------------------------
    // PF
    // ---------------------------------------------------

    const pf =
      formData.pfApplicable
        ? Math.round(
            formData.basicSalary * 0.12
          )
        : 0;

    // ---------------------------------------------------
    // ESI
    // ---------------------------------------------------

    const esi =
      formData.esiApplicable
        ? Math.round(
            grossSalary * 0.0075
          )
        : 0;

    // ---------------------------------------------------
    // PROFESSIONAL TAX
    // ---------------------------------------------------

    const professionalTax =
      formData.professionalTaxApplicable
        ? 200
        : 0;

    // ---------------------------------------------------
    // TDS
    // ---------------------------------------------------

    const tds = formData.tdsApplicable
      ? Math.round(grossSalary * 0.05)
      : 0;

    // ---------------------------------------------------
    // OTHER DEDUCTIONS
    // ---------------------------------------------------

    const otherDeductions = 0;

    // ---------------------------------------------------
    // TOTAL DEDUCTIONS
    // ---------------------------------------------------

    const totalDeductions =
      pf +
      esi +
      professionalTax +
      tds +
      otherDeductions;

    // ---------------------------------------------------
    // NET SALARY
    // ---------------------------------------------------

    const netSalary =
      grossSalary -
      totalDeductions;

    // ---------------------------------------------------
    // NEW SALARY STRUCTURE
    // ---------------------------------------------------

    const newStructure: SalaryStructure = {

      id: this.generateSalaryStructureId(),

      employeeId:
        formData.employeeId,

      employeeName:
        formData.employeeName,

      // Temporary value.
      // Later employee API se department aayega.
      department:
        'Engineering',

      basicSalary:
        formData.basicSalary,

      hra:
        formData.hra,

      conveyanceAllowance:
        formData.conveyanceAllowance,

      medicalAllowance:
        formData.medicalAllowance,

      specialAllowance:
        formData.specialAllowance,

      totalAllowances,

      grossSalary,

      pf,

      esi,

      professionalTax,

      tds,

      otherDeductions,

      totalDeductions,

      netSalary,

      status: 'Active'
    };

    // ---------------------------------------------------
    // ADD TO LIST
    // ---------------------------------------------------

    this.salaryStructures.update(
      (structures) => [
        ...structures,
        newStructure
      ]
    );

    // ---------------------------------------------------
    // CLOSE MODAL
    // ---------------------------------------------------

    this.closeSalaryStructureForm();
  }

  // =====================================================
  // CLOSE SALARY STRUCTURE FORM
  // =====================================================

  closeSalaryStructureForm(): void {

    this.isSalaryStructureFormOpen.set(false);
  }

  // =====================================================
  // EDIT SALARY STRUCTURE
  // =====================================================

  editSalaryStructure(
    structure: SalaryStructure
  ): void {

    console.log(
      'Edit Salary Structure:',
      structure
    );

    // Later:
    // open modal with existing structure data
  }

  // =====================================================
  // GENERATE ID
  // =====================================================

  private generateSalaryStructureId(): string {

    const nextNumber =
      this.salaryStructures().length + 1;

    return `SAL-${String(nextNumber).padStart(3, '0')}`;
  }

  // =====================================================
  // CURRENCY
  // =====================================================

  formatCurrency(
    value: number
  ): string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }
    ).format(value);
  }
}