import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Campeao} from '../../components/card-campeao/card-campeao.model';
import {Legends_API} from '../../app/app.api';
import {ErrorHandler} from '../../app/app.error-handler';

@Injectable()
export class CampeoesService{
    constructor(private http: Http){}

    ListarCampeoes(): Observable<Campeao[]>{
        return this.http.get(`${Legends_API}/Campeoes`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}