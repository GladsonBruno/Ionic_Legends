import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampeoesComponentPage } from './campeoes-component';

@NgModule({
  declarations: [
    CampeoesComponentPage,
  ],
  imports: [
    IonicPageModule.forChild(CampeoesComponentPage),
  ],
})
export class CampeoesComponentPageModule {}
