import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FacilityModule} from '../facility/facility.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FacilityModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class CustomerModule { }
