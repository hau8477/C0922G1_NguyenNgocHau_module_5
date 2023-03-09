import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;

  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }

  calculate(max, ratingValue) {
    // Tạo ra 10 phần tử
    // từ i+1 đến max
    // active true true true true true false false false false false
    for (let i = 0; i < max; i++) {
      this.ratingUnits[i] = {
        value: i + 1,
        active: i < ratingValue
      };
    }
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index + 1;
    this.reset();
  }

  enter(index) {
    for (let i = 0; i < this.max; i++) {
      this.ratingUnits[i].active = i <= index;
    }
  }

  reset() {
    for (let i = 0; i < this.max; i++) {
      this.ratingUnits[i].active = i < this.ratingValue;
    }
  }

}
