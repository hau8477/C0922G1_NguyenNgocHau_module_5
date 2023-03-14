import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = `http://localhost:3000/categories`;

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(this.API_URL, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${(this.API_URL)}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${(this.API_URL)}/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.API_URL}/${id}`);
  }
}
