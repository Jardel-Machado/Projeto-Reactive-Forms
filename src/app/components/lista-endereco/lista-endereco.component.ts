import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EnderecoList } from '../../types/endereco-list';
import { TipoEnderecoEnum } from '../../enums/tipo-endereco.enum';
import { IEndereco } from '../../interfaces/usuario/endereco.interface';
import { IEnderecoParaMostrar } from '../../interfaces/endereco-para-mostrar.interface';
import { descricaoTipoEnderecoMap } from '../../utils/descricao-tipo-endereco-map';
import { prepararListaEndereco } from '../../utils/preparar-lista-endereco';

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

    const listaOriginalEnderecoUsuario = this.listaEnderecoUsuario && this.listaEnderecoUsuario.length > 0 ? this.listaEnderecoUsuario : [];

    prepararListaEndereco(listaOriginalEnderecoUsuario, true, (endereco) => {
      this.listaEnderecoParaMostrar.push(endereco);
    });
  }
  
}
