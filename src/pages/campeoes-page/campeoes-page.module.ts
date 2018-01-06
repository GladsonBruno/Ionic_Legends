import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampeoesPage } from './campeoes-page';

@NgModule({
  declarations: [
    CampeoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CampeoesPage),
  ],
})
export class CampeoesPageModule {}
