import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Campeao} from '../../components/card-campeao/card-campeao.model';
import { Habilidades } from '../../components/habilidade/habilidade.model';

@IonicPage({
  name: "CampeaoDetail"
})
@Component({
  selector: 'page-campeoes-detail',
  templateUrl: 'campeoes-detail.html',
})
export class CampeoesDetailPage implements OnInit{

  campeaoAtual: Campeao;
  habilidades: Habilidades;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.campeaoAtual = navParams.data.campeao;
    this.habilidades = navParams.data.campeao.Habilidades;
  }

  ngOnInit(){
  }

}
