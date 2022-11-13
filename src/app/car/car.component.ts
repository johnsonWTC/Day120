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


  hide = false;
  Hide = "Button From Ts";
  
  HideAndShowButton(){
    this.hide = ! this.hide;
  }


  cars : Car[] = [
    {
      carType: "BMW",
      doorCalor: "Red",
      wheelSize: 10
    }, {
      carType: "Figo",
      doorCalor: "blue",
      wheelSize: 25
    },
    {
      carType: "Polo",
      doorCalor: "white",
      wheelSize: 20
    }
    , {
      carType: "Mazda",
      doorCalor: "Red",
      wheelSize: 20
    }
] 

}
