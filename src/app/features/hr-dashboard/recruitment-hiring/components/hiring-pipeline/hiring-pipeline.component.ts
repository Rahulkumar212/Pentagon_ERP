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
  JobApplicationsResponse
} from '../../../../../core/models/hr/hiring-requirement.type';
import { HiringRequirementService } from '../../../../../core/services/hr/hiring-requirement.service';


@Component({
  selector: 'app-hiring-pipeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring-pipeline.component.html'
})
export class HiringPipelineComponent implements OnInit {

  private readonly hiringRequirementService = inject(
    HiringRequirementService
  );

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

            return;
          }

          console.log(
            'Applications:',
            response.data
          );

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

          this.pipeline.update((columns) => {

            const newColumns = structuredClone(columns);

            /*
             * Currently API response doesn't contain
             * application stage/status.
             *
             * So every new application will be shown
             * under SCREENED.
             */

            newColumns[0].candidates = candidates;

            return newColumns;
          });

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

    this.pipeline.update((columns) => {

      const newColumns = structuredClone(columns);

      if (
        columnIndex >=
        newColumns.length - 1
      ) {
        return newColumns;
      }

      const candidate =
        newColumns[columnIndex]
          .candidates
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

  moveBackward(
    columnIndex: number,
    candidateIndex: number
  ): void {

    this.pipeline.update((columns) => {

      const newColumns = structuredClone(columns);

      if (columnIndex <= 0) {
        return newColumns;
      }

      const candidate =
        newColumns[columnIndex]
          .candidates
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

  viewCV(applicationId: number): void {

  this.hiringRequirementService
    .getJobApplicationCv(applicationId)
    .subscribe({
      next: (blob) => {

        const url = URL.createObjectURL(blob);

        window.open(
          url,
          '_blank',
          'noopener,noreferrer'
        );

      },

      error: (error) => {
        console.error('Failed to load CV:', error);
      }
    });
}
}