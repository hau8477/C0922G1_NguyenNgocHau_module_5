import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

}
