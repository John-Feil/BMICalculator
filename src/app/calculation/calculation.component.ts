import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {
  bmi : number = 0;
  height: number = 0;
  weight: number = 0;
  feet: number = 0;
  inches: number = 0;
  pounds: number = 0;
  category: number | null = null;
  featured: number | null = null;
  english: number = 0;
  constructor(private shared: SharedService) { 
  }

  retrieveData(): void {
    this.english = this.shared.getEnglish();
    this.height = this.shared.getHeight();
    this.weight = this.shared.getWeight();
    this.feet = this.shared.getFeet();
    this.inches = this.shared.getInches();
    this.pounds = this.shared.getPounds();
  }

  bmiCategorize(): void {
    switch(true) {
      case(this.bmi < 10.0):
        this.category = 0;
        break;
      case(this.bmi < 18.6):
        this.category = 1;
        this.featured = 1;
        break;
      case(this.bmi < 25.0):
        this.category = 2;
        this.featured = 2;
        break;
      case(this.bmi < 30.0):
        this.category = 3;
        this.featured = 3;
        break;
      case(this.bmi < 150.0):
        this.category = 4;
        this.featured = 4;
        break;
      default:
        this.category = 0;
        break;
    }
  }

  bmiCalculator(): void{
    this.retrieveData();
    this.bmi = (this.weight / this.height / this.height)  * 10000;
    this.bmi = Number(this.bmi.toFixed(2));
    this.bmiCategorize();
  }


  ngOnInit(): void {
    this.bmiCalculator();
  }

}
