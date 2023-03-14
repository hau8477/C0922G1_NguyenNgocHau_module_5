import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  formCreate: FormGroup;
  customerType: CustomerType[];

  constructor() {
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z')]),
      gender: new FormControl(''),
      dayOfBirth: new FormControl('', this.checkDayOfBirth),
      idCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}|[0-9]{12}')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0][0-9]{9}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      customerType: new FormControl('')
    });
  }

  checkDayOfBirth(abstractControl: AbstractControl): any {
    const dayOfBirth = new Date(abstractControl.value).getFullYear();
    const now = new Date().getFullYear();
    return (now - dayOfBirth >= 18) ? null : {invalid: true};
  }
}
