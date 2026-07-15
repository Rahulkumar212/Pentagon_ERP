import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { CreateHiringRequirementPayload, HiringRequirementResponse, HiringRequirementsResponse } from "../models/hiring-requirement.type";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class HiringRequirementService {

    private readonly http = inject(HttpClient)
    private readonly API_URL = environment.apiUrl

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
