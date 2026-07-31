import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  protected readonly http =
    inject(HttpClient);

  protected readonly API_URL =
    environment.apiUrl;

}