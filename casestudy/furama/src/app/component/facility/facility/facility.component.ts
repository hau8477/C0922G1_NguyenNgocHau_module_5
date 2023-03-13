import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../model/facility/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[];

  constructor() { }

  ngOnInit(): void {
  }

}
