import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaisesList } from '../../types/paises-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { EstadosList } from '../../types/estados-list';
import { estadoCivilArray } from '../../utils/descricao-estado-civil-map';

@Component({
  selector: 'app-informacoes-geral-editar',
  templateUrl: './informacoes-geral-editar.component.html',
  styleUrl: './informacoes-geral-editar.component.scss',
})
export class InformacoesGeralEditarComponent implements OnInit, OnChanges {
  listaPaisesFiltrados: PaisesList = [];

  listaEstadosFiltrados: EstadosList = [];

  @Input({ required: true }) usuarioForm!: FormGroup;

  @Input({ required: true }) listaPaises: PaisesList = [];

  @Input({ required: true }) listaEstados: EstadosList = [];

  @Output() paisSelecionadoEmit = new EventEmitter<string>();

  ngOnInit() {
    this.observarAlteracoesFormularioPais();
    this.observarAlteracoesFormularioEstado();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.listaPaisesFiltrados = this.listaPaises;
    this.listaEstadosFiltrados = this.listaEstados;
  }

  get estadoCivilArray() {
    return estadoCivilArray;
  }

  get emailControl(): FormControl {
    return this.usuarioForm.get('informacoesGeral.email') as FormControl;
  }

  get paisControl(): FormControl {
    return this.usuarioForm.get('informacoesGeral.pais') as FormControl;
  }

  get estadoControl(): FormControl {
    return this.usuarioForm.get('informacoesGeral.estado') as FormControl;
  }

  paisSelecionado(event: MatAutocompleteSelectedEvent) {
    this.paisSelecionadoEmit.emit(event.option.value);
  }  

  private observarAlteracoesFormularioPais() {
    this.paisControl.valueChanges.subscribe(this.filtrarListaPaises.bind(this));
    // this.paisControl.valueChanges.subscribe((value: string) => {
    //   this.filtrarListaPaises(value);
    // });
  }

  private filtrarListaPaises(termoPesquisado: string) {
    this.listaPaisesFiltrados = this.listaPaises.filter((pais) =>
      pais.name
        .toLocaleLowerCase()
        .includes(termoPesquisado.toLocaleLowerCase().trim())
    );
  }

  private observarAlteracoesFormularioEstado() {
    this.estadoControl.valueChanges.subscribe(
      this.filtrarListaEstados.bind(this)
    );

    // this.paisControl.valueChanges.subscribe((value: string) => {
    //   this.filtrarListaEstados(value);
    // });
  }

  private filtrarListaEstados(termoPesquisado: string) {
    this.listaEstadosFiltrados = this.listaEstados.filter((estado) =>
      estado.name
        .toLocaleLowerCase()
        .includes(termoPesquisado.toLocaleLowerCase().trim())
    );
  }
}
