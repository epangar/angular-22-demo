import { Component } from '@angular/core';

interface Num {
  value:number;
  id:string;
}
@Component({
  imports: [],
  selector: 'app-for',
  styleUrl: './for.scss',
  templateUrl: './for.html',
})
export class For {

  numArray: number[];

  constructor(){
    this.numArray=this.fillNumArray()
  }

  fillNumArray(): number[]{
    return new Array(50)
    .fill(0).map((e:number, p:number)=>p+1)
  }
}
