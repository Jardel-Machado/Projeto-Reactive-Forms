import { TipoTelefoneEnum } from "../enums/tipo-telefone.enum";
import { ITelefoneParaMostrar } from "../interfaces/telefone-para-mostrar.interface";
import { ITelefone } from "../interfaces/usuario/telefone.interface";
import { TelefoneList } from "../types/telefone-list";
import { descricaoTipoTelefoneMap } from "./descricao-tipo-telefone-map";

export const prepararListaTelefone = (
  listaOriginalTelefoneUsuario: TelefoneList, mostrarTelefone: boolean, retorno: (telefone: ITelefoneParaMostrar) => void) => {    
  Object.keys(descricaoTipoTelefoneMap)
    .map(Number)
    .forEach((tipoTelefone: number) => {
      const telefoneEncontrado = listaOriginalTelefoneUsuario.find(
        (telefoneUsuario: ITelefone) => telefoneUsuario.tipo === tipoTelefone
      );

      let numero = '';

      if(mostrarTelefone){
        numero = telefoneEncontrado ? formatarNumeroTelefone(telefoneEncontrado) : '-';
      }
      else{
        numero = telefoneEncontrado ? formatarNumeroTelefoneParaEdicao(telefoneEncontrado) : '';
      }      

      retorno({
        tipo: tipoTelefone,
        tipoDescricao: descricaoTipoTelefoneMap[tipoTelefone as TipoTelefoneEnum],
        numero,
      });
    });
};

const formatarNumeroTelefone = (telefone: ITelefone) => { 
  return `${telefone.ddi} ${telefone.ddd} ${telefone.numero}`;
}

const formatarNumeroTelefoneParaEdicao = (telefone: ITelefone) => {
    return `${telefone.ddi}${telefone.ddd}${telefone.numero}`.replace(/[+\-]/g, '');
}