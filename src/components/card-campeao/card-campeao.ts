import { Component, Input } from '@angular/core';
import { Campeao } from './card-campeao.model';

@Component({
  selector: 'card-campeao',
  templateUrl: 'card-campeao.html',
  styles: [
    'card-campeao.scss'
  ]
})
export class CardCampeaoComponent {

  @Input() CampeaoAtual: Campeao;

  constructor() {

  }

  mostrarCampeao():void{
    console.log(this.CampeaoAtual);
  }

}
