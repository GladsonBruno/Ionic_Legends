import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampeoesDetailPage } from './campeoes-detail';

@NgModule({
  declarations: [
    CampeoesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CampeoesDetailPage),
  ],
})
export class CampeoesDetailPageModule {}
