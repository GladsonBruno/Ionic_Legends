import { NgModule } from '@angular/core';
import { CardCampeaoComponent } from './card-campeao/card-campeao';
import { HabilidadeComponent } from './habilidade/habilidade';
@NgModule({
	declarations: [CardCampeaoComponent,
    HabilidadeComponent],
	imports: [],
	exports: [CardCampeaoComponent,
    HabilidadeComponent]
})
export class ComponentsModule {}
