import { Component, signal } from '@angular/core';
import { HijoSignal } from '../hijo-signal/hijo-signal';

@Component({
  imports: [HijoSignal],
  selector: 'app-padre-signal',
  styleUrl: './padre-signal.scss',
  templateUrl: './padre-signal.html',
})
export class PadreSignal {

  value: number;
  textoParaHijo = signal<string>('');

  constructor(){
    this.value = 0;

  }

  recogerValorHijo(num: number){
    this.value =num
  }

  enviarTextoAHijo(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement; // Casting explícito
    this.textoParaHijo.set(input.value);
  }
}

