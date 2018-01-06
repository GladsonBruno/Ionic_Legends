import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CardCampeaoComponent } from '../components/card-campeao/card-campeao';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CampeoesPage } from '../pages/campeoes-page/campeoes-page';
import { HabilidadeComponent } from '../components/habilidade/habilidade';
import {CampeoesService} from '../pages/campeoes-page/campeoes-page.service';
import { HttpModule } from '@angular/http';
import {CampeoesDetailPage} from '../pages/campeoes-detail/campeoes-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampeoesPage,
    CampeoesDetailPage,
    CardCampeaoComponent,
    HabilidadeComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampeoesPage,
    CampeoesDetailPage,
    CardCampeaoComponent,
    HabilidadeComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CampeoesService
  ]
})
export class AppModule {}
