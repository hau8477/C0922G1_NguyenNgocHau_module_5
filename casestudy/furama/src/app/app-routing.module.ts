import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {EmployeeComponent} from './component/employee/employee/employee.component';
import {CustomerComponent} from './component/customer/customer/customer.component';
import {FacilityComponent} from './component/facility/facility/facility.component';
import {ContractComponent} from './component/contract/contract/contract.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'contract', component: ContractComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
