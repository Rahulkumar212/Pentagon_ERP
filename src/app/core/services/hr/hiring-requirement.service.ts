import { Injectable } from '@angular/core';
import {
  CreateHiringRequirementPayload,
  HiringRequirementResponse,
  HiringRequirementsResponse,
  JobApplicationsResponse,
  JobApplicationStatus,
  UpdateJobApplicationSelectionPayload
} from '../../models/hr/hiring-requirement.type';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class HiringRequirementService extends BaseApiService {

  // =====================================================
  // CREATE HIRING REQUIREMENT
  // =====================================================

  createHiringRequirement(
    payload: CreateHiringRequirementPayload
  ): Observable<HiringRequirementResponse> {
    return this.http.post<HiringRequirementResponse>(
      `${this.API_URL}/hiring/create`,
      payload
    );
  }

  // =====================================================
  // GET HIRING REQUIREMENTS
  // =====================================================

  getHiringRequirements(): Observable<HiringRequirementsResponse> {
    return this.http.get<HiringRequirementsResponse>(
      `${this.API_URL}/fetchhiring`
    );
  }

  // =====================================================
  // GET ALL JOB APPLICATIONS
  // =====================================================

  getAllJobApplications(): Observable<JobApplicationsResponse> {
    return this.http.get<JobApplicationsResponse>(
      `${this.API_URL}/jobApplication`
    );
  }

  // =====================================================
  // GET JOB APPLICATION CV
  // =====================================================

  getJobApplicationCv(
    id: number
  ): Observable<Blob> {
    return this.http.get(
      `${this.API_URL}/jobApplication/${id}/cv`,
      {
        responseType: 'blob'
      }
    );
  }

  // =====================================================
  // UPDATE JOB APPLICATION SELECTION
  // =====================================================

  updateJobApplicationSelection(
    id: number,
    payload: UpdateJobApplicationSelectionPayload
  ): Observable<any> {
    return this.http.patch(
      `${this.API_URL}/updatejobApplication/${id}`,
      payload
    );
  }

  // =====================================================
  // FILTER JOB APPLICATIONS
  // =====================================================

  filterJobApplications(
    status: JobApplicationStatus
  ): Observable<JobApplicationsResponse> {
    return this.http.get<JobApplicationsResponse>(
      `${this.API_URL}/filterjobApplication`,
      {
        params: {
          status
        }
      }
    );
  }
}