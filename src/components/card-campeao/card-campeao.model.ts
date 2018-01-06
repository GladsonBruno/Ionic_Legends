import { Habilidades } from '../habilidade/habilidade.model';

export class Campeao{
    Nome: string;
    Apelido: string;
    Habilidade_Passiva: [{titulo: string; descricao: string; imagem: string}];
    Habilidades: [ Habilidades ];
    Imagem: string;
    Regiao: string;
}