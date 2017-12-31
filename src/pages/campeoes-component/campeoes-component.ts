import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Campeao } from '../../components/card-campeao/card-campeao.model';

@IonicPage()
@Component({
  selector: 'page-campeoes-component',
  templateUrl: 'campeoes-component.html',
})
export class CampeoesComponentPage {

  titulo: string = "Campeões";

  campeoes: Array<Campeao>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.campeoes = [
      { Nome: "Darius", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg", Regiao: "Noxus" },
      { Nome: "Graves", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg", Regiao: "Águas de Sentinela" },
      { Nome: "Jarvar IV", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg", Regiao: "Demácia"},
      { Nome: "Karthus", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_3.jpg", Regiao: "Ilhas das Sombras"},
      { Nome: "Kindred", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg", Regiao: "Runeterra" },
      { Nome: "Veigar", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg", Regiao: "Bandópolis"},
      { Nome: "Annie", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg", Regiao: "Runeterra"},
      { Nome: "Ashe", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg", Regiao: "FRELJORD"},
      { Nome: "Fiddlesticks", Imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg", Regiao: "Runeterra"}
    ]

  }


}
