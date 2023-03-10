import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formLogIn: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formLogIn = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$'),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    console.log(this.formLogIn);
  }
}
