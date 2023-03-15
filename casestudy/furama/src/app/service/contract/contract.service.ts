import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API_URL = 'http://localhost:8080/api/contracts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_URL);
  }
}
