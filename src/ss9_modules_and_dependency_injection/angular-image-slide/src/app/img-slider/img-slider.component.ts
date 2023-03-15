import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  currentIndex = 0;
  img: string = this.listImage[0];

  constructor() {
  }

  ngOnInit() {
  }

  nextSlide() {
    if (this.currentIndex < this.listImage.length) {
      this.currentIndex++;
      this.img = this.listImage[this.currentIndex];
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.img = this.listImage[this.currentIndex];
    }
  }
}
