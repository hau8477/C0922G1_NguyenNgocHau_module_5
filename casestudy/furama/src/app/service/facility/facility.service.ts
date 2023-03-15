import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  API_URL = 'http://localhost:8080/api/facilities';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.API_URL);
  }
}
