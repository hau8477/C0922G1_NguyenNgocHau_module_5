import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';
import {CustomerType} from '../../../model/customer/customer-type';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  nameSearch = '';
  emailSearch = '';
  customerTypeId = 0;
  formSearch: FormGroup;
  customerTypes: CustomerType[];
  page = 1;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      nameSearch: new FormControl(''),
      emailSearch: new FormControl(''),
      customerTypeId: new FormControl('')
    });
    this.getAll();
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  getAll() {
    this.customerService.getAll( this.nameSearch, this.emailSearch, this.customerTypeId).subscribe(customers => {
      this.customers = customers;
    });
  }

  getInfo(name: string, id: number) {
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Bạn có chắc chắn muốn xóa ' + name + '?',
      text: 'Bạn không thể hoàn tác điều này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Thoát!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteById(id).subscribe(next => {
          swalWithBootstrapButtons.fire(
            'Xóa thành công!',
            'Bạn đã xóa 1 khách hàng.',
            'success'
          );
          this.getAll();
        }, error => {
          swalWithBootstrapButtons.fire({
              title: 'Xóa không thành công!',
              text: 'Đã có lỗi xảy ra, không thể xóa được!!',
              icon: 'error'
            }
          );
          console.log(error);
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    });
  }

  submitSearch() {
    this.nameSearch = this.formSearch.get('nameSearch').value;
    this.emailSearch = this.formSearch.get('emailSearch').value;
    this.customerTypeId = this.formSearch.get('customerTypeId').value;
    console.log(this.nameSearch);
    console.log(this.emailSearch);
    console.log(this.customerTypeId);
    this.formSearch.patchValue({
      nameSearch: this.nameSearch,
      emailSearch: this.emailSearch,
      customerTypeId: this.customerTypeId
    });

    this.customerService.getAll(this.nameSearch, this.emailSearch, this.customerTypeId).subscribe(customers => {
      this.customers = customers.content;
    });
  }
}
