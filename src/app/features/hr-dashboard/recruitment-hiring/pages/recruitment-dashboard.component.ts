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
  RecruitmentHeaderComponent
} from '../components/recruitment-header/recruitment-header.component';

import {
  RequisitionCardComponent
} from '../components/requisition-card/requisition-card.component';

import {
  HiringPipelineComponent
} from '../components/hiring-pipeline/hiring-pipeline.component';

import {
  RequisitionFormComponent
} from '../components/requisition-form/requisition-form.component';

import {
  HiringRequirementService
} from '../../../../core/services/hiring-requirement.service';

import {
  HiringRequirementsResponse,
  CreateHiringRequirementPayload,
  HiringRequirement
} from '../../../../core/models/hiring-requirement.type';

@Component({
  selector: 'app-recruitment-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RecruitmentHeaderComponent,
    RequisitionCardComponent,
    HiringPipelineComponent,
    RequisitionFormComponent
  ],
  templateUrl: './recruitment-dashboard.component.html'
})
export class RecruitmentDashboardComponent
  implements OnInit {

  private readonly hiringRequirementService =
    inject(HiringRequirementService);

    private readonly cdr =
  inject(ChangeDetectorRef);

  // ==========================
  // Modal
  // ==========================

  showRequisitionForm =
    signal(false);

  // ==========================
  // Tabs
  // ==========================

  selectedTab =
    'Job Requisitions';

  // ==========================
  // Data
  // ==========================

 jobs: HiringRequirement[] = [];

filteredJobs: HiringRequirement[] = [];

  // ==========================
  // Init
  // ==========================

  ngOnInit(): void {

    this.loadHiringRequirements();

  }

  // ==========================
  // Load Hiring Requirements
  // ==========================

  loadHiringRequirements(): void {

    this.hiringRequirementService
      .getHiringRequirements()
      .subscribe({

        next: (
          response: HiringRequirementsResponse
        ) => {

          this.jobs =
            response.data;

          this.filteredJobs =
            [...this.jobs];

             this.cdr.detectChanges();

        },

        error: err => {

          console.error(
            'Failed to load hiring requirements',
            err
          );

        }

      });

  }

  // ==========================
  // Header Tabs
  // ==========================

  onTabChange(
    tab: string
  ): void {

    this.selectedTab =
      tab;

  }

  // ==========================
  // Search
  // ==========================

  onSearch(
    keyword: string
  ): void {

    const value =
      keyword.trim().toLowerCase();

    if (!value) {

      this.filteredJobs =
        [...this.jobs];

      return;

    }

    this.filteredJobs =
      this.jobs.filter(job =>

        job.jobTitle
          .toLowerCase()
          .includes(value)

        ||

        job.department
          .toLowerCase()
          .includes(value)

        ||

        String(job.id)
          .includes(value)

      );

  }

  // ==========================
  // Raise Requisition
  // ==========================

  onRaiseRequisition(): void {

    this.openRequisitionModal();

  }

  // ==========================
  // Open Modal
  // ==========================

  openRequisitionModal(): void {

    this.showRequisitionForm
      .set(true);

  }

  // ==========================
  // Close Modal
  // ==========================

  closeRequisitionModal(): void {

    this.showRequisitionForm
      .set(false);

  }

  // ==========================
  // Submit Requisition
  // ==========================

  submitRequisition(
    data: CreateHiringRequirementPayload
  ): void {

    const payload:
      CreateHiringRequirementPayload = {

      jobTitle:
        data.jobTitle,

      department:
        data.department,

      employmentType:
        data.employmentType,

      description:
        data.description

    };

    this.hiringRequirementService
      .createHiringRequirement(payload)
      .subscribe({

        next: () => {

          this.closeRequisitionModal();

          this.loadHiringRequirements();

        },

        error: err => {

          console.error(
            'Failed to create hiring requirement',
            err
          );

        }

      });

  }

  // ==========================
  // Candidate List
  // ==========================

  openCandidateList(
  job: HiringRequirement
): void {

    console.log(job);

    this.selectedTab =
      'Hiring Pipeline';

  }

}