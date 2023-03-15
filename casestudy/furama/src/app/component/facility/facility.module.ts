import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {FacilityComponent} from './facility/facility.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';


@NgModule({
  declarations: [
    FacilityComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
  ],
  exports: [
    FacilityEditComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule {
}
