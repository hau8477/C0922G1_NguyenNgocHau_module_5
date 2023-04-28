import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerType} from '../../model/customer/customer-type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API_URL = `http://localhost:8080/api/customerType`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_URL);
  }
}
