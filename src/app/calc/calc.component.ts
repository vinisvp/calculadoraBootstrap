import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  operator: string = "#";

  sum(){
    this.result = this.num1 + this.num2;
    this.operator = "+";
  }

  sub(){
    this.result = this.num1 - this.num2;
    this.operator = "-";
  }

  mult(){
    this.result = this.num1 * this.num2;
    this.operator = "X";
  }

  div(){
    this.result = this.num1 / this.num2;
    this.operator = "÷";
  }

  pow(){
    this.result = this.num1 ** this.num2;
    this.operator = "^";
  }

  por(){
    this.result = this.num1 * (this.num2 / 100);
    this.operator = "%";
  }
}
