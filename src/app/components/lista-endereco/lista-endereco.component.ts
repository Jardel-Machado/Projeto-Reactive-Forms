import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EnderecoList } from '../../types/endereco-list';
import { TipoEnderecoEnum } from '../../enums/tipo-endereco.enum';
import { IEndereco } from '../../interfaces/usuario/endereco.interface';
import { IEnderecoParaMostrar } from '../../interfaces/endereco-para-mostrar.interface';
import { descricaoTipoEnderecoMap } from '../../utils/descricao-tipo-endereco-map';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrl: './lista-endereco.component.scss',
})
export class ListaEnderecoComponent implements OnChanges {
  
  listaEnderecoParaMostrar: IEnderecoParaMostrar[] = [];

  @Input({ required: true }) listaEnderecoUsuario: EnderecoList | undefined =
    [];
  ngOnChanges(changes: SimpleChanges) {
    const LISTA_ENDERECO_CARREGADA = Array.isArray(
      changes['listaEnderecoUsuario'].currentValue
    );

    if (LISTA_ENDERECO_CARREGADA) {
      this.prepararListaEnderecoParaMostrar();
    }
  }
  prepararListaEnderecoParaMostrar() {
    this.listaEnderecoParaMostrar = [];

    Object.keys(descricaoTipoEnderecoMap)
      .map(Number)
      .forEach((tipoEndereco: number) => {
        const enderecoEncontrado = this.listaEnderecoUsuario?.find(
          (enderecoUsuario: IEndereco) => enderecoUsuario.tipo === tipoEndereco
        );
        this.listaEnderecoParaMostrar.push(
          this.retornaEnderecoParaMostrar(enderecoEncontrado, tipoEndereco)
        );
      });
  }
  retornaEnderecoParaMostrar(endereco: IEndereco | undefined, tipoEndereco: number): IEnderecoParaMostrar {
    if (!endereco) {
      return {
        tipoDescricao:
          descricaoTipoEnderecoMap[tipoEndereco as TipoEnderecoEnum],
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
}
