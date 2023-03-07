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
    ContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
