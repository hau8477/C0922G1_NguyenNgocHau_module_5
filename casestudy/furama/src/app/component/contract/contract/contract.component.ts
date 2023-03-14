import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../model/contract/contract';
import {Customer} from '../../../model/customer/customer';
import {Facility} from '../../../model/facility/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  reactiveForm: FormGroup;
  contract: Contract;
  formAddContract: FormGroup;


  constructor(private contractService: ContractService, private router: Router,
              private customerService: CustomerService, private facilityService: FacilityService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data => {
      this.contractList = data;
      console.log(this.contractList);
    });
    this.customerService.getAll().subscribe(data => {
      this.customerList = data;
    });
    this.facilityService.getAll().subscribe(data => {
      this.facilityList = data;
    });
  }

  create() {
    this.contract = this.reactiveForm.value;
    if (this.reactiveForm.valid) {
      const temp = this.contractService.create(this.contract).subscribe(ok => {
        if (temp != null && ok) {
          alert('Đã thêm mới thành công');
        }
        this.ngOnInit();
      });
    } else {
      alert('Thêm mới không thành công ');
    }
  }
}
