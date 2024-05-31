import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITelefoneParaMostrar } from '../../interfaces/telefone-para-mostrar.interface';
import { TelefoneList } from '../../types/telefone-list';
import { prepararListaTelefone } from '../../utils/preparar-lista-telefone';

@Component({
  selector: 'app-lista-telefone',
  templateUrl: './lista-telefone.component.html',
  styleUrl: './lista-telefone.component.scss',
})
export class ListaTelefoneComponent implements OnChanges {
  listaTelefoneParaMostrar: ITelefoneParaMostrar[] = [];

  @Input({ required: true }) listaTelefoneUsuario: TelefoneList | undefined =
    [];
  ngOnChanges(changes: SimpleChanges) {
    const LISTA_TELEFONE_CARREGADA = Array.isArray(
      changes['listaTelefoneUsuario'].currentValue
    );

    if (LISTA_TELEFONE_CARREGADA) {
      this.prepararListaTelefoneParaMostrar();
    }
  }
  prepararListaTelefoneParaMostrar() {
    this.listaTelefoneParaMostrar = [];

    const listaOriginalTelefoneUsuario =
      this.listaTelefoneUsuario && this.listaTelefoneUsuario.length > 0
        ? this.listaTelefoneUsuario
        : [];

    prepararListaTelefone(listaOriginalTelefoneUsuario, true, (telefone) => {
      this.listaTelefoneParaMostrar.push(telefone);
    });
  }
}
