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

          // =====================================================
          // CREATE PIPELINE COLUMNS
          // =====================================================

          const screened: Candidate[] = [];
          const interview: Candidate[] = [];
          const offer: Candidate[] = [];
          const backgroundCheck: Candidate[] = [];

          // =====================================================
          // MAP API DATA
          // =====================================================

          response.data.forEach(
            (application: JobApplication) => {

              const candidate: Candidate = {

                id: application.id,

                name:
                  application.candidateName,

                designation:
                  application.hiringRequirement
                    ?.jobTitle || 'Candidate',

                email:
                  application.email || 'No email',

                experience:
                  'Not specified',

                score: 0,

                cvUrl:
                  application.cvUrl || '',

                status:
                  application.status

              };

              // =================================================
              // STATUS → PIPELINE COLUMN
              // =================================================

              switch (application.status) {

                case 'SCREENED':
                  screened.push(candidate);
                  break;

                case 'INTERVIEW':
                  interview.push(candidate);
                  break;

                case 'OFFER':
                  offer.push(candidate);
                  break;

                case 'BACKGROUND_CHECK':
                  backgroundCheck.push(candidate);
                  break;

                case 'HIRED':
                  // Hired candidate pipeline me nahi dikhana
                  break;

                case 'REJECTED':
                  // Rejected candidate bhi pipeline me nahi dikhana
                  break;

                default:
                  // Agar status undefined/null hai
                  screened.push(candidate);
                  break;
              }

            }
          );

          // =====================================================
          // SET PIPELINE
          // =====================================================

          this.pipeline.set([

            {
              title: 'SCREENED',
              candidates: screened
            },

            {
              title: 'INTERVIEW',
              candidates: interview
            },

            {
              title: 'OFFER',
              candidates: offer
            },

            {
              title: 'BACKGROUND CHECK',
              candidates: backgroundCheck
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

  private moveCandidateToPreviousColumn(
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

      newColumns[columnIndex - 1]
        .candidates
        .push(candidate);

      return newColumns;
    });
  }

  moveBackward(
    columnIndex: number,
    candidateIndex: number
  ): void {

    const columns = this.pipeline();

    const candidate =
      columns[columnIndex]?.candidates[candidateIndex];

    if (!candidate) {
      return;
    }

    // =====================================================
    // SCREENED → DELETE CANDIDATE
    // =====================================================

    if (columnIndex === 0) {

      this.hiringRequirementService
        .deleteJobApplication(candidate.id)
        .subscribe({

          next: () => {

            console.log(
              'Candidate deleted successfully'
            );

            this.pipeline.update(columns => {

              const newColumns =
                structuredClone(columns);

              newColumns[0]
                .candidates
                .splice(candidateIndex, 1);

              return newColumns;
            });

          },

          error: (error) => {

            console.error(
              'Failed to delete candidate:',
              error
            );

          }

        });

      return;
    }

    // =====================================================
    // LATER STAGES → MOVE BACKWARD
    // =====================================================

    let previousStatus: JobApplicationStatus;

    switch (columnIndex) {

      case 1:
        // INTERVIEW → SCREENED
        previousStatus = 'SCREENED';
        break;

      case 2:
        // OFFER → INTERVIEW
        previousStatus = 'INTERVIEW';
        break;

      case 3:
        // BACKGROUND CHECK → OFFER
        previousStatus = 'OFFER';
        break;

      default:
        return;
    }

    const payload: UpdateJobApplicationSelectionPayload = {
      status: previousStatus
    };

    this.hiringRequirementService
      .updateJobApplicationSelection(
        candidate.id,
        payload
      )
      .subscribe({

        next: (response) => {

          console.log(
            'Candidate moved backward successfully:',
            response
          );

          this.moveCandidateToPreviousColumn(
            columnIndex,
            candidateIndex
          );

        },

        error: (error) => {

          console.error(
            'Failed to move candidate backward:',
            error
          );

        }

      });
  }



  private removeCandidateFromPipeline(
    candidateId: number
  ): void {

    this.pipeline.update(columns => {

      const newColumns =
        structuredClone(columns);

      newColumns.forEach(column => {

        column.candidates =
          column.candidates.filter(
            candidate =>
              candidate.id !== candidateId
          );

      });

      return newColumns;

    });

  }

  // =====================================================
  // HIRE
  // =====================================================

  hireCandidate(
    candidate: Candidate
  ): void {

    const payload: UpdateJobApplicationSelectionPayload = {
      status: 'HIRED'
    };

    this.hiringRequirementService
      .updateJobApplicationSelection(
        candidate.id,
        payload
      )
      .subscribe({

        next: (response) => {

          console.log(
            'Candidate hired successfully:',
            response
          );

          // API success ke baad pipeline se candidate remove
          this.removeCandidateFromPipeline(candidate.id);

        },

        error: (error) => {

          console.error(
            'Failed to hire candidate:',
            error
          );

        }

      });
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