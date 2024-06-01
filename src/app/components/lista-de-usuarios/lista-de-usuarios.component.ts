import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListaDeUsuariosResponse } from '../../types/lista-de-usuarios-response';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrl: './lista-de-usuarios.component.scss',
})
export class ListaDeUsuariosComponent {

  indexUsuarioSelecionado: number | undefined;

  @Input({ required: true }) listaDeUsuarios: ListaDeUsuariosResponse = [];
  @Input({ required: true }) modoEdicao: boolean = false;
  
  @Output('usuarioSelecionado') usuarioSelecionadoEmitt = new EventEmitter<number>();

  usuarioSelecionado(indexUsuario: number) {
    if(this.modoEdicao) return;
    this.indexUsuarioSelecionado = indexUsuario;
    this.usuarioSelecionadoEmitt.emit(indexUsuario);
  }
}
