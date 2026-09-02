import {
  Component,
  OnInit,
  signal,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Candidate,
  PipelineColumn,
  JobApplication,
  JobApplicationsResponse,
  UpdateJobApplicationSelectionPayload,
  JobApplicationStatus
} from '../../../../../core/models/hr/hiring-requirement.type';

import { HiringRequirementService } from '../../../../../core/services/hr/hiring-requirement.service';

@Component({
  selector: 'app-hiring-pipeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring-pipeline.component.html'
})
export class HiringPipelineComponent implements OnInit {

  private readonly hiringRequirementService =
    inject(HiringRequirementService);

  // =====================================================
  // PIPELINE
  // =====================================================

  pipeline = signal<PipelineColumn[]>([
    {
      title: 'SCREENED',
      candidates: []
    },
    {
      title: 'INTERVIEW',
      candidates: []
    },
    {
      title: 'OFFER',
      candidates: []
    },
    {
      title: 'BACKGROUND CHECK',
      candidates: []
    }
  ]);

  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {
    this.loadJobApplications();
  }

  // =====================================================
  // LOAD APPLICATIONS
  // =====================================================

  loadJobApplications(): void {

    this.hiringRequirementService
      .getAllJobApplications()
      .subscribe({

        next: (response: JobApplicationsResponse) => {

          console.log(
            'Job Applications Response:',
            response
          );

          if (!response?.data?.length) {

            console.warn(
              'No job applications found'
            );

            this.clearPipeline();

            return;
          }

          const candidates: Candidate[] =
            response.data.map(
              (application: JobApplication) => {

                return {
                  id: application.id,
                  name: application.candidateName,
                  designation: 'Candidate',
                  experience: 'Not specified',
                  score: 0,
                  cvUrl: ''
                };
              }
            );

          /*
           * First time every candidate
           * SCREENED mein rahega.
           */

          this.pipeline.set([
            {
              title: 'SCREENED',
              candidates
            },
            {
              title: 'INTERVIEW',
              candidates: []
            },
            {
              title: 'OFFER',
              candidates: []
            },
            {
              title: 'BACKGROUND CHECK',
              candidates: []
            }
          ]);
        },

        error: (error) => {

          console.error(
            'Failed to load job applications:',
            error
          );

        }

      });
  }

  moveForward(
  columnIndex: number,
  candidateIndex: number
): void {
  const columns = this.pipeline();

  if (
    columnIndex < 0 ||
    columnIndex >= columns.length - 1
  ) {
    return;
  }

  const candidate =
    columns[columnIndex]?.candidates[candidateIndex];

  if (!candidate) {
    return;
  }

  let nextStatus: JobApplicationStatus;

  switch (columnIndex) {
    case 0:
      // SCREENED → INTERVIEW
      nextStatus = 'INTERVIEW';
      break;

    case 1:
      // INTERVIEW → OFFER
      nextStatus = 'OFFER';
      break;

    case 2:
      // OFFER → BACKGROUND CHECK
      nextStatus = 'BACKGROUND_CHECK';
      break;

    default:
      return;
  }

  const payload: UpdateJobApplicationSelectionPayload = {
    status: nextStatus
  };

  this.hiringRequirementService
    .updateJobApplicationSelection(
      candidate.id,
      payload
    )
    .subscribe({
      next: (response) => {
        console.log(
          'Candidate advanced successfully:',
          response
        );

        this.moveCandidateToNextColumn(
          columnIndex,
          candidateIndex
        );
      },

      error: (error) => {
        console.error(
          'Failed to advance candidate:',
          error
        );
      }
    });
}


  // =====================================================
  // MOVE CANDIDATE IN UI
  // =====================================================

  private moveCandidateToNextColumn(
    columnIndex: number,
    candidateIndex: number
  ): void {

    this.pipeline.update(columns => {

      const newColumns =
        structuredClone(columns);

      const candidate =
        newColumns[columnIndex]
          ?.candidates
          .splice(candidateIndex, 1)[0];

      if (!candidate) {
        return newColumns;
      }

      newColumns[columnIndex + 1]
        .candidates
        .push(candidate);

      return newColumns;
    });

  }

  // =====================================================
  // REJECT
  // =====================================================

  moveBackward(
    columnIndex: number,
    candidateIndex: number
  ): void {

    /*
     * IMPORTANT:
     *
     * Reject par koi PATCH API call nahi hogi.
     *
     * Sirf UI se candidate remove hoga.
     */

    this.pipeline.update(columns => {

      const newColumns =
        structuredClone(columns);

      newColumns[columnIndex]
        ?.candidates
        .splice(candidateIndex, 1);

      return newColumns;
    });

  }

  // =====================================================
  // HIRE
  // =====================================================

  hireCandidate(
    candidate: Candidate
  ): void {

    /*
     * BACKGROUND CHECK ke baad Hire click hoga.
     *
     * Yahan tum candidate ko next page par bhejna chahte ho.
     */

    console.log(
      'Hiring candidate:',
      candidate
    );

    // TODO:
    // Yahan Angular Router se next page par navigate karna hai.
  }

  // =====================================================
  // VIEW CV
  // =====================================================

  viewCV(
    applicationId: number
  ): void {

    this.hiringRequirementService
      .getJobApplicationCv(applicationId)
      .subscribe({

        next: (blob) => {

          const url =
            URL.createObjectURL(blob);

          window.open(
            url,
            '_blank',
            'noopener,noreferrer'
          );

        },

        error: (error) => {

          console.error(
            'Failed to load CV:',
            error
          );

        }

      });
  }

  // =====================================================
  // CLEAR PIPELINE
  // =====================================================

  private clearPipeline(): void {

    this.pipeline.set([
      {
        title: 'SCREENED',
        candidates: []
      },
      {
        title: 'INTERVIEW',
        candidates: []
      },
      {
        title: 'OFFER',
        candidates: []
      },
      {
        title: 'BACKGROUND CHECK',
        candidates: []
      }
    ]);

  }
}