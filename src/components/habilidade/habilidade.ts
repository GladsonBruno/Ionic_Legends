import { Component, Input } from '@angular/core';
import { Habilidades } from './habilidade.model';

/**
 * Generated class for the HabilidadeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'habilidade-campeao',
  templateUrl: 'habilidade.html',
  styles: ['habilidade.scss']
})
export class HabilidadeComponent {

  @Input() HabilidadeCampeaoSelecionado: Habilidades;

  constructor() {
    console.log(this.HabilidadeCampeaoSelecionado);
  }

}
