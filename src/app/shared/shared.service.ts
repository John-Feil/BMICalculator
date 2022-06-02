import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  height:number = 0;
  weight:number = 0;
  feet:number = 0;
  inches:number = 0;
  pounds:number = 0;
  english:number = 0;
  constructor() { }

  setData(data:number,data2:number){
    this.height=data;
    this.weight=data2;
    this.english = 0;
  }

  setDataEnglish(data:number,data2:number,data3:number){
    this.feet=data;
    this.inches=data2;
    this.pounds=data3
    this.english = 1;
    this.height = this.feet * 30.48 + this.inches * 2.54;
    this.weight = this.pounds * 0.45;
  }

  getHeight(): number{
    return this.height;
  }

  getWeight(): number{
    return this.weight;
  }

  getFeet(): number{
    return this.feet;
  }

  getInches(): number{
    return this.inches;
  }

  getPounds(): number{
    return this.pounds;
  }
  
  getEnglish(): number{
    return this.english;
  }
}
