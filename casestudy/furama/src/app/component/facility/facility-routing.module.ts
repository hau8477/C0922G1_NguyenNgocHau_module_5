import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityComponent} from './facility/facility.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';


const routes: Routes = [
  {
    path: 'list',
    component: FacilityComponent
  },
  {
    path: 'create',
    component: FacilityCreateComponent
  },
  {
    path: 'edit',
    component: FacilityEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
