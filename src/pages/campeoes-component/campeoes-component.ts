import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-campeoes-component',
  templateUrl: 'campeoes-component.html',
})
export class CampeoesComponentPage {

  titulo: string = "Campeões";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
