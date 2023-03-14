import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FacilityComponent } from './component/facility/facility/facility.component';
import { EmployeeComponent } from './component/employee/employee/employee.component';
import { CustomerComponent } from './component/customer/customer/customer.component';
import { HomeComponent } from './component/home/home.component';
import { ContractComponent } from './component/contract/contract/contract.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FacilityComponent,
    EmployeeComponent,
    CustomerComponent,
    HomeComponent,
    ContractComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
