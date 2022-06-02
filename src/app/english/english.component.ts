import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  feet: number = 0;
  inches: number = 0;
  pounds: number = 0;
  height: number = 0;
  weight: number = 0;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.shared.setDataEnglish(this.feet,this.inches,this.pounds);
  }

}
