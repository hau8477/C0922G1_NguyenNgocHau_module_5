import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';
import {CustomerType} from '../../../model/customer/customer-type';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  editForm: FormGroup | undefined;
  customer: Customer | null | undefined;
  customerType: CustomerType[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(temp => {
      const id = temp.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.customerService.findById(parseInt(id)).subscribe(data => {
          console.log(data);
          this.customer = data;
          this.editForm = new FormGroup({
            id: new FormControl(this.customer?.id),
            name: new FormControl(this.customer?.name),
            dayOfBirth: new FormControl(this.customer?.dateOfBirth),
            gender: new FormControl(this.customer?.gender),
            idCard: new FormControl(this.customer?.idCard),
            phoneNumber: new FormControl(this.customer?.phoneNumber),
            email: new FormControl(this.customer?.email),
            address: new FormControl(this.customer?.address),
            customerType: new FormControl(this.customer?.customerType)
          });
          console.log(this.editForm.value);
          // tslint:disable-next-line:no-shadowed-variable
          this.customertypeService.getAll().subscribe(data => {
            this.customerType = data;
          }, error => {

          }, () => {
          });
        });
      }
    });
  }

  editCustomer() {
    let customer: Customer;
    customer = this.editForm?.value;
    if (this.editForm?.valid) {
      this.customerService.edit(customer).subscribe(data => {
        this.router.navigateByUrl('/customer/list');
        alert('editd');
      });
    } else {
      alert('Please check the information again');
    }
  }

  compareWith(object1: CustomerType, object2: CustomerType): boolean {
    // tslint:disable-next-line:triple-equals
    return object1 && object2 ? object1.id == object2.id : object1 == object2;
  }

  ngOnInit(): void {
  }
}
