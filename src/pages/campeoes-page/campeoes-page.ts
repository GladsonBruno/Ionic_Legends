  import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { Campeao } from '../../components/card-campeao/card-campeao.model';
import {CampeoesService} from './campeoes-page.service';
import { CampeoesDetailPage } from '../campeoes-detail/campeoes-detail';

@IonicPage()
@Component({
  selector: 'page-campeoes-component',
  templateUrl: 'campeoes-page.html',
})
export class CampeoesPage implements OnInit {
  @ViewChild(Nav) nav: Nav;

  titulo: string = "Campeões";

  campeoes: Campeao[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private campeoesService: CampeoesService) { }

  ngOnInit(){
    this.campeoesService.ListarCampeoes()
    .subscribe(campeoes => this.campeoes = campeoes);
  }

  campeaoDetail(campeao){
    this.navCtrl.push(CampeoesDetailPage,{
      campeao
    });
  }

}
