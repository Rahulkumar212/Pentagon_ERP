import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentHeaderComponent } from '../components/recruitment-header/recruitment-header.component';
import { RequisitionCardComponent } from '../components/requisition-card/requisition-card.component';
import { HiringPipelineComponent } from '../components/hiring-pipeline/hiring-pipeline.component';
import {
  RequisitionFormComponent,
  RequisitionFormData
} from '../components/requisition-form/requisition-form.component';

import { JobRequisition } from '../../../../core/models/recruitment.type';

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
export class RecruitmentDashboardComponent {

  // ==========================
  // Modal State
  // ==========================

  showRequisitionForm = signal(false);

  // ==========================
  // Active Tab
  // ==========================

  selectedTab = 'Job Requisitions';

  // ==========================
  // Dummy Data
  // ==========================

  jobs: JobRequisition[] = [
    {
      id: 'REQ-ENG-098',
      title: 'Senior React Developer',
      department: 'Engineering',
      employmentType: 'Full-time',
      description:
        'We are looking for a Senior React Developer to join our core UI team. Experience with React 19, TypeScript, Tailwind CSS and state management is required.',
      status: 'OPEN',
      candidates: 14,
      postedDate: '2026-06-15'
    },
    {
      id: 'REQ-PROD-054',
      title: 'Product Designer (UX/UI)',
      department: 'Product',
      employmentType: 'Full-time',
      description:
        'Seeking a creative UX/UI designer capable of mapping complex user workflows into clean, human-centered designs.',
      status: 'OPEN',
      candidates: 8,
      postedDate: '2026-06-18'
    },
    {
      id: 'REQ-MKT-112',
      title: 'Sales Executive',
      department: 'Sales & Marketing',
      employmentType: 'Full-time',
      description:
        'Drive regional enterprise software sales. Strong pipeline management and software negotiation skills required.',
      status: 'CLOSED',
      candidates: 22,
      postedDate: '2026-05-16'
    },
    {
      id: 'REQ-ENG-121',
      title: 'AI Engineering Specialist',
      department: 'Engineering',
      employmentType: 'Remote',
      description:
        'Looking for a specialized developer experienced in LLM orchestration, prompt engineering and backend AI services.',
      status: 'DRAFT',
      candidates: 0,
      postedDate: '2026-06-25'
    }
  ];

  filteredJobs: JobRequisition[] = [...this.jobs];

  // ==========================
  // Header Tabs
  // ==========================

  onTabChange(tab: string): void {
    this.selectedTab = tab;
  }

  // ==========================
  // Search
  // ==========================

  onSearch(keyword: string): void {

    const value = keyword.trim().toLowerCase();

    if (!value) {
      this.filteredJobs = [...this.jobs];
      return;
    }

    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(value) ||
      job.department.toLowerCase().includes(value) ||
      job.id.toLowerCase().includes(value)
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
    this.showRequisitionForm.set(true);
    console.log(this.showRequisitionForm());
  }

  // ==========================
  // Close Modal
  // ==========================

  closeRequisitionModal(): void {
    this.showRequisitionForm.set(false);
  }

  // ==========================
  // Submit Form
  // ==========================

  submitRequisition(data: RequisitionFormData): void {

    const newJob: JobRequisition = {

      id: `REQ-${Date.now()}`,

      title: data.title,

      department: data.department,

      employmentType: data.employmentType,

      description: data.description,

      status: 'OPEN',

      candidates: 0,

      postedDate: new Date().toISOString().split('T')[0]

    };

    this.jobs.unshift(newJob);

    this.filteredJobs = [...this.jobs];

    this.closeRequisitionModal();
  }

  // ==========================
  // Candidate List
  // ==========================

  openCandidateList(job: JobRequisition): void {
     this.selectedTab = 'Hiring Pipeline';
  }

}