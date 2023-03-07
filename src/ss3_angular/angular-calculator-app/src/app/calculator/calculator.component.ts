import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  result: any;
  inputValid: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAddition() {
    this.result = this.number1 + this.number2;
  }

  getSubtraction() {
    this.result = this.number1 - this.number2;
  }

  getMultiplication() {
    this.result = this.number1 * this.number2;
  }

  getDivision() {
    if (this.number2 === 0) {
      this.result = 'Lỗi, không thể chia cho 0';
    } else {
      this.result = this.number1 / this.number2;
    }
  }

  canCalculate(): boolean {
    return (this.number1 !== undefined && this.number1 !== null && !isNaN(this.number1))
      && (this.number2 !== undefined && this.number2 !== null && !isNaN(this.number2));
  }
}
