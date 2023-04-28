import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = 'http://localhost:3000/products';

  // http://localhost:3000/products?_page=1&_limit=5&name_like=iphone&category.id=2
  constructor(private http: HttpClient) {
  }

  getAllAndCategoryId(page: number, limit: number, nameSearch: string, categoryId: number): Observable<Product[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Product[]>(this.API_URL + '?_page=' + page + '&_limit=' + limit + '&name_like=' + nameSearch + '&category.id=' + categoryId);
  }

  getAll(page: number, limit: number, nameSearch: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL + '?_page=' + page + '&_limit=' + limit + '&name_like=' + nameSearch);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.API_URL + '/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + '/' + id);
  }
}
