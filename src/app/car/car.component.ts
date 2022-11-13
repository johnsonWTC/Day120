import { Component, OnInit } from '@angular/core';


export interface Car{
  doorCalor : string,
  wheelSize : number,
  carType : string
  
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
