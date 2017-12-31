import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CampeoesComponentPage } from '../pages/campeoes-component/campeoes-component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{titulo: string, component: any}>;
  @ViewChild(Nav) nav: Nav;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { titulo: 'Home', component: HomePage },
        { titulo: 'Campeões', component: CampeoesComponentPage }
      ]
    });
  }

  openPage(page){
    this.menu.close();

    this.nav.setRoot(page.component);
  }
}

