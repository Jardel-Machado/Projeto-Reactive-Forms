import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { Subscription, distinctUntilChanged, take } from 'rxjs';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';
import { EstadosService } from '../../services/estados.service';
import { PaisesService } from '../../services/paises.service';
import { EstadosList } from '../../types/estados-list';
import { PaisesList } from '../../types/paises-list';
import { UsuarioFormController } from './usuario-form-controller';

@Component({
  selector: 'app-container-informacoes-usuario',
  templateUrl: './container-informacoes-usuario.component.html',
  styleUrl: './container-informacoes-usuario.component.scss',
})
export class ContainerInformacoesUsuarioComponent
  extends UsuarioFormController
  implements OnInit, OnChanges
{
  indiceAbaAtual: number = 0;

  listaPaises: PaisesList = [];

  listaEstados: EstadosList = [];

  usuarioFormMudancaValorSubs!: Subscription;

  private readonly paisesService = inject(PaisesService);
  private readonly estadosService = inject(EstadosService);

  @Input({ required: true }) modoEdicao: boolean = false;

  @Input({ required: true }) usuarioSelecionado: IUsuario = {} as IUsuario;

  @Output() formStatusChangeEmitt = new EventEmitter<boolean>();
  @Output() usuarioFormPrimeiraMudancaEmitt = new EventEmitter<void>();

  ngOnInit() {
    this.usuarioFormStatusChange();
    this.buscarListaPaises();
  }
  ngOnChanges(changes: SimpleChanges) {    

    this.indiceAbaAtual = 0;

    const USUARIO_FOI_SELECIONADO =
      changes['usuarioSelecionado'] &&
      Object.keys(changes['usuarioSelecionado'].currentValue).length > 0;

    if (USUARIO_FOI_SELECIONADO) {
      if (this.usuarioFormMudancaValorSubs) this.usuarioFormMudancaValorSubs.unsubscribe();
      
      this.preencherUsuarioForm(this.usuarioSelecionado);
      this.usuarioFormPrimeiraMudanca();
      this.buscarListaEstados(this.usuarioSelecionado.pais);
    }    
  }
  paisSelecionado(nomePais: string) {
    this.buscarListaEstados(nomePais);
  }

  private usuarioFormPrimeiraMudanca() {
    this.usuarioFormMudancaValorSubs = this.usuarioForm.valueChanges
      .pipe(take(1))
      .subscribe(() => this.usuarioFormPrimeiraMudancaEmitt.emit());
  }

  private usuarioFormStatusChange() {
    this.usuarioForm.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe(() => this.formStatusChangeEmitt.emit(this.usuarioForm.valid));
  }

  private buscarListaEstados(pais: string) {
    this.estadosService
      .buscarEstados(pais)
      .pipe(take(1))
      .subscribe((estadosList: EstadosList) => {
        this.listaEstados = estadosList;
      });
  }

  private buscarListaPaises() {
    this.paisesService
      .buscarPaises()
      .pipe(take(1))
      .subscribe((paisesList: PaisesList) => {
        this.listaPaises = paisesList;
      });
  }
}
