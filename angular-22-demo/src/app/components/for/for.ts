import { Component } from '@angular/core';

interface Num {
  value:number;
  color:string;
}
@Component({
  imports: [],
  selector: 'app-for',
  styleUrl: './for.scss',
  templateUrl: './for.html',
})
export class For {

  numArray: Num[];

  constructor(){
    this.numArray=this.fillNumArray()
  }

  fillNumArray(): Num[]{
    return new Array(50)
    .fill(0).map((e:number, p:number)=>{

      return {
        value: p+1,
        color:  this.fillColorArray(p+1)
      }
      
    })
  }

  fillColorArray(value:number): string{
    if(value % 15 === 0){
      return 'red';
    } else if (value % 5 === 0){
      return 'green';
    } else if(value % 3 === 0){
      return 'orange';
    } else {
      return 'blue'
    }
  }
}
