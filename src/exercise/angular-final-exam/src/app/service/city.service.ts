import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  API_URL = `http://localhost:3000/city`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(this.API_URL);
  }
}
