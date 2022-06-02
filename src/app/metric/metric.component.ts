import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {
  centimeters: number = 0;
  kilograms: number = 0;

  constructor(private shared: SharedService) { }


  calculate(): void {
    this.shared.setData(this.centimeters,this.kilograms);
  }

  ngOnInit(): void {
    
  }

}
