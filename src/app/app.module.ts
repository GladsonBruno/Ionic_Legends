import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CardCampeaoComponent } from '../components/card-campeao/card-campeao';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CampeoesComponentPage } from '../pages/campeoes-component/campeoes-component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampeoesComponentPage,
    CardCampeaoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampeoesComponentPage,
    CardCampeaoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
