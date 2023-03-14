import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.API_URL + '/' + id, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.API_URL + '/' + id);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
