import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl, FormGroup, Validator} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Observable} from 'rxjs';
import {ok} from 'assert';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  toggleTodo(todo: Todo) {
    this.todoService.findById(todo.id).subscribe(next => {
      next.complete = !todo.complete;
      return this.todoService.updateTodo(todo.id, next).subscribe(next1 => {
        console.log(next1);
        this.getAll();
      }, error => {
        console.log(error);
      });
    });
  }


  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(next => {
        console.log(next);
        this.content.reset();
        this.getAll();
      }, error => {
        console.log(error);
      });
    }
  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  delete(id: number) {
    this.todoService.findById(id).subscribe(next => {
      this.todoService.deleteTodo(next.id).subscribe(next1 => {
        console.log(next1);
        alert('Xóa thành công');
        this.getAll();
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }
}
