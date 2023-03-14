import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  contentForm;
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }

  getTodo(id: number) {
    this.contentForm = new FormGroup({
      content: new FormControl(),
      id: new FormControl(),
      complete: new FormControl(),
    });
    this.todoService.findById(id).subscribe(next => {
      console.log(next.content);
      if (next) {
        this.contentForm.patchValue({
          content: next.content,
          id: next.id,
          complete: next.complete
        });
      }
    });
  }

  submit() {
    const todo = this.contentForm.value;
    this.todoService.findById(todo.id).subscribe(todoNew => {
      this.todoService.updateTodo(todoNew.id, todo).subscribe(next => {
        console.log(next);
        this.contentForm.reset();
        location.reload();
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }
}
