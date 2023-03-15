import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ContractModule} from '../contract/contract.module';
import {FacilityModule} from '../facility/facility.module';
import {CustomerModule} from '../customer/customer.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}
