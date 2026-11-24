import { Component, output, input, InputSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo-signal',
  styleUrl: './hijo-signal.scss',
  templateUrl: './hijo-signal.html',
})
export class HijoSignal {

  value: number;
  emitirClick = output<number>();
  textoDelPadre = input<string>('');

  constructor(){
    this.value = 0;
  }

  sendToFather(){
    this.value += 1;
    this.emitirClick.emit(this.value)
  }

  receiveFromFater(e: any){
    this.textoDelPadre = e;
  }
}
