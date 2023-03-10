import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;
  countries = ['VietNam', 'USA', 'China'];

  constructor() {
  }

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$'),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),

        (control: AbstractControl) => {
          const password = control.root.get('password');
          return password && control.value !== password.value ? {passwordMismatch: true} : null;
        }
      ]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  // passwordMatchValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');
  //
  //   return password && confirmPassword && password.value !== confirmPassword.value ? {passWordMismatch: true} : null;
  // }

  onSubmit() {
    console.log(this.formSignUp);
  }
}
