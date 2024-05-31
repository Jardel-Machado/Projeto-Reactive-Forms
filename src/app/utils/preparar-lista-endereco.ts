import { TipoEnderecoEnum } from "../enums/tipo-endereco.enum";
import { IEnderecoParaMostrar } from "../interfaces/endereco-para-mostrar.interface";
import { IEndereco } from "../interfaces/usuario/endereco.interface";
import { EnderecoList } from "../types/endereco-list";
import { descricaoTipoEnderecoMap } from "./descricao-tipo-endereco-map";

export const prepararListaEndereco = (listaOriginalEnderecoUsuario: EnderecoList, mostrarEndereco: boolean, retorno: (endereco: IEnderecoParaMostrar) => void) => {
  Object.keys(descricaoTipoEnderecoMap).map(Number).forEach((tipoEndereco: number) => {
      const enderecoEncontrado = listaOriginalEnderecoUsuario?.find((enderecoUsuario: IEndereco) => enderecoUsuario.tipo === tipoEndereco
      );

      let endereco = {} as IEnderecoParaMostrar;
      
      if (mostrarEndereco) {
        endereco = formatarEnderecoParaMostrar(enderecoEncontrado, tipoEndereco);
      }
      else{
        endereco = formatarEnderecoParaMostrarParaEdicao(enderecoEncontrado, tipoEndereco);
      }

      retorno({
        ...endereco
      })
      
    });
};

const formatarEnderecoParaMostrar = (endereco: IEndereco | undefined, tipoEndereco: number): IEnderecoParaMostrar => {
    if (!endereco) {
      return {
        tipoDescricao: descricaoTipoEnderecoMap[tipoEndereco as TipoEnderecoEnum],
        tipo: tipoEndereco,
        logradouro: '-',
        complemento: '-',
        pais: '-',
        estado: '-',
        cidade: '-',
      };
    }

    return {
      tipoDescricao: descricaoTipoEnderecoMap[tipoEndereco as TipoEnderecoEnum],
      ...endereco,
    };
}

const formatarEnderecoParaMostrarParaEdicao = (endereco: IEndereco | undefined, tipoEndereco: number): IEnderecoParaMostrar => {
    if (!endereco) {
      return {
        tipoDescricao: descricaoTipoEnderecoMap[tipoEndereco as TipoEnderecoEnum],
        tipo: tipoEndereco,
        logradouro: '',
        complemento: '',
        pais: '',
        estado: '',
        cidade: '',
      };
    }

    return {
      tipoDescricao: descricaoTipoEnderecoMap[tipoEndereco as TipoEnderecoEnum],
      ...endereco,
    };
}