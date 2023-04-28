import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = `http://localhost:8080/api/customers`;

  constructor(private http: HttpClient) {
  }

  getAll(nameSearch: string, emailSearch: string, customerTypeId: number): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(this.API_URL + '?nameSearch=' + nameSearch + '&emailSearch=' + emailSearch + '&customerTypeId=' + customerTypeId);
  }

  deleteById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/delete/' + id);
  }
}
