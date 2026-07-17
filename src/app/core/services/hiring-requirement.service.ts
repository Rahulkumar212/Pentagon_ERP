import { Injectable } from "@angular/core";
import { CreateHiringRequirementPayload, HiringRequirementResponse, HiringRequirementsResponse } from "../models/hiring-requirement.type";
import { Observable } from "rxjs";
import { BaseApiService } from "./base-api.service";

@Injectable({providedIn:'root'})

export class HiringRequirementService extends BaseApiService {

    createHiringRequirement(
       payload: CreateHiringRequirementPayload
    ): Observable<HiringRequirementResponse> {

        return this.http.post<HiringRequirementResponse>(
            `${this.API_URL}/hiring/create`,
            payload
        )
    }

    getHiringRequirements():Observable<HiringRequirementsResponse> {
     return this.http.get<HiringRequirementsResponse>(
        `${this.API_URL}/fetchhiring`
     )
    }
}
